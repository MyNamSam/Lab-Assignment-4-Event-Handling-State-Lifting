import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

const ToDoList = ({ tasks }) => {
  const [completeTask, setCompleteTask] = useState(new Set());

  const toggleTaskComplete = (task) => {
    setCompleteTask((prev) => {
      const updatedTasks = new Set(prev);
      if (updatedTasks.has(task)) {
        updatedTasks.delete(task);
      } else {
        updatedTasks.add(task);
      }
      return updatedTasks;
    });
  };

  return (
    <ScrollView style={styles.listContainer}>
      {tasks.map((task, index) => (
        <Pressable
          key={`${task}-${index}`}
          onPress={() => toggleTaskComplete(task)}
          style={[
            styles.task,
            completeTask.has(task) && styles.completed,
          ]}
          accessibilityLabel={`Task: ${task}`}
          accessibilityRole="button"
        >
          <Text
            style={[
              styles.taskText,
              completeTask.has(task) && styles.taskTextCompleted,
            ]}
          >
            {task}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#black',
  },
});
