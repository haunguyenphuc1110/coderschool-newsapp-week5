import React, {Component} from 'react';
import {
  View,
  Dimensions,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Card from '../../components/Card/Card.component';
import Modal from '../../components/Modal/Modal.component';
import styles from './Search.styles';
const width = Dimensions.get('window').width;

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      search: '',
      modalVisible: false,
      modalArticleData: {}
    };
  }

  componentWillReceiveProps(nexProps){
    if (!nexProps.pending && (nexProps.pending !== this.props.pending)) {
      this.setState({
        loading: false,
      });
    }
  }

  handleModalShow = (item) => {
    this.setState({
      modalVisible: true,
      modalArticleData: item
    });
  }

  handleModalClose = () => {
    this.setState({
      modalVisible: false,
      modalArticleData: {}
    });
  }

  updateSearch = search => {
    this.setState({ search });
  }

  onSearch = () => {
    this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
    this.props.searchNews(this.state.search)
  }

  renderArticleItem = ({ item }) => {
    return (
      <Card 
        item={item}
        handleModalShow={() => this.handleModalShow(item)}
      />
    );
  };

  renderKey = (item, index) => "ARTICLE" + index;

  render(){
    const { search, loading, modalVisible, modalArticleData } = this.state;
    const { news } = this.props;
    if (loading){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" loading={loading} />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme={true}
          inputStyle={styles.input}
          containerStyle={{width: width}}
          placeholder="Search title..."
          onSubmitEditing={this.onSearch}
          onChangeText={this.updateSearch}
          value={search}
        />
        <FlatList
          ref={ref => this.flatListRef = ref}
          data={news}
          renderItem={this.renderArticleItem}
          keyExtractor={this.renderKey}
        />
        <Modal 
          showModal={modalVisible}
          articleData={modalArticleData}
          onClose={this.handleModalClose}
        />
      </View>
    );
  }
}

Search.navigationOptions = {
  header: null,
};

export default Search;
