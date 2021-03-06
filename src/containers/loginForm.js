import React, { Component } from 'react';
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base';

import AppHeader from '../components/header';
import AppFooter from '../components/footer';
 
export default class LoginForm extends Component {
  render() {
    return (
     <Container>
        <AppHeader title='Login Form' navigateTo={this.props.navigation} />

        {/* Login Form */}
        <Content padder>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>

            <Button block style={{ marginTop: 40 }} >
              <Text>Sign In</Text>
            </Button>
          </Form>
        </Content>

        <AppFooter activeTab='tabLoginForm' navigateTo={this.props.navigation} />
      </Container>
    );
  }
}
