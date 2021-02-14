import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image } from 'react-native';
import axios from 'axios';
import { formatCompliment } from "./util/util";

export default function App() {
  const [compliment, setCompliment] = useState("Hope you have a great day!");

  const getCompliment = () => {
    const url = "https://complimentr.com/api";
    axios.get(url)
      .then(response => {
        response.data?.compliment ? 
          setCompliment(formatCompliment(response.data.compliment)) : 
          setCompliment("I love you.")
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text>{compliment}</Text>
      <TouchableOpacity onPress={getCompliment}>
        <Image 
          style={styles.heartButton} 
          accessibilityLabel="Get a compliment" 
          source={require("./assets/heart-button.png")}/>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartButton: {
    width: '474px',
    height: '465px',
  }
});
