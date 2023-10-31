import './ProjectPage.css';
import { NavLink } from 'react-router-dom';
import { FormPrevious } from 'grommet-icons';
import PageHeader from '../../../components/PageHeader';
import { HPEHow } from './HPEProject';
import { SPEKSHow } from './SPEKSProject';
import { ACMWHow } from './ACMWProject';

export const ProjectPageHead = ({pagename}) => {
    return(
        <section className="projectPageHead">
            <NavLink to={'/projects'} className={'backButton'}><FormPrevious/></NavLink>
            <PageHeader pageName={pagename} />
        </section>
    )
}

export const OpeningVisual = ({who, what, when, where, img}) => {
    return(
        <div className="openingVisual">
            <img src={img} />
            <section>
                <p><b>Who:</b> {who}</p>
                <p><b>What:</b> {what}</p>
                <p><b>When:</b> {when}</p>
                <p><b>Where:</b> {where}</p>
            </section>
        </div>
    )
}

export const WhySection = ({problemDescription}) => {
    return(
        <div className="whyHowSection">
            <section>
                <h2>Why?</h2>
            </section>
            <p>
                <b>Problem Statement: </b>
                {problemDescription}
            </p>
        </div>
    )
}

export const HowSection = ({pagename}) => {
    return(
        <div className="whyHowSection">
            <section>
                <h2>How?</h2>
            </section>
            <main>
                {pagename === 'HPE' && <HPEHow />}
                {pagename === 'SPEKS' && <SPEKSHow />}
                {pagename === 'ACMW' && <ACMWHow/>}
                {/* add other pages here */}
            </main>
        </div>
    )
}