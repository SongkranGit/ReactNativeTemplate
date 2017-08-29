/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home";
import LoginFacebook from "./components/login/loginFacebook";
import LoginForm from "./components/login/loginForm";
import More from "./components/more";

import SideBar from "./components/sidebar";

// For register navigator screen on Home/LoginFacebook/LoginForm/More including sidebar
const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    LoginFacebook: { screen: LoginFacebook },
    LoginForm: { screen: LoginForm },
    More: { screen: More },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default Drawer;
