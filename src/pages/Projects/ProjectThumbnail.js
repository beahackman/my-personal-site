import './ProjectThumbnail.css';
import ACMWThumbnail from "./photos/ACMWProject.png";
import HPEThumbnail from "./photos/HPEProject.png";
import SPEKSThumbnail from "./photos/SPEKSProject.png";
import SecondLifeThumbnail from "./photos/SecondLifeProject.png";

const ProjectThumbnail = ({name, company, time}) => {
    return(
        <div className="thumbNailContainer">
            {name === "Automated Update Alert System" && 
                <img src={HPEThumbnail}></img>
            }
            {name === "SPEKS Project" && 
                <img src={SPEKSThumbnail}></img>
            }
            {name === "ACM-W Site" && 
                <img src={ACMWThumbnail}></img>
            }
            {name === "Second Life Project" &&
                <img src={SecondLifeThumbnail} style={{width: '10vw'}}></img>
            }
            <section>
                <h2>{name}</h2>
                <h3>{company} - {time}</h3>
            </section>
        </div>
    )
}

export default ProjectThumbnail;