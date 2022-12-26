import React from "react";
import { useDispatch } from "react-redux";
import { ButtonDelete } from "./UI/buttons/ButtonDelete";
import { ButtonEdit } from "./UI/buttons/ButtonEdit";
import { editWorkReducer } from "../store/editSlice";


export const WorkItem = ({ item }) => {
  const dispatch = useDispatch()

  const peredatItem = (item) => {
    dispatch(editWorkReducer(item))
  };

  return (
    <>
      {item.title} {item.price}
      <ButtonEdit onClick={() => peredatItem(item)} />
      <ButtonDelete />
    </>
  );
};
