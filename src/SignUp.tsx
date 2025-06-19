import { SafeAreaView } from 'react-native';
import React from 'react';
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
            <CustomInput placeholder="Enter your name" />
            <CustomInput placeholder="Enter your email" />
            <CustomInput placeholder="Enter your mobile" />
            <CustomInput placeholder="Enter your password" type="password" />
            <CustomButton content="Sign Up" />
          </Div>

          <Div pt="xl" flexDir="row" alignItems="center">
            <Text color="white">Already have an account?</Text>
            <Text
              color="#51E6A6"
              fontWeight="bold"
              textDecorLine="underline"
              ml="5"
              onPress={() => console.log('Sign Up pressed')}
            >
              Log In
            </Text>
          </Div>
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default SignUp;
