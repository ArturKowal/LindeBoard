import AddOfferPage from "./AddOfferPage/AddOfferPage";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offers from "./Offers/Offers";
import SingleOfferPage from "./SingleOfferPage/SingleOfferPage";
import OfferAddedPage from "./AddOfferPage/OfferAddedPage";

const PageSelector = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/addOffer" element={<AddOfferPage></AddOfferPage>}></Route>
        <Route path="/offers/results/:keys/:page?" element={<Offers />} />
        <Route path="/offerId/:offerId" element={<SingleOfferPage></SingleOfferPage>}></Route>
        <Route path="/offer/newOfferAdded/:offerId" element={<OfferAddedPage></OfferAddedPage>}></Route>
      </Routes>
    </Router>
  );
};

export default PageSelector;
