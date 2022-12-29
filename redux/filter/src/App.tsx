import React from "react";
import { AddForm } from "./components/AddForm";
import { FilterForm } from "./components/FilterForm";
import { UpdateForm } from "./components/UpdateForm";
import { WorksList } from "./components/WorksList";

const App: React.FC = () => {
  return (
    <div className="container">
      <AddForm />
      <UpdateForm />
      <FilterForm />
      <WorksList />
    </div>
  );
};

export default App;
