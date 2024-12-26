import { Todos } from './components/Todos'
import { CreateTodo } from './components/CreateTodo'
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    
      <div>
        <CreateTodo> </CreateTodo>
        <Todos todos={todos}> </Todos>
      </div>
     
  )
}

export default App
