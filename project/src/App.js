import Answer from "./Answer";
import "./App.css";
import Question from "./Question";
import data from "./data";
import { useEffect, useState } from "react";
function App() {
  const [adata, setAdata] = useState([]);

  useEffect(() => {
    setAdata(data);
  }, []);
  return (
    <div className="App">
      {adata.map((val) => {
        return (
          <div key={val.id}>
            <Question ques={val.question} ans={val.answer} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
