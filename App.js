import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ImageBackground } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/school.png')} />;
      <Text style={styles.text}>Hello Business Students!</Text>
      <Button 
        color="#de5d07"
        title="Find Resources" 
        onPress={() => this.props.navigation.navigate('./Views/Resources.js')}  
      />
      <Button 
        color="blue"
        title="Connect With Us" 
        onPress={() => this.props.navigation.navigate('./Views/Connect.js')}  
      />
    </View>
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