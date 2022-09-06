import { createContext, useState, useEffect } from "react";
import { tasks as tareas } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(tareas);
      }, []);
      
      function createTask(task) {
        setTasks([
          ...tasks,
          {
            id: tasks.length,
            title: task.title,
            description: task.description,
          },
        ]);
      }
      
      function deleteTask(id) {
        setTasks(tasks.filter((n) => n.id !== id));
      }

  return (
    <TaskContext.Provider value={{tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
