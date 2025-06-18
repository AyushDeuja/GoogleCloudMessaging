import { View, Text } from 'react-native';
import React from 'react';
import { Div, StatusBar, ThemeProvider } from 'react-native-magnus';

const theme = {
  colors: {
    blue: '#5C95F8',
  },
};

const LoginMagnus = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#5C95F8" barStyle="light-content" />
      <Div bg="#5C95F8" h="100%">
        <Text>LoginMagnus</Text>
      </Div>
    </ThemeProvider>
  );
};

export default LoginMagnus;
