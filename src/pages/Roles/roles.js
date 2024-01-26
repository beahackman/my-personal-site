import "./Roles.css";
import React from "react";
import PageHeader from "../../components/PageHeader";

import GarminLogo from "./photos/GarminLogo.png";
import HPELogo from "./photos/HPELogo.png";
import VRLogo from "./photos/VRLogo.png";
import TBPLogo from "./photos/TBPLogo.png";
import MLCLogo from "./photos/MLCLogo.png";
import ACMWLogo from "./photos/ACMWLogo.png";
import CVSLogo from "./photos/CVSLogo.png";
import DSPLogo from "./photos/DSPLogo.png";

const rolesInfo = [
  {
    company: "Garmin",
    role: "Software Engineering Intern",
    time: "Summer 2024",
    description:
      "I'm excited to announce that this upcoming summer, I will be interning with Garmin as a Software Engineer!",
    url: GarminLogo,
  },
  {
    company: "HPE",
    role: "UI/UX Development Intern",
    time: "Summer 2023",
    description: "This summer I developed a semi-automated update feature with visitation tracking for the HPE Design System Site, eliminating the team's monthly manual update reporting. I actively shared updates in daily meetings and collaborated closely with a design intern, contributing insights to team projects. Skills: React, GitHub Rest API, Figma.",
    url: HPELogo,
  },
  {
    company: "SCU Media Lab",
    role: "Research Intern",
    time: "January 2024 - Present",
    description: "Test Test Test Test",
    url: VRLogo,
  },
  {
    company: "Tau Beta Pi",
    role: "Web Usability Tutor",
    time: "January 2024 - Present",
    description: "As a member of the Engineering Honor Society, I lead weekly study groups, guiding discussions and tutorials for the Web Usability course. Emphasizing design and development principles for accessible interfaces, I instruct participants on HTML, CSS, Javascript, and React.js. My role involves organizing and facilitating sessions, contributing to a collaborative learning environment and sharing expertise in web development to enhance participants' understanding.",
    url: TBPLogo,
  },
  {
    company: "Math Learning Center",
    role: "Calculus Tutor",
    time: "September 2023 - Present",
    description: "In my role as a tutor for SCU's MLC, I engage in one-on-one and group sessions, covering topics ranging from pre-calc to multidimensional calculus. Working closely with individuals and facilitating two weekly group study sessions accommodating up to fifteen participants, I guide students through assignments and practice exams. With a commitment to fostering a supportive learning environment, I aim to enhance understanding and proficiency in mathematical concepts.",
    url: MLCLogo,
  },
  {
    company: "SCU ACM-W",
    role: "Industry Liaison",
    time: "June 2023 - Present",
    description: "As ACM-W's Industry Liaison, I establish valuable connections with companies and organizations to secure sponsorships for hack-a-thons and club events. I take charge in coordinating events that bridge professionals with our student body, creating networking opportunities. Additionally, I fulfill board member responsibilities by hosting Web Development workshops and actively fostering an inclusive community for women in tech.",
    url: ACMWLogo,
  },
  {
    company: "SCU ACM-W",
    role: "Webmaster",
    time: "November 2022 - June 2023",
    description: "I led the design, development, and maintenance of ACM-W's first website using HTML/CSS/Javascript, ensuring an engaging online presence. Collaborating with board members, I represented our club effectively and hosted workshops on Front-end development and networking. These efforts contributed to the club's success and skill development within our community, fostering inclusivity and engagement.",
    url: ACMWLogo,
  },
  {
    company: "CVS",
    role: "Retail Associate",
    time: "Summer 2022",
    description: "As a retail associate, I worked with customers at the register and throughout the store to make their shopping experience as easy as possible. I also worked to maintain the store by updating tags and restocking products throughout my time there.",
    url: CVSLogo,
  },
  {
    company: "Dynamic Symbolism Project",
    role: "Outreach Coordinator",
    time: "Summer 2021",
    description: "I oversaw the management and enhancement of our website, social media platforms, and newsletters, ensuring a polished and engaging online presence. Additionally, I conducted thorough research on curators and local museums, strategically aiming to broaden our audiences. Notably, I delved into exploring the potential benefits of NFTs and how they could contribute to advancing the cause of our project.",
    url: DSPLogo,
  },
];

const Roles = () => {
  return (
    <>
      <PageHeader pageName={"Roles"} />
      {rolesInfo.map((role) => {
        return (
          <div id="rolesThumbnail">
            <img src={role.url} alt={role.company}></img>
            <section>
              <h2>{role.company}{
                (role.role === "Research Intern"
                ||
                role.role === "Web Usability Tutor"
                ||
                role.role === "Calculus Tutor"
                ||
                role.role === "Industry Liaison")
                &&
                <text className="nowTag">current</text>
              }</h2>
              <h3>{role.role}</h3>
              <h3>{role.time}</h3>
              <p>{role.description}</p>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default Roles;
