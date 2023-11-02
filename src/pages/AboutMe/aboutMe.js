import React from "react";
import ".//AboutMe.css";
import "../index.css";
import PageHeader from "../../components/PageHeader";
import "../Projects/ProjectPages/ProjectPage.css";
import funPortrait from "./IMG_7998.JPG";
import H4HPhoto from "./H4HPhoto.jpg";
import GraceHopper from "./GraceHopper.jpeg";

const AboutMe = () => {
  return (
    <>
      <PageHeader pageName={"About Me"} />
      <div className="aboutMeSection">
        <section>
          <p>
            <div className="blueBar"></div>
            Hi I’m Beatrice! I’m currently a third year Web Design and
            Engineering major at Santa Clara University. On campus, I’m a big
            part of the Women in Computing club and I’m also a tutor for the
            school’s Math Learning Center.
            <br></br>
            <br></br>
            Off campus, I love to lift, hike, make films, take photos and
            travel. My favorite place so far has to be South Korea because of
            the food and late night Karaoke! (Go check out some photos on my
            “For Fun” page)
            <div className="blueBar"></div>
          </p>
          <img
            style={{
              border: "15px solid rgba(122, 158, 126, 0.11)",
              borderRadius: "300px",
              width: "350px",
              margin: "0 20px 20px 20px",
            }}
            src={funPortrait}
          ></img>
        </section>
        <section>
          <img
            style={{
              border: "15px solid rgba(122, 158, 126, 0.11)",
              borderRadius: "300px",
              width: "350px",
              margin: "0 20px 20px 20px",
            }}
            src={H4HPhoto}
          ></img>
          <p>
            My major has opened doors to diverse learning experiences. I dove
            headfirst into the world of formal Computer Engineering, tackling
            subjects like networks, data structures, and advanced programming.
            But, my curiosity led me to explore even more subjects. I've
            ventured into the artistic side of technology, taking on Design and
            UX-heavy classes such as Web Development, Web Usability, and even
            writing for Engineering. In addition to that, I’ve sprinkled in a
            few arts classes for good measure.
            <br></br>
            <br></br>
            Beyond the classroom, I've worked on exciting off-campus projects.
            From exhilarating 24-hour hackathons, working on my very own
            personal website, and even crafting full websites for organizations
            like "Women in Computing" I've been tirelessly exploring the
            fascinating world of design, development, and product management.
          </p>
        </section>
        <section>
          <p>
            What fuels my passion is the diversity of knowledge I'm
            accumulating. My vast types of learning experiences have made me not
            only a Front-end Software Engineer with a knack for design but also
            a UI/UX enthusiast who understands the feasibility of development.
            Also, my expansive curiosity for Product Management where my general
            understanding of both design and development roles adds a unique
            dimension to my approach.
            <br></br>
            <br></br>
            Currently, I'm actively seeking internship and job opportunities in
            any of these fields, because, to me, each new pursuit keeps me
            grounded in a holistic, empathetic, and user-centric mindset. If
            you're looking for someone who's not just passionate about
            technology but also keen on creating user-focused, beautifully
            functional solutions, we might just be a perfect fit.
            <br></br>
            <br></br>
            So, whether you're on the lookout for a Front-end Software Engineer,
            a UI/UX Designer with an eye for code, or a Product Manager with a
            finger on the pulse of design and development, I'm here, ready to
            embrace the next exciting chapter. Let's create something amazing
            together!
          </p>
          <img
            style={{
              border: "15px solid rgba(122, 158, 126, 0.11)",
              borderRadius: "300px",
              width: "350px",
              margin: "0 20px 20px 20px",
            }}
            src={GraceHopper}
          ></img>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
