import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { Card, Button, Icon } from 'react-native-elements';
import styles from './Card.styles';

const CardContainer = props => {
  const { 
    title, 
    urlToImage, 
    source, 
    content, 
    publishedAt 
  } = props.item;
  return (
    <Card 
      containerStyle={styles.card} 
      title={title} 
      image={{uri: urlToImage}}
      titleStyle={styles.title}>
      <View style={styles.row}>
        <Text style={styles.label}>Source</Text>
        <Text style={styles.info}>{source.name}</Text>
      </View>
      <Text>{content}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Published</Text>
        <Text style={styles.info}>
          {moment(publishedAt).format('LLL')}
        </Text>
      </View>
      <Button 
        icon={<Icon />} 
        title="Read more" 
        backgroundColor="#03A9F4" 
        onPress={props.handleModalShow}/>
    </Card>
  )
};

export default CardContainer;