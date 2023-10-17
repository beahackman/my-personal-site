import { NavLink } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { FormPrevious } from "grommet-icons";
import './ProjectPage.css';

const SPEKSProject = () => {
    return(
        <>
        <div className='projectPageContainer'>
        <NavLink to={'/projects'} className={'backButton'}><FormPrevious/></NavLink>
        <PageHeader pageName={'SPEKS Project - Hack for Humanity'} />
        </div>
        <h1>Under construction 🏗️</h1>
        </>
    )
}

export default SPEKSProject;