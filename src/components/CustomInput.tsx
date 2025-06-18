// CustomInput.tsx
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Input, Icon } from 'react-native-magnus';

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
      w={Dimensions.get('window').width - 30}
      h={50}
      rounded="lg"
      fontSize="lg"
      px="10"
      mb="10"
      suffix={
        isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              fontFamily="Feather"
              fontSize="lg"
              color="gray700"
            />
          </TouchableOpacity>
        )
      }
      {...rest}
    />
  );
};

export default CustomInput;
