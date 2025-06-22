import React, { useState } from 'react';
import { Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Div, StatusBar, Text, ThemeProvider } from 'react-native-magnus';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import { axiosInstance } from './utils/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import ReactNativeBiometrics from 'react-native-biometrics';

const SignUp = () => {
  const navigation = useNavigation<any>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const saveTokenWithBiometrics = async (token: string) => {
    const rnBiometrics = new ReactNativeBiometrics();
    const { available } = await rnBiometrics.isSensorAvailable();

    if (available) {
      const enable = await new Promise<boolean>(resolve => {
        Alert.alert(
          'Enable Biometric Login?',
          'Do you want to use fingerprint or Face ID next time to login?',
          [
            { text: 'No', onPress: () => resolve(false), style: 'cancel' },
            { text: 'Yes', onPress: () => resolve(true) },
          ],
        );
      });

      if (enable) {
        await Keychain.setGenericPassword('biometric', token, {
          accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET,
          accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
        });
      }
    }
  };

  const registerUser = async () => {
    if (!name || !email || !mobile || !password) {
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
      await saveTokenWithBiometrics(token);
      navigation.navigate('Home');
    } catch (err: any) {
      Alert.alert(
        'Registration failed',
        err?.response?.data?.message || 'Please try again.',
      );
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
            Sign Up
          </Text>

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
          <CustomButton content="Sign Up" onPress={registerUser} />
        </Div>

        <Div pt="xl" flexDir="row" alignItems="center">
          <Text color="white">Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
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
  );
};

export default SignUp;
