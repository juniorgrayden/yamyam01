import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const NavigationPage = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>BPartner</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>OrderLine</Text>
      </TouchableOpacity>
    </View>
  );
};
export default NavigationPage;
