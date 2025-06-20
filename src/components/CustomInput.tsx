import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Input } from 'react-native-magnus';
import Feather from 'react-native-vector-icons/Feather';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type?: 'text' | 'password';
}

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  type = 'text',
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const secureTextEntry = isPassword && !showPassword;

  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      h={50}
      rounded="lg"
      fontSize="lg"
      px="10"
      mb="10"
      suffix={
        isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        )
      }
      {...rest}
    />
  );
};

export default CustomInput;
