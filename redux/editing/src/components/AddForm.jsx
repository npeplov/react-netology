import { useDispatch, useSelector } from "react-redux";
import { InputField } from "./InputField";
import SubmitButton from "./UI/myButton/MyButton";
import { addWork, editInput, updateWork } from "../store/editSlice";
import { nanoid } from "@reduxjs/toolkit";

export const AddForm = () => {
  const dispatch = useDispatch();

  let isEditMode = useSelector((state) => state.works.edited);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
     dispatch(editInput({[name]: value, prop: name}))
  }

  const handleSubmit = (e) => {
    if (isEditMode) {
      dispatch(
        updateWork({
          id: isEditMode.id,
          title: isEditMode.title,
          price: isEditMode.price,
        })
      );
      isEditMode = undefined;
    }
    e.preventDefault();
  };

  return (
    <form>
      <InputField
        placeholder="Название"
        name="title"
        value={isEditMode.title}
        onChange={handleChange}
      />
      <InputField
        placeholder="Цена"
        name="price"
        value={isEditMode.price}
        onChange={handleChange}
      />
      {/* isEditMode ? editButton : addButton */}
      {/* текст и действие при нажатии */}
      <SubmitButton onClick={handleSubmit}>Добавить</SubmitButton>
    </form>
  );
};
