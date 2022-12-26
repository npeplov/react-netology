import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "./InputField";
import SubmitButton from "./UI/myButton/MyButton";
import { addWork } from "../store/editSlice";
import { nanoid } from "@reduxjs/toolkit";

export const AddForm = () => {
  const dispatch = useDispatch();

  let isEditMode = useSelector((state) => state.works.edited);
  const [inputsValue, setInputsValue] = useState({ title: "", price: "" });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputsValue({...inputsValue, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addWork({
        id: nanoid(),
        title: inputsValue.title,
        price: inputsValue.price,
      })
    );
    setInputsValue({ title: "", price: "" });
  };

  return (
    <form>
      <InputField
        placeholder="Название"
        name="title"
        value={isEditMode ? isEditMode.title : inputsValue.title}
        onChange={handleChange}
      />
      <InputField
        placeholder="Цена"
        name="price"
        value={isEditMode ? isEditMode.price : inputsValue.price}
        onChange={handleChange}
      />
      {/* isEditMode ? editButton : addButton */}
      {/* текст и действие при нажатии */}
      <SubmitButton onClick={handleSubmit}>Добавить</SubmitButton>
    </form>
  );
};
