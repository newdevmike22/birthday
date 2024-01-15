import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [person, setPerson] = useState(data);

  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <section className="w-[90vw] my-20 mx-0 max-w-[600px] bg-white rounded py-6 px-8 shadow-md">
        <h3 className="text-[2rem] text-center font-black mb-5">{person.length} birthdays today</h3>
        <List person={person} />
        <button 
          type="button" 
          className="bg-[#2a05a3] text-white block w-[100%] mt-8 mr-[auto] mb-0 ml-[auto] uppercase text-[1.2rem] font-semibold py-2 px-0 tracking-wide rounded-md cursor-pointer hover:bg-[#744ef2] shadow-md"
          onClick={() =>setPerson([])}
        >
          Clear All
        </button>
      </section>
    </div>
  )
}

export default App;