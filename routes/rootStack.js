import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "../app/containers/Main";
import viewProduct from "../app/containers/viewProduct";
import updateProduct from "../app/containers/updateProduct";
import NavigationPage from "../app/containers/NavigationPage";

const AppNavigator = createStackNavigator(
  {
    Home: viewProduct,
    Create: Main,
    Detail: updateProduct,
    Navigation: NavigationPage
  },
  {
    initialRouteName: "Navigation"
  }
);

export default createAppContainer(AppNavigator);
