import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { signIn } from '../Config/Firebase';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from @react-navigation/native

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function getEmail(text) {
    setEmail(text);
  }
  function getPassword(text) {
    setPassword(text);
  }

  const navigation = useNavigation(); // Use useNavigation hook to access navigation object

  const login = async () => {
    if (!email || !password) {
      return Alert.alert('Please Enter all the Fields');
    }
    try {
      await signIn({ email, password });
      navigation.navigate('DashBoard'); // Navigate to 'DashBoard' screen
      setPassword('');
      setEmail('');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <Text style={styles.heading}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          placeholder="Please Enter Your Email"
          onChangeText={getEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Please Enter Your Password"
          onChangeText={getPassword}
          secureTextEntry={true}
        />

        <Button title="Login" onPress={login} color="#F95E63" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F95E63', 
  },
  whiteBox: {
    backgroundColor: '#FFF', // White background color for content box
    width: '100%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Black color for heading
    textAlign: 'center'
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
  loginLink: {
    color: '#F95E63',
    textDecorationLine: 'underline',
  },
});

export default Login;
