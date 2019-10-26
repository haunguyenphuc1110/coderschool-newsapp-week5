import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList
} from 'react-native';
import moment from 'moment';
import { Card, Button, Icon } from 'react-native-elements';
import styles from './Home.styles';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pageNumber: 1
    };
  }

  componentWillReceiveProps(nexProps){
    if (!nexProps.pending && (nexProps.pending !== this.props.pending)) {
      this.setState({
        loading: false
      });
    }
  }

  componentDidMount() {
    this.props.getNews(this.state.pageNumber);
  }

  renderArticleItem = ({ item }) => {
    return (
      <Card 
        containerStyle={styles.card} 
        title={item.title} 
        image={{uri: item.urlToImage}}
        titleStyle={styles.title}>
        <View style={styles.row}>
          <Text style={styles.label}>Source</Text>
          <Text style={styles.info}>{item.source.name}</Text>
        </View>
        <Text>{item.content}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Published</Text>
          <Text style={styles.info}>
            {moment(item.publishedAt).format('LLL')}
          </Text>
        </View>
        <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4" />
      </Card>
    );
  };

  render() {
    const { loading, pageNumber } = this.state;
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
        data={news}
        renderItem={this.renderArticleItem}
        keyExtractor={item => item.title}
        onEndReached={() => {
          this.setState({ pageNumber: pageNumber + 1 });
          getNews(pageNumber + 1);
        }} 
        onEndReachedThreshold={1}
        ListFooterComponent={<ActivityIndicator size="large" loading={loading} />}
      />
      </View>
    );
  }
}

export default Home;
