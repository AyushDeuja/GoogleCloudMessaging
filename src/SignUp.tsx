import { SafeAreaView } from 'react-native';
import React from 'react';
import { Div, StatusBar, Text, ThemeProvider } from 'react-native-magnus';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

const SignUp = () => {
  return (
    <ThemeProvider>
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
              Login
            </Text>
            {/* <TextInput placeholder="email" style={styles.input} /> */}
            <CustomInput placeholder="Enter your email" />
            <CustomInput placeholder="Enter your password" type="password" />
            <CustomButton content="Log In" />
          </Div>

          <Div pt="xl" flexDir="row" alignItems="center">
            <Text color="white">New to the app?</Text>
            <Text
              color="btnColor"
              fontWeight="bold"
              textDecorLine="underline"
              ml="5"
              onPress={() => console.log('Sign Up pressed')}
            >
              Sign Up
            </Text>
          </Div>
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default SignUp;
