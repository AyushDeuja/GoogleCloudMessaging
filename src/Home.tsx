import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Div } from 'react-native-magnus';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import { axiosInstance } from './utils/axiosInstance';

const Home = () => {
  const navigation = useNavigation<any>();
  const [todos, setTodos] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('/todos');
      setTodos(res.data);
    } catch (err) {
      Alert.alert('Error', 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Div
      bg="white"
      p="md"
      m="sm"
      rounded="xl"
      shadow="sm"
      borderColor="gray300"
      borderWidth={1}
    >
      <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
      {item.description ? (
        <Text style={{ color: 'gray' }}>{item.description}</Text>
      ) : null}
    </Div>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, backgroundColor: '#F0F4F8' }}
    >
      <Div flex={1} p="lg">
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
          Your Todos
        </Text>

        <CustomInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <CustomInput
          placeholder="Description (optional)"
          value={description}
          onChangeText={setDescription}
        />
        <CustomButton content="Add Todo" />

        <Div mt="xl" flex={1}>
          {loading ? (
            <ActivityIndicator size="large" color="#5C95F8" />
          ) : (
            <FlatList
              data={todos}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              ListEmptyComponent={
                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                  No todos found.
                </Text>
              }
            />
          )}
        </Div>

        <Div mt="lg">
          <CustomButton content="Logout" onPress={logout} bg="red" />
        </Div>
      </Div>
    </KeyboardAvoidingView>
  );
};

export default Home;
