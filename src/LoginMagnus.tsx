import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Div, StatusBar, Icon, Text, ThemeProvider } from 'react-native-magnus';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

export const theme = {
  colors: {
    bgColor: '#5C95F8',
    btnColor: '#51E6A6',
  },
};

const LoginMagnus = () => {
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
              Login
            </Text>
            {/* <TextInput placeholder="email" style={styles.input} /> */}
            <CustomInput placeholder="Enter your email or mobile" />
            <CustomInput placeholder="Enter your password" type="password" />
            <CustomButton content="Log In" />
          </Div>

          <Div pt="xl" flexDir="row" alignItems="center">
            <Text color="white">Already have an account?</Text>

            <TouchableOpacity
              onPress={() => console.log('SignUp pressed')}
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
    </ThemeProvider>
  );
};

export default LoginMagnus;

// const styles = StyleSheet.create({
//   input: {
//     width: Dimensions.get('window').width - 30,
//     height: 40,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     fontSize: 15,
//     backgroundColor: 'white',
//     color: 'black',
//   },
// });
