import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Div } from 'react-native-magnus';
import Feather from 'react-native-vector-icons/Feather';

interface TodoItemProps {
  item: any;
  onDelete: () => void;
  onEdit: () => void;
}

const TodoItem = ({ item, onDelete, onEdit }: TodoItemProps) => {
  return (
    <Div
      bg="white"
      p="md"
      m="sm"
      rounded="xl"
      shadow="sm"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Div flex={1} mr="md">
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        {item.description ? (
          <Text style={{ color: 'gray' }}>{item.description}</Text>
        ) : null}
      </Div>
      <Div row>
        <TouchableOpacity onPress={onEdit} style={{ marginRight: 10 }}>
          <Feather name="edit" size={22} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Feather name="trash-2" size={22} color="red" />
        </TouchableOpacity>
      </Div>
    </Div>
  );
};

export default TodoItem;
