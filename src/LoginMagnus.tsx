import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Div, StatusBar, Icon, Text, ThemeProvider } from 'react-native-magnus';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const LoginMagnus = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {};

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
            value={email || mobile}
            onChangeText={setEmail || setMobile}
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

export default LoginMagnus;
