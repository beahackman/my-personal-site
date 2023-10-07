import React from 'react';
import Portrait from ".//portrait.jpg";

const Home = () => {
    const mainSection = {
        height: "fit-content",
        padding: "8vh 0 8vw 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E3E3F1",
        flexWrap: "wrap",
    }
    const portraitStyle = {
        border: "10px solid #7373BA",
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
    const purpleBackground = {
        backgroundColor:"green",
        height: "10vh",
        zIndex: "-1"
    }
    const personalBlurb = {
        zIndex: "2",
        backgroundColor: "red",
        marginTop: "0",
        marginBottom: "0",
        height: "15vh",
    }
    return (
        <>
        <div style={mainSection}>
            <img style={portraitStyle} src={Portrait} />
            <section style={{textAlign:"start", padding:"0 5vw 0 5vw"}}>
                <h1 style={headerStyle}>
                    Beatrice Hackman
                </h1>
                <h4 style={subCategory}>Industry Liaison</h4>
                <h4 style={mainCategory}>Front-End Software Engineer</h4>
                <h4 style={subCategory}>Math Tutor</h4>
            </section>
        </div>
        {/* <div style={{height: "20vh"}}>
            <section style={purpleBackground}></section>
            <div style={personalBlurb}>
                <p>This is a blurb about me haha so on and so forth</p>
            </div>
        </div> */}
        </>
    );
};
 
export default Home;