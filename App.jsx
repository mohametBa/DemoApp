import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default function App() {
  const tab = [1,2,3]
  return (
    <View style={styles.container}>
      <Text>Open up App.jsx</Text>
      {tab.map((t)=> (
        <Text key={t}></Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'center'
  }
});

