import React from 'react';
import { Div, Image, StatusBar, ThemeProvider } from 'react-native-magnus';

const Splice = () => {
  return (
    <ThemeProvider>
      <StatusBar backgroundColor="#5C95F8" barStyle="light-content" />
      <Div
        bg="#5C95F8"
        h={'100%'}
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          source={{
            uri: 'https://www.shutterstock.com/image-vector/modern-vector-graphic-leaf-abstrack-600nw-1960180105.jpg',
          }}
          w={300}
          h={200}
          rounded="lg"
        />
      </Div>
    </ThemeProvider>
  );
};

export default Splice;
