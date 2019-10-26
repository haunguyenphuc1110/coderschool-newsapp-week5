import React from 'react';
import {
  View,
  Text
} from 'react-native';

const Author = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is AuthorScreen</Text>
    </View>
  );
}

Author.navigationOptions = {
  header: null,
};

export default Author;
