import PageHeader from "../../../components/PageHeader";
import { NavLink } from "react-router-dom";
import { FormPrevious } from "grommet-icons";
import './ProjectPage.css';

const ACMWProject = () => {
    return(
        <>
        <div className='projectPageContainer'>
        <NavLink to={'/projects'} className={'backButton'}><FormPrevious/></NavLink>
        <PageHeader pageName={'ACM-W Site - SCU Women in Computing'} />
        </div>
        <h1>Under construction 🏗️</h1>
        </>
    )
}

export default ACMWProject;