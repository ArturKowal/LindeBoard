import AddOfferPage from "./AddOfferPage/AddOfferPage";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offers from "./Offers/Offers";

const PageSelector = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/addOffer" element={<AddOfferPage></AddOfferPage>}></Route>
        <Route path="/offers" element={<Offers></Offers>}></Route>
      </Routes>
    </Router>
  );
};

export default PageSelector;
