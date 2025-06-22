import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Div, StatusBar, Text, Icon } from 'react-native-magnus';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { axiosInstance } from './utils/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

const Login = () => {
  const navigation = useNavigation<any>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [biometricAvailable, setBiometricAvailable] = useState(false);

  useEffect(() => {
    rnBiometrics.isSensorAvailable().then(result => {
      if (result.available && result.biometryType !== null) {
        setBiometricAvailable(true);
      }
    });
  }, []);

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
      await AsyncStorage.setItem('token', token); // optional
      navigation.navigate('Home');
    } catch (err: any) {
      Alert.alert(
        'Login failed',
        err?.response?.data?.message || 'Please try again.',
      );
    }
  };

  const handleFingerprintLogin = async () => {
    try {
      const credentials = await Keychain.getGenericPassword({
        authenticationPrompt: {
          title: 'Login with Biometrics',
          subtitle: 'Use your fingerprint or Face ID',
          description: 'Authenticate to access the app',
        },
      });

      if (credentials) {
        const token = credentials.password;
        await AsyncStorage.setItem('token', token); // optional
        navigation.navigate('Home');
      } else {
        Alert.alert('Authentication failed', 'Biometric login cancelled.');
      }
    } catch (error) {
      Alert.alert('Biometric Error', 'Fingerprint login failed.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="bgColor" barStyle="light-content" />
      <Div bg="bgColor" flex={1} alignItems="center" justifyContent="center">
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

          {biometricAvailable && (
            <Div mt="xl" alignItems="center">
              <TouchableOpacity
                onPress={handleFingerprintLogin}
                activeOpacity={0.7}
              >
                <Div row alignItems="center">
                  <Icon
                    name="fingerprint"
                    fontFamily="MaterialIcons"
                    fontSize={30}
                    color="white"
                  />
                  <Text ml="md" color="white" fontWeight="bold">
                    Login with Fingerprint
                  </Text>
                </Div>
              </TouchableOpacity>
            </Div>
          )}
        </Div>

        <Div pt="xl" flexDir="row" alignItems="center">
          <Text color="white">Don't have an account?</Text>
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
