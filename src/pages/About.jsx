import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { experiences, skills } from "../constants/index";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container bg-black text-white">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          John
        </span>{" "}
        
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-white">
        <p>
          A Software Engineer who is graduating in Fall 2025 with 3 Software Engineering Internships, 7 Tech Competiton awards totaling $30,000, and a 3.9 GPA.
        </p>
      </div>

      <div className="py-16">
        <h3 className="subhead-text text-white">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-white">
          <p>
            Here's a sneak peak into some of the amazing places I have been at:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{
                  background: experience.iconBg,
                }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  background: "#1e1e1e",
                  color: "#fff",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-white text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-white font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-white font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-white">Technical Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              className="block-container w-20 h-20 bg-gray-800 rounded-lg"
              key={skill.name}
            >
              <div className="btn-back rounded-xl bg-gray-900" /> 
              <div className="btn-front rounded-xl flex justify-center items-center bg-gray-800">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-700" />

      <CTA />
    </section>
  );
};

export default About;
