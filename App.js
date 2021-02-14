import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import axios from 'axios';
import { formatCompliment } from "./util/util";

const compliments = [
  "Your positivity is infectious.",
  "You’re a true gift to the people in your life.",
  "You inspire me to be a better person.",
  "Your smile makes me smile.",
  "Thanks for being you!"
];

export default function App() {
  const [compliment, setCompliment] = useState("Hope you have a great day!");

  const getCompliment = () => {
    const url = "https://complimentr.com/api";
    axios.get(url)
      .then(response => {
        response.data?.compliment ? 
          setCompliment(formatCompliment(response.data.compliment)) : 
          setCompliment(compliments[Math.floor(Math.random() * compliments.length)]);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.complimentText}>{compliment}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={getCompliment}>
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
  buttonContainer: {
    margin: '4rem',
    width: '30%',
    height: '30%',
  },
  complimentText: {
    fontSize: '25px',
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  heartButton: {
    width: '100%',
    height: '100%',
  }
});
