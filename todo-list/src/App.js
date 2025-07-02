import React, { useState } from "react";

function App(){
  const[input, setInput] = useState('');
  const[todos,setTodos] = useState([]);

  const handleChange = (e) =>{
    setInput(e.target.value);
  };

  const handleAddTodo=()=>{
    if(input.trim()==='')return;
    setTodos([...todos,input]);
    setInput('');
  };

  const handleDeleteTodo =(indexToDelete) => {
    const newTodos = todos.filter((_,index) => index!== indexToDelete);
    setTodos(newTodos);
  };


  return(
    <div style={{ textAlign:'center', marginTop:'50px'}}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
  {todos.map((todo, index) => (
    <li key={index} style={{ marginTop: '10px' }}>
      {todo}
      <button 
        onClick={() => handleDeleteTodo(index)} 
        style={{ marginLeft: '10px' }}
      >
        Delete
      </button>
    </li>
  ))}
</ul>
    </div>
  );
}
export default App