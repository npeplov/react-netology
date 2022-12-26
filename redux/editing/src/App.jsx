import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { AddForm } from "./components/AddForm";
import { WorksList } from "./components/WorksList";

export default function App() {
  return (
    <div className="app">
      <AddForm />
      <WorksList />
    </div>
  );
}
