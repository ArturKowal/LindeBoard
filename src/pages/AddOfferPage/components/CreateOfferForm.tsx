import { useState } from "react";
import TitleField from "./TitleField";
import AddOfferButton from "./AddOfferButton";
import DescriptionField from "./DescriptionField";
import SalaryField from "./SalaryField";

import ApiConnector from "./../../../client/ApiConnector";


const CreateOfferForm = () => {
  const api = new ApiConnector();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  const handleClick = () => {
    console.log("clicked");
    const postBody = { title: {title}, description: {description}, salary: {salary} };
    api.post('/createNewOffer', postBody)
      .then((data: any) => console.log('POST Response:', data))
      .catch((error: any) => console.error('POST Error:', error));
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
