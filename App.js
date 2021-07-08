import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Flashcards from './src/Flashcards';


export default function App() {
  return (
    <Flashcards/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
