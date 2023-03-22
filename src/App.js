import { useState } from "react";
import Header from "./componets/Header";
import Tasks from "./componets/Tasks";

function App() {
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
      <Header />
<Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
