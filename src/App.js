import { useEffect, useState } from "react"
import TaskList from "./components/TaskList"

function App() {

  const [tasks, setTasks]= useState([])
  const [users, setUsers]  = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/tasks")
     .then(response=>response.json())
     .then(data=>setTasks(data))

    fetch("http://localhost:9292/users")
     .then(response=>response.json())
     .then(data=>setUsers(data))
  },[])

  const taskArray=tasks.map((task)=>{
    return <h2>{task.name}</h2>
  })
  
  const userArray=users.map((user)=>{
    return <h2>{user.name}</h2>
  })
  
  return (
    <div className="App">
      <h1>Tasks</h1>
      {taskArray}
      <h1>Users</h1>
      {userArray}
    </div>
  );
}

export default App;
