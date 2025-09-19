import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <input placeholder='What needs to be done?' type="text" />
        <button id='addBtn'>Add</button>
      </div>
      <ul>
        <li id='list'></li>
      </ul>

    </>
  )
}

export default App
