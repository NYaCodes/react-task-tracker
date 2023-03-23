import { useState } from "react";
import Header from "./componets/Header";
import Tasks from "./componets/Tasks";
import AddTask from "./componets/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
 const [tasks, setTasks] = useState( 
[
    {
        id: 1,
        text:`Doctor's Appointment`,
        day:`Feb 5th at 2:30pm`,
        reminder: true,
    },
    {
        id: 2,
        text:`Meeting at School`,
        day:`Feb 6th at 1:30pm`,
        reminder: true,
    },
    {
        id: 3,
        text:`Grocery Shopping`,
        day:`Feb 5th at 2:30pm`,
        reminder: false,

    }
])

// Add Task
const addTask = (task) => {
  console.log(task)
}




// Delete Task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={AddTask}/>}
    
<Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
