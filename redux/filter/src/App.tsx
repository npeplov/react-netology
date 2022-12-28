import React from "react";
import { FilterForm } from "./components/AddForm";
import { WorksList } from "./components/WorksList";

const App: React.FC = () => {
  return (
    <div className="container">
      <FilterForm />
      <WorksList />
    </div>
  );
};

export default App;
