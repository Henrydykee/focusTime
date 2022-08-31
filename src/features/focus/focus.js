import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export const  Focus =() => {

  return (
    <View style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.titleContianer}>What would you like to focus on ?</Text>
        <TextInput/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContianer: {
    flex: 0.5,
    padding:  16,
    paddingHorizontal: 20,
    justifyContent: 'center',
  }
});