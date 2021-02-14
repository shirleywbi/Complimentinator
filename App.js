import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const compliment = "";

  getCompliment = () => {
    return "You look great!";
  };

  return (
    <View style={styles.container}>
      <Text>{compliment}</Text>
      <TouchableOpacity onPress={getCompliment}>
        <Image source={require("./assets/heart-button.png")}></Image>
      </TouchableOpacity>
      <Button
        onPress={getCompliment}
        accessibilityLabel="Get a compliment"
      />
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
});
