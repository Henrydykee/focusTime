import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from '../../components/rounded_button';

export const Focus = ({addSubject}) => {

  const [tmpItem, setTmpItem] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.titleContianer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: 20 }} 
          onSubmitEditing={
            ({nativeEvent}) => {
             setTmpItem(nativeEvent.text)
            }
          }
            />
          <RoundedButton size={50} title="+" onPress={() => {
            addSubject(tmpItem)
          }} />
        </View>
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
    paddingHorizontal: 20,
    // padding:  16,
    // paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});