import {
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Div, StatusBar, Text, ThemeProvider } from 'react-native-magnus';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

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
            <CustomInput placeholder="Enter your Name" />
            <CustomInput placeholder="Enter your email" />
            <CustomInput placeholder="Enter your email" />
            <CustomInput placeholder="Enter your password" type="password" />
            <CustomButton content="Sign Up" />
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
