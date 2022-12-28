import { useAppDispatch, useAppSelector } from "../app/hooks";
import { formSlice } from "../features/works/formSlice";
import {addReducer} from "../features/works/worksSlice";

export const FilterForm: React.FC = () => {
  const fields = useAppSelector((state) => state.form);
  const { change } = formSlice.actions;
  
  const dispatch = useAppDispatch();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(change({ ...fields, [name]: value }));
  };
  const submutHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = Date.now()
    dispatch(addReducer({id: id, ...fields}))
  };

  return (
    <div className="row">
      <form onSubmit={submutHandler}>
        <div className="input-field col s3">
          <label htmlFor="title" className="active">
            Название работы
          </label>
          <input
            type="text"
            name="title"
            value={fields.title}
            onChange={changeHandler}
          />
        </div>
        <div className="input-field col s3">
          <label htmlFor="price" className="active">
            Стоимость
          </label>
          <input
            type="number"
            name="price"
            value={fields.price}
            onChange={changeHandler}
          />
        </div>
        <div className="col s3 valign-wrapper">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
