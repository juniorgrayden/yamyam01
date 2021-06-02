import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button
} from "react-native";
import Axios from "axios";

function Bpartner(props) {
  return (
    <View style={styles.bpartnerView}>
      <Text>ini partner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bpartnerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Bpartner;
