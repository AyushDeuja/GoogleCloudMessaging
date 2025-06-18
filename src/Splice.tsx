import React from 'react';
import { Div, Image, ThemeProvider } from 'react-native-magnus';

const Splice = () => {
  return (
    <ThemeProvider>
      <Div bg="bgColor">
        <Image
          source={{
            uri: 'https://i.fbcd.co/products/resized/resized-750-500/563d0201e4359c2e890569e254ea14790eb370b71d08b6de5052511cc0352313.jpg',
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
