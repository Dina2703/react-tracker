import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  /*The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM*/
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Fetch Tasks

  const fetchTasks = async () => {
    //we used const because, we received some data from the server
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log(data);
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  //Add Task
  const addTask = async (task) => {
    // when data comes from the json-server
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      //JSON.stringify turns the JS object into a JSON string
      body: JSON.stringify(task),
    });
    //json() turns JSON string into JS object
    const data = await res.json();

    setTasks([...tasks, data]);

    // when data was in the state of App.js
    // const id = Math.floor(Math.random() * 100) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    // console.log("delete", id);
    //we don't need const because, we are not receiving any data, we just deleting. Second parameter is an object, where  we are passing the method we need to do over this data(first param)
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
