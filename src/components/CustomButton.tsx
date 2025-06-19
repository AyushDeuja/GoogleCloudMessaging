import React from 'react';
import { Button } from 'react-native-magnus';

interface ButtonProps {
  content: string;
  onPress?: () => void;
  bg?: string;
}

const CustomButton = ({ content, onPress, bg = '#51E6A6' }: ButtonProps) => {
  return (
    <Button
      h={50}
      w="100%"
      rounded="lg"
      fontWeight="bold"
      bg={bg}
      onPress={onPress}
      justifyContent="center"
      alignItems="center"
    >
      {content}
    </Button>
  );
};

export default CustomButton;
