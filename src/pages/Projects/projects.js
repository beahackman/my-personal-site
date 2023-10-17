import React from "react";
import PageHeader from "../../components/PageHeader";
import projectInfo from "./projectInfo";
import ProjectThumbnail from "./ProjectThumbnail";
import { NavLink } from "react-router-dom";

function toSlug(str){
    return str.replace(/\s+/g, '-').toLowerCase();
}

const Projects = () => {
    return(
        <>
         <PageHeader pageName={'Projects'} />
         {projectInfo.map((project) => {
            const name = toSlug(project.name);
            console.log(name);
            return(
                <NavLink to={`/projects/` + name}>
                    <ProjectThumbnail name={project.name} company={project.company} time={project.time}/>
                </NavLink>
            );
         })}
        </>
    )
}

export default Projects;