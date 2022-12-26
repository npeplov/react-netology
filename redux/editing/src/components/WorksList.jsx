import React from "react";
import { useSelector } from "react-redux";
import { WorkItem } from "./WorkItem";

export const WorksList = () => {
  const worksList = useSelector((state) => state.works.list);

  return (
    <ul>
      {worksList.map((work) => (
        <li key={work.id}>
          <WorkItem item={work} />

        </li>
      ))}
    </ul>
  );
};
