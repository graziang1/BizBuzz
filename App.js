import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, ImageBackground } from 'react-native';

const image = { uri: "./assets/school.png" };

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Hello Business Students!</Text>
      <Button 
        color="#de5d07"
        title="Find Resources" 
        onPress={() =>
          Alert.alert("Welcome to BizBuzz","What are your looking for?", [
            {text: "Find Links", onPress: () => console.log("Business Links")},
            {text: "Contact info", onPress: () => console.log("business@gmail.com")},
          ])
        }
      />
      <Button 
        color="blue"
        title="Connect With Us" 
        onPress={() =>
          Alert.alert("Welcome to BizBuzz","What are your looking for?", [
            {text: "Find Links", onPress: () => console.log("Business Links")},
            {text: "Contact info", onPress: () => console.log("business@gmail.com")},
          ])
        }
      />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default App;