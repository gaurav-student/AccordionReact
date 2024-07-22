// Accordion.js
import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <MuiAccordion expanded={isOpen} onChange={onToggle}>
      <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography>{question}</Typography>
      </MuiAccordionSummary>
      <MuiAccordionDetails>
        <Typography>{answer}</Typography>
      </MuiAccordionDetails>
    </MuiAccordion>
    // <div className="accordion-item">
    //   <div className="accordion-title" onClick={onToggle}>
    //     <h2>{question}</h2>
    //     <span>{isOpen ? "-" : "+"}</span>
    //   </div>
    //   {isOpen && <div className="accordion-content">{answer}</div>}
    // </div>
  );
};

export default Accordion;
