import { useState } from "react";
import data from "./data";
//import List from "./components/List";

const App = () => {
  const [person, setPerson] = useState(data);
  console.log(person);
  return (
    <div>Birthday Buddy</div>
  )
}

export default App;