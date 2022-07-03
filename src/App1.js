import "./App.css";
import Persons from "./components/Persons";
import { PersonInformation } from "./constant/persons";

function App1() {
 
  return (
    <div className="App">
      <Persons persons={PersonInformation}/>
    </div>
  );
}
export default App1;
