import SecondLifeThumbnail from "../photos/SecondLifeProject.png";
import {
  ProjectPageHead,
  OpeningVisual,
  WhySection,
  HowSection,
} from "./ProjectPageComponents";

export const SecondLifeProjectHow = () => {
  return (
    <>
      <p>
        <b>Introduction</b>
        <br></br>
        In March of 2023, I had taken a Web Usability course where we had
        learned about wireframing, designs, and accessibility. One of our labs
        had prompted us to come up with an app that promotes sustainability,
        design it, and wireframe it. I had chosen to prototype a mobile app that
        would connect users to second hand organizations. They would be able to
        fill out a form about the item they want to discard, and it would
        provide a customized database of local organizations that would accept
        it.
      </p>
      <p>
        <b>Design and Development Iterations</b>
        <br></br>
        <br></br>
        <span style={{ color: "#53539D" }}>Considerations During Design</span>
        <br></br>
        When creating the app, it was essential to keep in mind that users would
        be dealing with a data-heavy interface, relying on the accuracy of the
        information they submit. To address this, we ensured that the app's
        design is user-friendly, making it easy to navigate and providing clear
        guidance on what information users should update.
        <br></br>
        We recognized the need to balance search results and data presentation,
        ensuring that users wouldn't feel overwhelmed by the information while
        still having a clear path forward. This meant presenting data in a way
        that makes the next steps seem achievable.
        <br></br>
        <br></br>
        <span style={{ color: "#53539D" }}>Process Highlights</span>
        <br></br>
        To enhance user experience, we provided thorough instructions and help
        buttons for additional explanations throughout the app. This ensures
        that users can easily find the information they need and understand the
        data submission process.
        <br></br>
        Efficiency was a priority, and we incorporated search filters in the
        results section to streamline the sorting of information. This allows
        users to find what they're looking for more quickly and efficiently. In
        addition to functionality, aesthetics were carefully considered during
        the app's design to provide an engaging and visually pleasing experience
        for users.
      </p>
      <p>
        <b>The Prototype</b>
        <br></br>
        <iframe
        title='figma'
          style={{
            maxWidth: '800px',
            width: '100%',
            height: '40vh',
            maxHeight: '450px',
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0ek42SmaKIzHNo3NTLjez2%2FWEB-Lab-2-Wireframe%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DfOLQAnxoBYmv7P5a-1"
          allowfullscreen
        ></iframe>
      </p>
    </>
  );
};

const SecondLifeProject = () => {
  return (
    <>
      <div className="projectPageContainer">
        <ProjectPageHead pagename={"Second Life Project"} />
        <OpeningVisual
          who={"Professor Hsiao"}
          what={"Prototype and Wireframe for Sustainability App"}
          when={"April 2023"}
          where={"COEN 163 Web Usability - Santa Clara University"}
          img={SecondLifeThumbnail}
        />
        <WhySection
          problemDescription={
            "Develop an app that connects users with second-hand organizations to promote sustainability. The app should encourage sustainable choices, facilitate access to thrift stores and resale platforms, and educate users on the environmental benefits of reusing and recycling."
          }
        />
        <HowSection pagename="SecondLife" />
      </div>
    </>
  );
};

export default SecondLifeProject;
