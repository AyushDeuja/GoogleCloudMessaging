import { Dimensions, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import {
  Div,
  Input,
  StatusBar,
  Text,
  ThemeProvider,
} from 'react-native-magnus';
import CustomInput from './components/CustomInput';

const theme = {
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
          <Div>
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
            <CustomInput placeholder="Enter your password" />
          </Div>

          <Div>
            <Text>Hi</Text>
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
