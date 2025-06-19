import { Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Div, StatusBar, Icon, Text, ThemeProvider } from 'react-native-magnus';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { axiosInstance } from './utils/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation<any>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Missing Fields', 'All fields are required!');
      return;
    }
    try {
      const response = await axiosInstance.post('/auth/login', {
        username,
        password,
      });
      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Home');
    } catch (err: any) {
      Alert.alert(
        'Login failed',
        err?.response?.data?.message || 'Please try again.',
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="bgColor" barStyle="light-content" />
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
            Login
          </Text>
          <CustomInput
            placeholder="Enter your email or mobile"
            value={username}
            onChangeText={setUsername}
          />
          <CustomInput
            placeholder="Enter your password"
            type="password"
            value={password}
            onChangeText={setPassword}
          />
          <CustomButton content="Log In" onPress={loginUser} />
        </Div>

        <Div pt="xl" flexDir="row" alignItems="center">
          <Text color="white">Already have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            activeOpacity={0.6}
          >
            <Text
              ml="5"
              fontWeight="bold"
              textDecorLine="underline"
              color="#51E6A6"
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </Div>
      </Div>
    </SafeAreaView>
  );
};

export default Login;
