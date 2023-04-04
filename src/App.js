import {Routes,Route} from "react-router-dom";
import Home from "./components/home/home";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import TourDetails from "./components/TourDetails/TourDetails";
const Data1 = require("./data/db.json");

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>
      </Routes>

      <Home data={Data1} />
      <TourDetails description={Data1}/>
    </div>
  );
}

export default App;
