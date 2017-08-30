import React, { Component } from 'react';
import { Container, Content, Left, Right, Body, Icon, Text, List, ListItem } from 'native-base';

import AppHeader from '../header'
import AppFooter from '../footer'

const datas = [
	{
    name: "Azure",
    // route: "Home",
    icon: "logo-windows",
  },
  {
    name: "Crash Report",
    // route: "Home",
    icon: "md-bug",
  },
  {
    name: "Web View",
    // route: "Home",
    icon: "md-globe",
  },
  {
    name: "Form",
    // route: "Home",
    icon: "information",
  },
  {
    name: "List",
    // route: "Home",
    icon: "list",
  },
  {
    name: "Map",
    // route: "Home",
    icon: "map",
  },
  {
    name: "Setting",
    // route: "Home",
    icon: "settings",
  },
    
];

export default class More extends Component {
  render() {
    return (
     <Container>
        <AppHeader title='More' navigateTo={this.props.navigation} />

        {/* More */}
        <Content>
          
        </Content>

        <AppFooter activeTab='tabMore' navigateTo={this.props.navigation} />
      </Container>
    );
  }
}
