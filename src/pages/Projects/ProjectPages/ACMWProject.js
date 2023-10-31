import {
  ProjectPageHead,
  OpeningVisual,
  WhySection,
  HowSection,
} from "./ProjectPageComponents";
import "./ProjectPage.css";
import ACWPhoto from "../photos/ACMWProject.png";
import FirstIteration from "../photos/ACMWPagePhotos/firstIteration.png";
import MidIteration from "../photos/ACMWPagePhotos/midIteration.png";
import RecentIteration from "../photos/ACMWPagePhotos/recentIteration.png";

export const ACMWHow = () => {
  return (
    <>
      <p>
        <b>Design Iterations and User Testing</b>
        <br></br>
        The design stages entail a phased approach to create the website.
        Initially, there was collaborative design with the club president. We
        outlined goals for how we want to represent the club through the site,
        features, their purposes, and the overall project timeline. These design
        iterations were then routinely presented to the board to gather feedback
        and critiques. The first official iteration to be developed was
        completed within the first month so that the first development iteration
        would be completed by November (when the website was needed for
        promotional reasons.) After the initial release, feedback was gathered
        by a broader audienc to inform further improvements and iterations. This
        approach ensures the website's ongoing relevance and effectiveness.
        <br></br>
        <br></br>
        <img src={FirstIteration} className="HowImgInText"></img>
        <br></br>
        <i>Very first iteration for hypothetical website design</i>
        <br></br>
        <br></br>
        <img src={MidIteration} className="HowImgInText"></img>
        <br></br>
        <i>Third website iteration</i>
        <br></br>
        <br></br>
        <img src={RecentIteration} className="HowImgInText"></img>
        <br></br>
        <i>Most recent website iteration</i>
      </p>
      <p>
        <b>Development Process</b>
        <br></br>I developed the Women in Computing Club's website by leveraging
        my proficiency in HTML, CSS, and Javascript, as these technologies
        granted me precise control over the design and functionality of the
        site. This choice allowed for a customized and visually appealing user
        experience. To host and make the website accessible, I utilized Github
        Pages, providing a reliable platform for publication and maintenance. To
        enhance the website's features, I integrated APIs for embedding a Google
        Calendar, ensuring that members could easily access event information
        and stay updated. Additionally, I modified the newsletter sign-up
        process with Mailchimp integration, streamlining the club's
        communication and outreach efforts. Through these strategic choices and
        technical implementations, the website not only met the club's specific
        needs but also offered a seamless and engaging online presence for its
        members and prospective participants.
      </p>
    </>
  );
};

const ACMWProject = () => {
  return (
    <>
      <div className="projectPageContainer">
        <ProjectPageHead pagename={"Women in Computing Website"} />
        <OpeningVisual
          who={"ACM-W Webmaster"}
          what={"First Official Site"}
          when={"September 2022 to June 2023"}
          where={"Santa Clara University"}
          img={ACWPhoto}
        />
        <WhySection
          problemDescription={
            "Develop a user-friendly and informative website for the Women in Computing Club that will effectively serve as a central platform for members and potential members to access resources, stay updated on club activities, and promote a sense of community."
          }
        />
        <HowSection pagename="ACMW" />
      </div>
    </>
  );
};

export default ACMWProject;
