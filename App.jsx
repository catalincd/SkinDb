import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import TabNavigator from './screens/Navigator';

export default function App() {
  
  StatusBar.setBarStyle('light-content');

  return (
    <TabNavigator />
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
