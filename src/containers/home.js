import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

import AppHeader from '../components/header';
import AppFooter from '../components/footer';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  Button,
  NativeModules,
  Image 
} from 'react-native'; 

// Progress bar 
import ProgressBar from '../components/progressbar';
import toastAndroid from '../components/toastandroid';
 
//var toastAndroid =  NativeModules.ToastAndroid;

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
   // toastAndroid.show('Awesome', 2000);
    toastAndroidTutorial.show('Awesome My ToastAndroid', 2000);
  }

  
  render() {
    return (
     <Container>
        <AppHeader title='Home' navigateTo={this.props.navigation} />

        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{ flex: 1,  
                justifyContent: 'center',
                alignItems: 'center',}} >
              <Text style={{ textAlign :'center', marginTop:50}} >
                Welcome to Native Module 
              </Text>

              <Image
                style={{width: 100, height: 100 , justifyContent: 'center', alignContent:'center' , marginTop:50}} 
                source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
              />
              
            </View>
            <View style={{ flex: 1 }} >
            <ProgressBar 
                    progress={0}
                    marginTop= {50}
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
