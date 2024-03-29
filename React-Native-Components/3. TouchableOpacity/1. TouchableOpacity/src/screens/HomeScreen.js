import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return <View>
            <Text style={styles.text}>Hi there!</Text>
            <Button title="Go to Component Demo" onPress={()=>{console.log("Button Pressed")}}/>
            <TouchableOpacity onPress={()=> console.log("List Pressed")}>
              <Text>Go to List Demo</Text>
            </TouchableOpacity>
         </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
