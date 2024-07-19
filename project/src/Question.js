import Answer from "./Answer";
import { useState } from "react";
const Question = ({ ques, ans }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      {ques} <span onClick={() => setOpen(!open)}>+</span>
      {open && <Answer ans={ans} />}
    </div>
  );
};
export default Question;
