import { useState } from 'react'
import './App.css'

function App() {
  const btn = document.getElementById('addBtn');
  function getData(){
    
    const toDoInput = document.getElementById('toDo');
    const list = document.getElementById('list');
    if(!toDoInput){
      list.textContent = 'no tasks or error'
     

    }else{
      const data = toDoInput.value;
      list.append(data);
    };


  }
  btn.addEventListener('click', getData);
  return (
    <>
      <h1>Todo List</h1>
      <div>
        <input id='toDo' placeholder='What needs to be done?' type="text" />
        <button id='addBtn'>Add</button>
      </div>
      <ul>
        <li id='list'></li>
      </ul>

    </>
  )
  
}

export default App
