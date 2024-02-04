import "/src/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageSelector from "./pages/PageSelector";
// import HelpfulPage from "./helpfulComponents/helpfulPage";


function App() {
  return (
    <div className="container mainLayout">
      <div className="container navbarOwn"><Navbar></Navbar></div>
      {/* <HelpfulPage /> */}
      <div className="container contentContainerOwn"><PageSelector></PageSelector></div>
      <div className="container footerOwn"><Footer /></div>
    </div>
  );
}

export default App;
