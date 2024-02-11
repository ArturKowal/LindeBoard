import "/src/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageSelector from "./pages/PageSelector";

function App() {
  return (
    <div className="container mainLayout">
      <div className="container navbarOwn"><Navbar/></div>
      <div className="container contentContainerOwn"><PageSelector/></div>
      <div className="container footerOwn"><Footer /></div>
    </div>
  );
}

export default App;
