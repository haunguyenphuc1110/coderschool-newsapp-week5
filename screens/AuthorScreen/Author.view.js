import React from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { Card } from 'react-native-elements';
import styles from './Author.styles';
const renderArticleItem = (item) => {
  return (
    <Card 
      containerStyle={styles.card} 
      titleStyle={styles.title}>
      <View style={styles.row}>
        <Text style={styles.label}>{item.author}</Text>
        <Text style={styles.info}>Numer of articles: {item.numArticle}</Text>
      </View>
    </Card>
  )
}

const Author = (props) => {
  return (
    <FlatList
      data={props.authors}
      renderItem={({item})=>renderArticleItem((item))}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

Author.navigationOptions = {
  header: null,
};

export default Author;
