import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Axios from "axios";

function updateProduct({ navigation }) {
  const addProduct = () => {
    const product = JSON.stringify({
      name: name,
      value: value,
      description: description,
      price: parseInt(price)
    });

    Axios.put(
      `http://192.168.88.152:5000/api/v1/products/${m_product_id}`,
      product,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(response => {
        console.log("checking response", response);
        setInputName("");
        setInputDescription("");
        setInputPrice("");
        setInputValue("");
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });

    //    Axios.get('http://192.168.88.233:5000/api/v1/products').then(response=>{console.log(response.data)}) ;
  };

  const deleteProduct = () => {
    const product = JSON.stringify({
      name: name,
      value: value,
      description: description,
      price: parseInt(price)
    });

    Axios.delete(`http://192.168.88.152:5000/api/v1/products/${m_product_id}`, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log("checking response", response);
        setInputName("");
        setInputDescription("");
        setInputPrice("");
        setInputValue("");
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  //const {width, height} =Dimensions.get('window');
  const [name, setInputName] = useState(navigation.getParam("name"));
  const [description, setInputDescription] = useState(
    navigation.getParam("description")
  );
  const [price, setInputPrice] = useState(navigation.getParam("price"));
  const [value, setInputValue] = useState(navigation.getParam("value"));
  const [m_product_id] = useState(navigation.getParam("m_product_id"));

  return (
    <View style={styles.updateView}>
      <View style={styles.inputForm}>
        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Name</Text> */}
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={value => setInputName(value)}
            placeholder="Name"
          ></TextInput>
        </View>

        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Description</Text> */}
          <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={value => setInputDescription(value)}
            placeholder="Value"
          ></TextInput>
        </View>

        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Description</Text> */}
          <TextInput
            style={styles.textInput}
            value={description}
            onChangeText={value => setInputDescription(value)}
            placeholder="Description"
          ></TextInput>
        </View>

        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Description</Text> */}
          <TextInput
            style={styles.textInput}
            value={price}
            onChangeText={value => setInputDescription(value)}
            placeholder="Price"
          ></TextInput>
        </View>

        <TouchableOpacity onPress={addProduct} style={styles.addButton}>
          <Text style={styles.addButtonText}>UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteProduct} style={styles.deleteButton}>
          <Text style={styles.addButtonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  updateView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  addButtonText: {},
  addButton: {
    backgroundColor: "skyblue"
  },
  deleteButton: {
    backgroundColor: "red"
  },
  header: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#00CFE6",
    paddingTop: 20,
    paddingBottom: 20
  },
  productContainer: {
    // flex: 1,
    paddingVertical: 30,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5
  },
  inputForm: {
    marginVertical: 10
  },
  textContainer: {
    margin: 5,
    borderColor: "#FB6949"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    fontSize: 23,
    borderRadius: 5,
    elevation: 3
  }

  // Title:{
  //   width:width,
  //   marginHorizontal: width *0.05,
  //   marginVertical:width *0.03,
  //   color :'black',
  //   fontSize:20,
  //   fontWeight:'bold',
  // },
  // Subtitle:{
  //   marginHorizontal: width *0.05,
  //   fontSize:15,
  //   color:'gray'
  // }
});

export default updateProduct;
