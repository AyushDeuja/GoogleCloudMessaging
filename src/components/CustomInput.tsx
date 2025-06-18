// CustomInput.tsx
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Input } from 'react-native-magnus';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}
const [showPassword, setShowPassword] = useState(false);

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  ...rest
}: InputProps) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      w={Dimensions.get('window').width - 30}
      h={50}
      rounded="lg"
      fontSize="lg"
      px="10"
      mb="10"
      {...rest}
    />
  );
};

export default CustomInput;
