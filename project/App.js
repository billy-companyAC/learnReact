import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, Image, ImageBackground } from 'react-native';
import { render } from 'react-dom';


export default class App extends Component{
  buttonClickListener = () => {
    alert("Clicked On Button !!!");
  };
render(){
  return (
    <ScrollView>
    <View style={styles.container}>
    <ImageBackground source={require('./assets/bg.jpg')} style={styles.image}>
    </ImageBackground>
      <Text style={styles.bigBlue}>Billy</Text>
      <Image source={require('./assets/hello.jpg')} style={{ width: 200, height: 200 }}/>
      <TextInput
        style={{
          height: 40,
          width:500,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue=""
      />
      <Button title="Click" color="#FF0000" onPress={this.buttonClickListener}/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    color: "#00ff00",
    textAlign: "right"
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  image: {
    flex: 1,
    height: 1000,
    width: 1000,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
