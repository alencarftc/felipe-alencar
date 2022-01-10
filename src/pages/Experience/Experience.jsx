import { EXPERIENCES } from "@constants/experiences";
import React from "react";

import "./Experience.scss";

const Experience = () => {
  const experiences = EXPERIENCES;

  return (
    <section className="container">
      <div className="row">
        {experiences.map((experience) => (
          <div className="col-12">
            <div className="experience">
              <h4 className="experience-title">
                {experience.position}

                {experience.company && (
                <span className="experience-title--highlight">
                  ,&nbsp;
                  {experience.company}
                </span>
                )}
              </h4>
              <span className="experience-period">
                {experience.period.startDate}
              &nbsp; - &nbsp;
                {experience.period.endDate}
              </span>
              <p className="experience-description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
