import { useAppDispatch, useAppSelector } from "../app/hooks";
import {changeActionCrtr} from "../features/works/formSlice"

export const WorkItem = ({ item }: any): any => {
  const filter = useAppSelector((state) => state.works.filter);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    // в стор формы передаем тайтл и прайс
    dispatch(changeActionCrtr({title: item.title, price: item.price, id: item.id}))
    // передать id itema
    // можно в новый диспатч но отрисовка полей идет из первого
  }
  if (item.title.includes(filter))
    return (
      <li className="row">
        <div className="col s4">{item.id} {item.title}</div>
        <div className="col s2">{item.price} р.</div>
        <div className="col s2">
          <button onClick={handleClick}>Edit</button>
          <button>Del</button>
        </div>
      </li>
    );
};
