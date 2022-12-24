import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addWork } from './store/editSlice'
import { WorkItem } from "./components/WorkItem";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import SubmitButton from "./components/UI/myButton/MyButton";


export default function App() {
  const worksList = useSelector((state) => state.works.list);
  const dispatch = useDispatch()

  // const edit = useSelector(state=> state.editWork)
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const addNewWork = (e) => {
    e.preventDefault();
    const work = {
      id: nanoid(),
      title,
      price,
    }
    dispatch(addWork(work))
    setTitle('');setPrice('')
  }
  
  return (
    <div className="app">
      <form>
        <input
          type="text"
          name="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="price"
          onChange={e => setPrice(e.target.value)}
          value={price}
        />
        <SubmitButton onClick={addNewWork}>Добавить</SubmitButton>
      </form>

      <ul>
        {worksList.map(work=> <li key={work.id}><WorkItem item={work}/></li>)}
      </ul>
    </div>
  );
}
