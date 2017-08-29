import React, { Component } from 'react';
import { Header, Left, Right, Body, Button, Icon, Title } from 'native-base';

export default class AppHeader extends Component {
  render() {
    const { navigate } = this.props.navigateTo;
    return (
        <Header>
          <Left>
            <Button transparent
                onPress={() => navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}
