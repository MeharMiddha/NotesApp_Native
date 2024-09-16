import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

interface TaskItemProps {
  task: string;
  color: string;
  onDelete: () => void;
  onEdit: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, color, onDelete, onEdit }) => {
  return (
    <View style={[styles.container, {backgroundColor:color}]} >
      <Text style={styles.taskText}>{task}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Icon name="trash" size={30} color="#4F8EF7" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onEdit}>
        <Icon name="edit" size={30} color="#4F8EF7" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    padding: 10,
  },
  taskText: {
    fontSize: 18,
  },
  trash: {},
});

export default TaskItem;
