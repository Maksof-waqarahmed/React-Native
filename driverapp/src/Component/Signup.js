import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { register } from '../Config/Firebase';

const SignupPage = ({ navigation }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getName = (text) => {
        setName(text);
    };

    const getNumber = (text) => {
        setNumber(text);
    };

    const getEmail = (text) => {
        setEmail(text);
    };

    const getPassword = (text) => {
        setPassword(text);
    };

    const signup = async () => {

        if (!name || !number || !email || !password) {
            Alert.alert('Please fill all the fields');
            return;
        }
        try {
            await register({ name, email, number, password });
            navigation.navigate('Login');
            setName('')
            setNumber('')
            setEmail('')
            setPassword('')
        } catch (e) {
            alert(e.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.whiteBox}>
                <Text style={styles.heading}>Register Yourself</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Please Enter Your Name'
                    onChangeText={getName}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Please Enter Your Number'
                    onChangeText={getNumber}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Please Enter Your Email'
                    onChangeText={getEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Please Enter Your Password'
                    onChangeText={getPassword}
                    secureTextEntry={true}
                />

                <Button
                    title='Register'
                    onPress={signup}
                    color="#F95E63" // white text color
                />

                <Text style={styles.loginText}>
                    Already have an account? <Text
                        style={styles.loginLink}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Login
                    </Text>
                </Text>
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
        backgroundColor: '#F95E63', // Light background color
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

export default SignupPage;
