// import Alert from "./components/Alert";
// import SubmitButton from "./components/SubmitButton";
// import ListGroup from "./components/ListGroup";

// import DismissingAlert from "./components/DismissingAlert";
// import CreateAlertButton from "./components/CreateAlertButton";
// import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./body/HomePage";

// let items = ["praca", "job", "board", "uczymy", "sie"];

// const handleSelectItem = (item: string) => {
// console.log(item)
// }

// const handleClick = (click: boolean) => {
//   click ? console.log("now clicked") : null
//   }




function App() {
  // const [alertVisable, setAlertVisibility] = useState(false)
  // const [buttonVisable, setButtonVisibility] = useState(false)
  return (
    <div>
      {/* <ListGroup items={items} heading="Oferty" onSelectItem={handleSelectItem}></ListGroup> */}
      {/* <Alert>Nowa oferta <span>pracy!</span></Alert> */}
      {/* <SubmitButton color="info"  onClick={() => console.log("now clicked")}>Submituj to</SubmitButton> */}
      {/* {alertVisable && <DismissingAlert alertVisable={setAlertVisibility} buttonVisable={setButtonVisibility}></DismissingAlert>}
      {buttonVisable && <CreateAlertButton alertVisable={setAlertVisibility} buttonVisable={setButtonVisibility}>Create alert</CreateAlertButton>} */}
      <Navbar />
      <HomePage></HomePage>
      <Footer />
    </div>
  );
}

export default App;
