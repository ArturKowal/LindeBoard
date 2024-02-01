import "/src/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageSelector from "./pages/PageSelector";
// import HelpfulPage from "./helpfulComponents/helpfulPage";


function App() {
  return (
    <div className="container rel">
      <Navbar />
      {/* <HelpfulPage /> */}
      <PageSelector></PageSelector>
      <Footer />
    </div>
  );
}

export default App;
