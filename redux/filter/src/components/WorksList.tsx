import { useAppSelector } from "../app/hooks";
import { WorkItem } from "./WorkItem";

export const WorksList = () => {
  const worksList = useAppSelector((state) => state.works.list);
  return (
    <div>
      <ul>
        {worksList.map((work) => (
          <WorkItem item={work} key={work.id} />
        ))}
      </ul>
    </div>
  );
};
