import { useAppDispatch } from "../app/hooks";
import { addProduct } from "../feautures/market/marketSlice";
import { useState } from "react";
import { Input } from "./Input";

export const AddForm = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    price: "",
    link: "",
  });
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(addProduct(inputValues));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <>
      <label>Title:</label>
      <Input
        name="title"
        type="text"
        onChange={handleChange}
        value={inputValues.title}
      />
      <label>Price</label>
      <Input
        name="price"
        type="number"
        value={inputValues.price}
        onChange={handleChange}
      />
      <label>Link</label>
      <Input
        name="link"
        type="text"
        value={inputValues.link}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
};
