import "./ProjectPage.css";
import {
  ProjectPageHead,
  OpeningVisual,
  WhySection,
  HowSection,
} from "./ProjectPageComponents";
import SPEKSPhoto from "../photos/SPEKSProject.png";

import Gameplay from "../photos/SPEKSPagePhotos/Gameplay.png";
import LandingPage from "../photos/SPEKSPagePhotos/LandingPage.png";
import SupportPage from "../photos/SPEKSPagePhotos/SupportPage.png";

export const SPEKSHow = () => {
  return (
    <>
      <p>
        <b>Introduction</b>
        <br></br>
        In February of 2023, a team of five women and I competed in Santa Clara
        University’s annual hack-a-thon, Hack for Humanity. We were tasked to
        make a project for social good in the span of 24 hours. After
        deliberating, we had decided to make a project that addressed the
        underdiagnosis of women with autism. In order to produce this project in
        the short period of time, we had separated our project into two
        components: the game and the website. Four of our teammembers with a
        greater field of back-end experience took on the production of the gamee
        using Unity, the other front-end developer conducted the research and
        developed the quiz using javascript, and I designed/developed the
        website using HTML, CSS and Javascript. At the end of the 24 hours, we
        ended up having the honor of placing first out of fifty projects. Check
        out our <a href="https://devpost.com/software/h4h-bprsfz">Devpost</a>!
      </p>
      <p>
        <b>User Testing and Design Process</b>
        <br></br>
        Our hackathon project aimed to create a website and interactive game to
        bring attention to the underdiagnosis of autism in women. To ensure the
        success of this project, we followed a structured process that
        encompassed several key phases.
      </p>
      <p>
        <span style={{ color: "#53539D" }}>
          1. Gathering Research and Content Support
        </span>
        <br></br>
        One of our front-end developers diligently curated a body of academic
        and peer-reviewed articles. This research served as the foundation for
        the quizzes, insights, and content displayed on our website. These
        articles were instrumental in providing factual and evidence-based
        information to our users.
        <br></br>
        <br></br>
        <span style={{ color: "#53539D" }}>
          2. Time Constraints and User Testing
        </span>
        <br></br>
        Due to the rapid timeline we were on during the hackathon, conducting
        thorough user testing with external participants was not feasible.
        However, we recognized the importance of user feedback in enhancing the
        user experience. To compensate for this limitation, we conducted initial
        testing within our own team, ensuring that our website's features were
        accessible and functional.
        <br></br>
        <br></br>
        <span style={{ color: "#53539D" }}>
          3. Design and Development Iterations
        </span>
        <br></br>
        As the designer and developer of the website, I focused on creating a
        user-friendly experience. In the first five hours, I dedicated my time
        to building wireframes and user flows in Figma. Throughout this process,
        I maintained an open line of communication with my team, seeking their
        feedback and thoughts regularly. This collaborative approach allowed us
        to make real-time adjustments and improvements.
        <br></br>
        <br></br>
        <span style={{ color: "#53539D" }}>4. User-centric Design</span>
        <br></br>
        Our project was designed with the audience in mind. We recognized that
        the underdiagnosis of autism in women is a serious issue, often
        accompanied by social stigma. To make our content approachable and
        engaging for all audiences, we adopted a playful design approach. By
        doing so, we aimed to break down barriers and foster an open, accepting
        atmosphere.
        <br></br>
        <br></br>
        <span style={{ color: "#53539D" }}>4. Navigational Ease</span>
        <br></br>
        To ensure a seamless user experience, we designed the website to be
        easily navigable. Users should be able to find information effortlessly
        and interact with the quizzes and insights without unnecessary
        complications. Simple and intuitive navigation was one of our core
        design principles.
        <br></br>
        <br></br>
        In conclusion, our hackathon project's success relied on thorough
        research, continuous feedback, user-centric design, and a focus on
        making a challenging topic approachable. Although we couldn't conduct
        extensive external user testing due to time constraints, our team's
        dedication and collaboration ensured a functional and user-friendly
        product that raises awareness about the underdiagnosis of autism in
        women.
        <br></br>
        <img src={LandingPage} className="HowImgInText"></img>
        <br></br>
        <i>Opening page of the SPEKS website</i>
        <br></br>
        <img src={SupportPage} className="HowImgInText"></img>
        <br></br>
        <i>Support page with mock-donation panel using Firebase</i>
        <br></br>
        <img src={Gameplay} className="HowImgInText"></img>
        <br></br>
        <i>
          Interactive game for kids to explore the underdiagnosis of autism in
          women
        </i>
      </p>
      <p>
        <b>Development</b>
        <br></br>
        Throughout our intense 24-hour hackathon journey, our team embarked with
        a solid plan that we'd previously outlined in our designs. We committed
        to staying up through the night, working diligently to turn our vision
        into a reality. Even though we had already agreed upon and finalized our
        designs, we never settled for "good enough." We knew we could always
        improve so kept a close eye on our project, constantly seeking ways to
        enhance it.
        <br></br>
        <br></br>
        One crucial aspect we kept in mind was feasibility. We realized that we
        could only add features that we were confident we could implement given
        the limited timeframe. In my role, I utilized HTML, CSS, and JavaScript
        to bring our project to life. We worked collaboratively using a GitHub
        repository, which allowed for seamless integration of our quiz component
        into the website. Our teamwork and determination were unwavering, and we
        made the most of every minute, from our initial planning to the final
        implementation, all in pursuit of delivering a polished project within
        the hackathon's time constraints. At the end of it all, we were honored
        to receive first place and continue to be unbelievably proud to this
        day.
      </p>
    </>
  );
};

const SPEKSProject = () => {
  return (
    <>
      <div className="projectPageContainer">
        <ProjectPageHead pagename={"Automated Update Alert System"} />
        <OpeningVisual
          who={"Team of Five Undergrad Women Computer Engineers"}
          what={"24 hour hack-a-thon project"}
          when={"February 2023"}
          where={"Santa Clara University - Hack for Humanity"}
          img={SPEKSPhoto}
        />
        <WhySection
          problemDescription={
            "Design and develop a website and interactive game that aims to raise awareness about the underdiagnosis of autism in women, with the goal of addressing the gender disparity in autism diagnoses and promoting early intervention and support for affected individuals."
          }
        />
        <HowSection pagename="SPEKS" />
      </div>
    </>
  );
};

export default SPEKSProject;
