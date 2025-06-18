import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { Div, Button } from 'react-native-magnus';

const CustomButton = () => {
  return (
    <Button
      h={'50'}
      px={'10'}
      w={Dimensions.get('window').width - 30}
      rounded={'lg'}
      fontWeight="bold"
      bg="btnColor"
    >
      Log In
    </Button>
  );
};

export default CustomButton;
