import React from "react";
import CarouselContainer from "./CarouselContainer";
import { StyledTabs, StyledTab } from "./StyledTabs";
import "./experience.css";
import "./tabs.css";

const Experience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="tabs__container">
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="My Skills" />
          <StyledTab label="Education" />
          <StyledTab label="Experience" />
        </StyledTabs>

        {value === 0 ? (
          <div>
            <CarouselContainer />
          </div>
        ) : value === 1 ? (
          <div>B</div>
        ) : (
          <div>C</div>
        )}
      </div>
    </section>
  );
};

export default Experience;
