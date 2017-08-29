import React, { Component } from 'react';
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base';

import AppHeader from '../header';
import AppFooter from '../footer';

export default class LoginFacebook extends Component {
  render() {
    return (
     <Container>
        <AppHeader title='Login Facebook' navigateTo={this.props.navigation} />

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

        <AppFooter activeTab='tabLoginFacebook' navigateTo={this.props.navigation} />
      </Container>
    );
  }
}
