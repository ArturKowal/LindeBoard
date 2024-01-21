import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";
import SalaryField from "./SalaryField";
// import React, { ChangeEvent, FormEvent, useState } from "react";

const CreateOfferForm: React.FC = () => {
  // const [title, setTitle] = useState("");
  // const [titleError, setTitleError] = useState(false);
  // const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!name.trim()) {
  //     setError(true);
  //   } else {
  //     setError(false);
  //   }
  // };

  // const [description, setDescription] = useState("");
  // const [descriptionError, setDescriptionError] = useState(false);
  // const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setDescription(e.target.value);
  // };

  // const [salary, setSalary] = useState("");
  // const [salaryError, setSalaryError] = useState(false);
  // const handleSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSalary(e.target.value);
  // };

  return (
    <div style={{ paddingTop: 30 }}>
      <TitleField></TitleField>
      <DescriptionField></DescriptionField>
      <SalaryField></SalaryField>
    </div>
  );
};

export default CreateOfferForm;
