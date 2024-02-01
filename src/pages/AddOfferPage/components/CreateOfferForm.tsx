import { useState } from "react";
import TitleField from "./TitleField";
import AddOfferButton from "./AddOfferButton";
import DescriptionField from "./DescriptionField";
import SalaryField from "./SalaryField";

const CreateOfferForm = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <div>
      <TitleField title={setTitle}></TitleField>
      <DescriptionField description={setDescription}></DescriptionField>
      <SalaryField salary={setSalary}></SalaryField>
      {title && description && salary && <AddOfferButton onClick={() => handleClick()}></AddOfferButton>}
    </div>
  );
};

export default CreateOfferForm;
