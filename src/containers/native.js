import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

import AppHeader from '../header';
import AppFooter from '../footer';

export default class Native extends Component {
    
  render() {
    return (
     <Container>
        <AppHeader title='Native' navigateTo={this.props.navigation} />

        {/* Home */}
        <Content padder>
          <Text>
            This is Content Section From Home Page
          </Text>
        </Content>

        <AppFooter activeTab='tabHome' navigateTo={this.props.navigation} />
      </Container>
    );
  }
}
