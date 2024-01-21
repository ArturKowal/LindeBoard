import AddOfferButton from "./components/AddOfferButton";
import CreateOfferForm from "./components/CreateOfferForm";

const AddOfferPage = () => {
  return (
    <div className="container" style={{ maxWidth: 700 }}>
      <CreateOfferForm></CreateOfferForm>
      <AddOfferButton></AddOfferButton>
    </div>
  );
};

export default AddOfferPage;
