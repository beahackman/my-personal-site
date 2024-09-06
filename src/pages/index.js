import React from 'react';
import Portrait from ".//portrait.jpg";
import "./index.css";
import { DocumentDownload, LinkedinOption, MailOption } from 'grommet-icons';
import Resume from "../components/BHackmanResume.pdf";

const Home = () => {
    const mainSection = {
        height: "fit-content",
        padding: "8vh 0 8vw 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    }
    const portraitStyle = {
        border: "15px solid rgba(122, 158, 126, 0.11)",
        borderRadius:"300px",
        width: "350px",
      };

    const headerStyle = {
        color: "#040484",
        fontSize: "4em"
    }
    const subCategory = {
        fontSize: "1.5em",
        color: "#7373BA",
        margin: "0"
    }
    const mainCategory = {
        fontSize: "2em",
        color: "#040484",
        margin: "0"
    }
    return (
        <>
        <div style={mainSection}>
            <img style={portraitStyle} src={Portrait} />
            <section style={{textAlign:"start", padding:"0 5vw 0 5vw"}}>
                <h1 style={headerStyle}>
                    Beatrice Hackman
                </h1>
                <h4 style={subCategory}>Academic Researcher</h4>
                <h4 style={mainCategory}>Front-End Software Developer</h4>
                <h4 style={subCategory}>Math and Web Dev Tutor</h4>
            </section>
        </div>
        <div className="landingBody">
            <section className="quickBio">
                <p>Hey 👋 My name is Beatrice and I’m a fourth-year 
                Web Design and Engineering major at Santa Clara University. 
                I have a passion for innovation, a track record of leadership, countless projects, 
                and aspirations to be a full-time UI/UX Developer. 
                Have a look at my site to check some of it out!</p>
            </section>
            <section  className="quickLinks">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <div className="iconBlock"><DocumentDownload /></div>
                        <a href={Resume} download="HackmanResume" target="_blank" rel="noreferrer">
                            Download My Resume
                        </a>
                    </li>
                    <li>
                        <div className="iconBlock"><LinkedinOption /></div>
                        <a href='https://www.linkedin.com/in/beatrice-hackman-1747b317a/'>
                            LinkedIn Profile
                        </a>
                    </li>
                    <li>
                        <div className="iconBlock"><MailOption /></div>
                        <a href="mailto:hackmanbeatrice@gmail.com">
                            hackmanbeatrice@gmail.com
                        </a>
                    </li>
                </ul>
            </section>
        </div>
        </>
    );
};
 
export default Home;