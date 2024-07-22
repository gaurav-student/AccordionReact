// App.js
import React, { useState } from "react";
import Accordion from "./Accordion";
import data from "./data";
import "./index.css";

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="App">
      {data.map((item, index) => (
        <Accordion
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default App;
