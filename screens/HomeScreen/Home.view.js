import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from '../../components/Modal/Modal.component';
import Card from '../../components/Card/Card.component';
import styles from './Home.styles';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pageNumber: 1,
      modalVisible: false,
      isRefreshing: false,
      modalArticleData: {}
    };
  }

  componentWillReceiveProps(nexProps){
    if (!nexProps.pending && (nexProps.pending !== this.props.pending)) {
      this.setState({
        loading: false,
        isRefreshing: false
      });
    }
  }

  componentDidMount() {
    this.props.getNews(this.state.pageNumber);
  }

  onRefresh = () => {
    this.setState({ 
      isRefreshing: true,
      pageNumber: 1,
      loading: true
    });
    this.props.reset();
    this.props.getNews(1);
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

  renderArticleItem = ({ item }) => {
    return (
      <Card 
        item={item}
        handleModalShow={() => this.handleModalShow(item)}
      />
    );
  };

  scrollToTop = () => {
    this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
  }

  renderKey = (item, index) => "ARTICLE" + index;

  render() {
    const { loading, pageNumber, modalVisible, modalArticleData } = this.state;
    const { news, getNews } = this.props;
    if (loading){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" loading={loading} />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Articles Count:</Text>
          <Text style={styles.info}>{news.length}</Text>
        </View>
        <FlatList
          ref={ref => this.flatListRef = ref}
          data={news}
          renderItem={this.renderArticleItem}
          keyExtractor={this.renderKey}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={() => {
            this.setState({ pageNumber: pageNumber + 1 });
            getNews(pageNumber + 1);
          }} 
          onEndReachedThreshold={1}
          ListFooterComponent={<ActivityIndicator size="large" loading={loading} />}
        />
        <View style={styles.buttonUp}>
          <Icon name="arrow-drop-up" size={40} color='black' onPress={this.scrollToTop}/>
        </View>
        <Modal 
          showModal={modalVisible}
          articleData={modalArticleData}
          onClose={this.handleModalClose}
        />
      </View>
    );
  }
}

export default Home;
