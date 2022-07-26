import * as React from "react";
import { styled } from "@mui/material/styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Skills from "./Skills";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square={false} {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  backgroundColor: "#39398d",
  color: "white",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={<MdOutlineKeyboardArrowRight />}
  />
))(({ theme }) => ({
  backgroundColor: "#39398d",
  borderBottom: "1px solid rgba(0, 0, 0, 1)",
  marginTop: "10px",
  ".MuiAccordionSummary-expandIconWrapper": {
    color: "white",
  },

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },

  "&:hover": {
    backgroundColor: "#1f1f38",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "rgba(77, 181, 255, 0.4)",
}));

export default function AccordionMui({ accord, bullet }) {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  console.log(bullet);
  return (
    <div>
      {accord.map((element, idx) => {
        return (
          <Accordion
            expanded={expanded === `panel${idx}`}
            onChange={handleChange(`panel${idx}`)}
            key={idx}
          >
            <AccordionSummary>
              <div>{element.subtitle}</div>
            </AccordionSummary>
            <AccordionDetails>
              {bullet ? (
                <div className="experience__content">
                  {element.skills.map((item, index) => {
                    return <Skills skill={item[0]} exp={item[1]} />;
                  })}
                </div>
              ) : (
                <div>{element.skills}</div>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
