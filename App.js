import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, ImageBackground } from 'react-native';


const image = { uri: "./assets/school.png" };

const App = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Hello Business Students!</Text>
      <Button 
        color="#de5d07"
        title="Find Resources" 
        onPress={() => this.props.navigation.navigate('/Views/Resources.js')}  
      />
      <Button 
        color="blue"
        title="Connect With Us" 
        onPress={() => this.props.navigation.navigate('/Views/Connect.js')}  
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