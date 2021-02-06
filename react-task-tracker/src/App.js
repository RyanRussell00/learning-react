import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  // update tasks variable using setTasks variable
  const [tasks, setTasks] = useState([
    { id: 1, text: "Meeting", day: "Feb 8 at 1pm", reminder: true },
    { id: 2, text: "Birthday!", day: "Mar 27 at 1pm", reminder: false },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h2>No Tasks</h2>
      )}
      <AddTask />
    </div>
  );
};

export default App;
