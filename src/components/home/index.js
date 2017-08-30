import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

import AppHeader from '../header';
import AppFooter from '../footer';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  Button,
  NativeModules
} from 'react-native';

// Progress bar 
import ProgressBar from '../progressbar';
//import ImageView from '../ImageView';

var toastAndroidTutorial = NativeModules.ToastAndroidTutorial;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: '#1934af',
      marginBottom: 5,
  },
  progressBar: {
      height: 50,
      // flex: 1,
      margin: 20,
      opacity : 0.9,
      justifyContent: 'center',
      width: Dimensions.get('window').width - 2 * 20,
  },
});

export default class Home extends Component {
    
  handleClick = () => {
    //console.log('okkkkk')
    toastAndroidTutorial.show('Awesome', 5000);
  }

  
  render() {
    return (
     <Container>
        <AppHeader title='Home' navigateTo={this.props.navigation} />


        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{ flex: 1,}} >
              <Text style={{ textAlign :'center', margin:20 }}    >
                Welcome to Native Module 
              </Text>

              
            </View>
            <View style={{ flex: 1,}} >
            <ProgressBar 
                    progress={0}
                    indeterminate={true}
                    style={styles.progressBar} />
            </View>
            <View style={{ margin:20 , flex: 1 }} >
            <Button 
                    onPress={this.handleClick}
                    title="My Custom Native Module"
                    color="#19c91b"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
          </View>

        <AppFooter activeTab='tabHome' navigateTo={this.props.navigation} />
      </Container>
    );
  }
}
