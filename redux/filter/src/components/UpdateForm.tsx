import { useAppDispatch, useAppSelector } from "../app/hooks";
import { formSlice } from "../features/works/formSlice";
import { updateActionCrtr } from "../features/works/worksSlice";

export const UpdateForm: React.FC = () => {
  const fields = useAppSelector((state) => state.form.update);
  const { changeActionCrtr, clearActionCrtr } = formSlice.actions;

  const dispatch = useAppDispatch();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(changeActionCrtr({ ...fields, [name]: value }));
  };
  const submutHandler = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(updateActionCrtr({ ...fields }))
    dispatch(clearActionCrtr());
    event.preventDefault();
  };
  // нужен другой value для 2 инпут и 1 кнопка
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
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};
