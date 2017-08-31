/* @flow */

import React, { Component } from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./components/navigation/drawer";


// For register navigator Drawer
const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer }
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default class App extends Component {
    constructor() {
      super();
      this.state = {
        isReady: false
      };
    }
  
    render() {
      return (
        <Root>
            <AppNavigator />
        </Root>
      );
    }
  }
