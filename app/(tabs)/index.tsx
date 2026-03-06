import React, { useState } from 'react';
import { Alert, Button, Image, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  const handleGreeting = () => {
    console.log('Button pressed!');
    console.log('Current name:', name);
    
    if (name.trim()) {
      if (Platform.OS === 'web') {
        window.alert(`Nice to meet you, ${name}! 😊`);
      } else {
        Alert.alert(
          'Hello!',
          `Nice to meet you, ${name}! 😊`,
          [{ text: 'OK' }]
        );
      }
    } else {
      if (Platform.OS === 'web') {
        window.alert('Please enter your name first!');
      } else {
        Alert.alert(
          'Hello!',
          'Please enter your name first!',
          [{ text: 'OK' }]
        );
      }
    }
  };

  return (
    <View style={styles.container}>
    
      <Image
        source={require('../../assets/images/kuromi.jpg')}
        style={styles.logo}
        resizeMode="cover"
      />
      
      <Text style={styles.greeting}>
        {name ? `Hello, ${name}! 😊` : 'Hello, Kuromi Fan! 💀'}
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      

      <View style={styles.buttonContainer}>
        <Button
          title="SAY HELLO"
          onPress={handleGreeting}
          color="#FF69B4"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A1B2D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FF69B4',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F5E6E6',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#FF69B4',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#3A2A3D',
    color: '#F5E6E6',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    width: 250,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 5,
  },
});