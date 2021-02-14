import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { compliments } from "./util/compliments";

export default function App() {
  const [compliment, setCompliment] = useState("Hope you have a great day!");

  const getCompliment = () => {
    setCompliment(compliments[Math.floor(Math.random() * compliments.length)]);
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
