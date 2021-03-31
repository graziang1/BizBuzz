import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView, Button, ImageBackground, Image } from 'react-native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = ({navigation}) => {
  return (
    <NavigationContainer style={styles.container}>
      <Image source={require('./assets/school.png')} />
      <Text style={styles.text}>Hello Business Students!</Text>
      <Button 
        color="#de5d07"
        title="Find Resources" 
        onPress={() => navigation.navigate('./Views/Resources.js', {} )} 
      />
      <Button 
        color="blue"
        title="Connect With Us" 
        onPress={() => navigation.navigate('./Views/Contact.js', )}  
      />
    </NavigationContainer>
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