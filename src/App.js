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
        <Route path="/" element={<Home data={Data1} />}></Route>
        <Route path="/city/:id" element={<TourDetails description={Data1}/>}></Route>
      </Routes>

  
    </div>
  );
}

export default App;
