import React from "react";
import { ButtonDelete } from "./UI/buttons/ButtonDelete";
import { ButtonEdit } from "./UI/buttons/ButtonEdit";
import { useDispatch } from "react-redux";
import { editWork } from "../store/editSlice";

export const WorkItem = ({ item }) => {
  const dispatch = useDispatch();

  const onEdit = () => {
    dispatch(editWork({ title: item.title, price: item.price }));
    // передать в форму
  };

  return (
    <>
      {item.title} {item.price}
      <ButtonEdit onClick={onEdit} />
      <ButtonDelete />
    </>
  );
};
