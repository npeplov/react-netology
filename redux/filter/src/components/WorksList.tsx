import { useAppSelector } from "../app/hooks";

export const WorksList: React.FC = () => {
  const worksList = useAppSelector((state) => state.works.list);
  return (
    <div>
      <ul>
        {worksList.map((work) => (
          <li key={work.id} className="row">
            <div className="col s4">{work.title}</div>
            <div className="col s2">{work.price} р.</div>
            <div className="col s2">
              <button>Edit</button>
              <button>Del</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
