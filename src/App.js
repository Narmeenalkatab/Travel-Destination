import Home from "./components/home/home";
import "./App.css";
const Data1 = require("./data/db.json");

function App() {
  return (
    <div className="App">
<Home data={Data1}/>
    </div>
  );
}

export default App;
