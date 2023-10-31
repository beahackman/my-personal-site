import "./ProjectPage.css";
import {
  OpeningVisual,
  ProjectPageHead,
  WhySection,
} from "./ProjectPageComponents";
import HPEPhoto from "../photos/HPEProject.png";
import { HowSection } from "./ProjectPageComponents";
import "./ProjectPage.css";
import NotificationGuidancePic from "../photos/HPEPagePhotos/NotificationGuidance.png";
import SearchResults from "../photos/HPEPagePhotos/SearchResults.png";
import ThumbnailPhoto from "../photos/HPEPagePhotos/ThumbnailPhoto.png";
import InlineNotif from "../photos/HPEPagePhotos/InlineNotif.png";
import NavNotif from "../photos/HPEPagePhotos/NavNotif.png"
import SectionLevelNotif from "../photos/HPEPagePhotos/SectionLevelNotif.png"
import ChangeLog from "../photos/HPEPagePhotos/ChangeLog.png";
import FunctioningVideo from "../photos/HPEPagePhotos/functioningVideo.mov";

export const HPEHow = () => {
  return (
    <>
      <p>
        <b>Design Iterations and User Testing:</b>
        <br></br>
        With a clear focus on results, we began by setting our robust success
        criteria of ease of use, feasibility, and accessibility. My partner then
        designed with these objectives in mind. Multiple rounds of user testing
        were carried out, each iteration refining our designs to better meet
        user needs.
        <br></br>
        <br></br>
        Meanwhile, I also delved into learning React.js, brainstormed strategies
        for addressing the problem at hand, and situating myself in the site’s
        repository. I systematically evaluated various methods and features to
        enhance storage and speed, ensuring an optimized solution.
      </p>
      <p>
        <b>Development</b>
        <br></br>
        After we had decided on our designs. I was tasked with three main
        features to build: something to track the changes made to the site, keep
        information of user visitation, and build the visible feature into the
        interface.
      </p>
      <p>
        <span style={{ color: "#53539D" }}>1. Reading Page Changes</span>
        <br></br>
        At first, my approach was to periodically parse the article files and
        look for changes. While this method seemed promising, we decided that
        relying solely on the algorithm's judgment to determine update
        importance could expand the margin for error. Instead, I harnessed the
        power of GitHub's REST API to monitor our site's dedicated repository.
        This move allowed us to create an alert system that would trigger the
        feature notifications upon a Pull Request (PR) being successfully
        merged.
        <br></br>
        <img
          className="HowImgInText"
          src={NotificationGuidancePic}
        ></img>
        <br></br>
        I then built it so that our developers could fill a form at the
        bottom of each PR (pictured above), providing a clear indication of
        whether the changes should be displayed or not. Furthermore, they could
        delve into the specifics, offering insights on the sections that were
        altered and providing a detailed description of the modifications. This
        information would then be automatically displayed on the site and
        trigger the tags/inline notifications/logs to represent the article
        updates.
        <a href="https://github.com/grommet/hpe-design-system/wiki/Inline-Notifications-Guidance">
          {" "}
          Read more here
        </a>
        .<br></br>
        <br></br>
        Collaborating closely with the design team, we collectively arrived at
        the realization that this approach struck an ideal balance between the
        efficiency of automation and the valuable discernment of human judgment.
      </p>
      <p>
        <span style={{ color: "#53539D" }}>2. Visitation Tracking</span>
        <br></br>
        Following thorough user testing, we gleaned some valuable insights
        regarding user preferences, particularly their aversion to cookies. In
        response, I opted to introduce local storage tokens, a seamless
        alternative that maintains an equal standard of security, all without
        subjecting our users to the often annoying presence of a cookies banner.
        <br></br>
        <br></br>
        Our innovative approach to visitation tracking adheres to a clear and
        user-centric logic: regardless of the circumstances, we refrain from
        displaying updates that have remained unchanged for more than 30 days.
        For those within this timeframe, we refer to the local storage tokens to
        determine whether the user has encountered the update previously. If
        they haven't, we present it to them; otherwise, we spare them from
        redundant displays. This elegant solution guarantees a smoother, more
        user-friendly experience.
      </p>
      <p>
        <span style={{ color: "#53539D" }}>3. Implementing Designs</span>
        <br></br>
        The designs passed had multiple features to be implemented:
        <br></br>
        <img src={ThumbnailPhoto} className="HowImgInText"></img>
        <br></br>
        <i>On the browsing page: tags on the thumbnails of updated articles</i>
        <br></br>
        <img src={SearchResults} className="HowImgInText"></img>
        <br></br>
        <i>On search results: the same tag next to the name on the search result</i>
        <br></br>
        <img src={InlineNotif} className="HowImgInText"></img>
        <br></br>
        <i>In the guidance article: an inline notification underneath the title. This would have the date, description, and an active link to the updated section.</i>
        <br></br>
        <img src={NavNotif} className="HowImgInText"></img>
        <br></br>
        <i>In the guidance article: Alongside the in-page navigation, have tags on the affected section link</i>
        <br></br>
        <img src={SectionLevelNotif} className="HowImgInText"></img>
        <br></br>
        <i>In the guidance article: Section level headers on affected sections</i>
        <br></br>
        <img src={ChangeLog} className="HowImgInText"></img>
        <br></br>
        <i>In the guidance article: on the bottom of the page, keep a three-month record of the changes made to the site.</i>
        <br></br>
        <br></br>
        To achieve this, I used HPE's Design System component library, Grommet. Although it required a bit of time and effort to navigate through the intricate web of files, once I found my bearings, the process unfolded smoothly. I seamlessly integrated the desired visual features into the respective pages, ensuring that they seamlessly synchronized with the evolving page structure and the visitation tracking system.
        <br></br>
        <video width="440" height="330" controls>
            <source src={FunctioningVideo} type="video/mp4"/ >
            Your browser does not support the video tag.
        </video>
      </p>
    </>
  );
};

const HPEProject = () => {
  return (
    <>
      <div className="projectPageContainer">
        <ProjectPageHead pagename={"Automated Update Alert System"} />
        <OpeningVisual
          who={"UI/UX Developer and Design Interns"}
          what={"System to notify users of guidance updates"}
          when={"June to September 2023"}
          where={"HPE's Design System Team, working from the San Jose Office"}
          img={HPEPhoto}
        />
        <WhySection
          problemDescription={
            "How might we notify returning users that new content has been added to our components and templates so that they are able to quickly digest new information?"
          }
        />
        <HowSection pagename="HPE" />
      </div>
    </>
  );
};

export default HPEProject;
