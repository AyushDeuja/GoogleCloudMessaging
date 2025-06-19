import {
  Alert,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Div, StatusBar, Text, ThemeProvider } from 'react-native-magnus';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import { axiosInstance } from './utils/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const theme = {
  colors: {
    bgColor: '#5C95F8',
    btnColor: '#51E6A6',
  },
};
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    console.log({ name, email, mobile, password }); // 👈 Debug log

    if (!name.trim() || !email.trim() || !mobile.trim() || !password.trim()) {
      Alert.alert('Missing Fields', 'All fields are required!');
      return;
    }

    try {
      const response = await axiosInstance.post('/auth/register', {
        name,
        email,
        mobile,
        password,
      });
      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      Alert.alert('Success', 'Registration successful!');
    } catch (err: any) {
      console.log(err?.response?.data || err.message);
      Alert.alert(
        'Registration failed',
        err?.response?.data?.message || 'Please try again.',
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="bgColor" barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Div
          bg="bgColor"
          h="100%"
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <Div w={'100%'} px={20}>
            <Text
              color="white"
              fontWeight="bold"
              fontSize="5xl"
              textAlign="center"
              pb="xl"
            >
              Sign Up
            </Text>
            {/* <TextInput placeholder="email" style={styles.input} /> */}
            <CustomInput
              placeholder="Enter your Name"
              value={name}
              onChangeText={setName}
            />
            <CustomInput
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
            />
            <CustomInput
              placeholder="Enter your mobile"
              value={mobile}
              onChangeText={setMobile}
            />
            <CustomInput
              placeholder="Enter your password"
              type="password"
              value={password}
              onChangeText={setPassword}
            />
            <CustomButton
              content="Sign Up"
              onPress={() => Alert.alert('Test', 'It works')}
            />
          </Div>

          <Div pt="xl" flexDir="row" alignItems="center">
            <Text color="white">Already have an account?</Text>

            <TouchableOpacity
              onPress={() => console.log('LogIn pressed')}
              activeOpacity={0.6}
            >
              <Text
                ml="5"
                fontWeight="bold"
                textDecorLine="underline"
                color="#51E6A6"
              >
                Log In
              </Text>
            </TouchableOpacity>
          </Div>
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default SignUp;
