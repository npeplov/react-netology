import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addActionCrtr } from "../features/works/worksSlice";

export const AddForm: React.FC = () => {
  const [fields, setFields] = useState({title: '', price: ''})

  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value })
  }
  const submutHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const id = Date.now();
    dispatch(addActionCrtr({ id: id, ...fields }));
    setFields({title: '', price: ''})
    event.preventDefault();
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
        <div className="col s3">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
