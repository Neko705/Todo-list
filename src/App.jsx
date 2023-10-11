import "./App.css"
import { useState } from "react";

const App = () =>{
  const [newItem,setNewItem] = useState('')
  return (
    <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Add Your Work</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className="btn btn-denger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Item 2
        </label>
        <button className="btn btn-denger">Delete</button>
      </li>
    </ul>
    </>
  )
}
export default App;