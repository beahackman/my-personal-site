import PageHeader from "../../../components/PageHeader";
import { NavLink } from "react-router-dom";
import { FormPrevious } from "grommet-icons";
import './ProjectPage.css';

const HPEProject = () => {
    return(
        <>
        <div className='projectPageContainer'>
        <NavLink to={'/projects'} className={'backButton'}><FormPrevious/></NavLink>
        <PageHeader pageName={'Automated Update Alert System - HPE'} />
        </div>
        <h1>Under construction 🏗️</h1>
        </>
    )
}

export default HPEProject;