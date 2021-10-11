import React, { useState } from "react";
import FormInput from "./FormInput";
import FormInputTextArea from "./FormInputTextArea";
import FormLabel from "./FormLabel";

const MainForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <form>
        <br />
        <FormInput
          value={title}
          setValue={setTitle}
          label="Name"
          name="name"
          type="text"
        />{" "}
        <br />
        <FormInput
          value={price}
          setValue={setPrice}
          label="Price"
          name="price"
          type="number"
        />{" "}
        <br />
        <FormInput
          value={description}
          setValue={setDescription}
          label="Description"
          name="Description"
          type="textarea"
        />{" "}
        <br />

        <FormLabel id={'description'} label={'Enter another description'} />
        <FormInputTextArea  value={description} label="Another Description" />
        <br />
      </form>
    </>
  );
};

export default MainForm;
