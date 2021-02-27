import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Business Students!</Text>
      <Button 
        color="orange"
        title="Find Resources" 
        onPress={() =>
          alert.alert("Welcome to BizBuzz","What are your looking for?", [
            {text: "Find Links", onPress: () => console.log("Business Links")},
            {text: "Contact info", onPress: () => console.log("business@gmail.com")},
          ])
        }
      />
{/*      
        <image source={require("./assets/icon.png")}/> 
<StatusBar style="auto" /> */}
    </SafeAreaView>
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
