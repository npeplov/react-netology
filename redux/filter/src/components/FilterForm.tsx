import { useAppDispatch } from "../app/hooks";
import { filterActionCrtr } from "../features/works/worksSlice";

export const FilterForm = () => {
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(filterActionCrtr(value));
  };
  return (
    <div className="row">
      <form action="">
        <div className="input-field col s3">
          <label htmlFor="title" className="active">
            Фильтр по названию
          </label>
          <input type="text" name="title" onChange={changeHandler} />
        </div>
      </form>
    </div>
  );
};
