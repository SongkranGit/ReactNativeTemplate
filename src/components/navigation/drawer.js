/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

// Containers
import Home from "../../containers/home";
import LoginFacebook from "../../containers/loginFacebook";
import LoginForm from "../../containers/loginForm";

// Components
import SideBar from "../sidebar";

// For register navigator screen on Home/LoginFacebook/LoginForm/More including sidebar
const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    LoginFacebook: { screen: LoginFacebook },
    LoginForm: { screen: LoginForm }
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
