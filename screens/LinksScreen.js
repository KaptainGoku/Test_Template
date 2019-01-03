import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Form from '../form/Form';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Tree Info',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
  
        <Form />
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
