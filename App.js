// @refresh reset
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import firebaseConfig from './firebase.json';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { compliments } from "./util/compliments";

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [compliment, setCompliment] = useState("You're amazing just the way you are.");

  const getCompliment = () => {
    setCompliment(compliments[Math.floor(Math.random() * compliments.length)]);
  };

  return (
    <View style={styles.container}>
      <Text 
        style={styles.complimentText}
      >
        {compliment}
      </Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={getCompliment}>
        <Image 
          style={styles.heartButton} 
          accessibilityLabel="Heart button: Click to get a compliment"
          resizeMode="contain"
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
    margin: 4,
    position: "absolute",
    bottom: 100,
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  complimentText: {
    position: "relative",
    bottom: '20%',
    margin: 20,
    fontSize: 25,
    textAlign: "center",
  },
  heartButton: {
    flex: 1,
    height: undefined, 
    width: undefined,
    alignSelf: 'stretch',
  }
});
