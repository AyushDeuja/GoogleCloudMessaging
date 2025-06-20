import React, { useState } from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Div, Text } from 'react-native-magnus';
import { axiosInstance } from './utils/axiosInstance';
import TodoList from './components/TodoList';
import CustomButton from './components/CustomButton';
import Feather from 'react-native-vector-icons/Feather';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const Home = () => {
  const navigation = useNavigation<any>();
  const [todos, setTodos] = useState<any[]>([]);
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

  const deleteTodo = async (id: number) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      fetchTodos();
    } catch {
      Alert.alert('Error', 'Failed to delete todo');
    }
  };

  const editTodo = (item: any) => {
    navigation.navigate('EditTodo', { todo: item });
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchTodos();
    }, []),
  );

  // Let's create a shimmer placeholder for list items
  const shimmerPlaceholders = Array(9).fill(0);

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F4F8' }}>
      <Div p="lg" row justifyContent="space-between" alignItems="center">
        <Text fontSize={22} fontWeight="bold">
          Your Todos
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddTodo')}>
          <Feather name="plus-circle" size={26} color="#51E6A6" />
        </TouchableOpacity>
      </Div>

      {loading ? (
        <Div px="lg">
          {shimmerPlaceholders.map((_, index) => (
            <Div
              key={index}
              row
              alignItems="center"
              mb="lg"
              bg="#fff"
              rounded="lg"
              p="md"
              shadow="sm"
            >
              {/* Left side: shimmer block for text (title) */}
              <ShimmerPlaceHolder
                style={{ width: '70%', height: 20, borderRadius: 4 }}
                shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
                duration={5000}
              />

              {/* Right side: shimmer circle for icon */}
              <ShimmerPlaceHolder
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  marginLeft: 'auto',
                }}
                shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
                duration={5000}
              />
            </Div>
          ))}
        </Div>
      ) : (
        <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      )}
      <Div p="lg">
        <CustomButton content="Logout" onPress={logout} bg="red" />
      </Div>
    </View>
  );
};

export default Home;
