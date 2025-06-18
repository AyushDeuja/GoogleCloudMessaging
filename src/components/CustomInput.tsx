// CustomInput.tsx
import React from 'react';
import { Dimensions } from 'react-native';
import { Input } from 'react-native-magnus';

interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={{ width: Dimensions.get('window').width - 30 }}
      h={50}
      rounded="lg"
      fontSize="lg"
      px="10"
      mb="20"
      {...rest}
    />
  );
};

export default CustomInput;
