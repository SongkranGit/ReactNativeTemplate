import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class AppFooter extends Component {
  render() {
    const { navigate } = this.props.navigateTo;
    return (
        <Footer>
         <FooterTab>
            <Button vertical 
                    active={this.props.activeTab == 'tabHome'} 
                    onPress={() => navigate('Home')}>
              <Icon active={this.props.activeTab == 'tabHome'} name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical 
                    active={this.props.activeTab == 'tabLoginFacebook'} 
                    onPress={() => navigate('LoginFacebook')}>
              <Icon active={this.props.activeTab == 'tabLoginFacebook'} name="logo-facebook" />
              <Text>Login FB</Text>
            </Button>
            <Button vertical 
                    active={this.props.activeTab == 'tabLoginForm'} 
                    onPress={() => navigate('LoginForm')}>
              <Icon active={this.props.activeTab == 'tabLoginForm'} name="ios-log-in" />
              <Text>Login Form</Text>
            </Button>
            <Button vertical 
                    active={this.props.activeTab == 'tabMore'} 
                    onPress={() => navigate('More')}>
              <Icon active={this.props.activeTab == 'tabMore'} name="more" />
              <Text>More</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
