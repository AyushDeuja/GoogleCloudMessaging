import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './components/CustomButton';
import { Div } from 'react-native-magnus';

const Home = () => {
  const navigation = useNavigation<any>();

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'bgColor',
      }}
    >
      <Text>Welcome to Home Screen!</Text>
      <Div mt="lg" w="80%">
        <CustomButton content="Logout" onPress={logout} bg="red" />
      </Div>
    </View>
  );
};

export default Home;
