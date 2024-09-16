import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  
} from "react-native";
import TaskItem from "./TaskItem";

const InputTag: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<{ text: string; color: string }[]>([]);
  const [editingTask, setEditinngTask] = useState<number | null>(null);

  const handleAddTask = () => {
    if(editingTask !== null){
      const updatedArr = [...tasks];
      updatedArr[editingTask] = {text:inputValue, color: generateColor() };
      setTasks(updatedArr);
      setEditinngTask(null);
    }else{
      const updatedArr = [...tasks , {text:inputValue, color: generateColor() }];
      setTasks(updatedArr);
    }
    setInputValue("");
  };
  const handleDeleteTask =(id: number) =>{
    const newTask = [...tasks];
    newTask.splice(id,1);
    setTasks(newTask);
  }

  const handleEditTask = (id: number, note: string) => {
    setInputValue(note);
    setEditinngTask(id);
  };

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color:string = "#";
    for(let i=0;i<6;i++){
        color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Text Here"
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>{editingTask !==null ? "Update" : "Add"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskContainer}>
        {tasks.map((task,id) => (
            <TaskItem key={id} task={task.text} color={task.color} onDelete={()=>{handleDeleteTask(id)}} onEdit={() => handleEditTask(id,task.text)} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 20,
    padding: 5,
  },
  button: {
    backgroundColor: "blue",
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
  },
  taskContainer: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap:20,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default InputTag;
