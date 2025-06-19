import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Div, Button } from 'react-native-magnus';

interface ButtonProps {
  content: string;
}

const CustomButton = ({ content }: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Button h={'50'} w={'100%'} rounded={'lg'} fontWeight="bold" bg="#51E6A6">
        {content}
      </Button>
    </TouchableOpacity>
  );
};

export default CustomButton;
