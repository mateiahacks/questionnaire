import Coordinates from "./Coordinates";
import previous from '../images/Previous.png';
import next from '../images/Next.png'
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';
import Skills from "./Skills";
import Covid from "./Covid";
import { useState } from 'react';
import About from "./About";
import Submit from "./Submit";

const Questions = ({ postData, debug, submitting,toggleSubmitting,
    changeFirstName, changeLastName, 
    changeEmail, changeNumber, toggleStarted, 
    deleteSkill, allSkills, addSkill, 
    isCoordinates, toggleCoordinates,
    changeWorkPref, toggleCovidContact,
    changeContactDate, toggleVaccinated, changeLastVaccineDate,
    toggleDevtalk, changeAboutDevtalk, changeSpecial}) => {

    const [showSkills, setShowSkills] = useState(false);
    const [showCovid, setShowCovid] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const toggleShowAbout = () => {
        setShowAbout(!showAbout);
    }

    const toggleSkills = () => {
        setShowSkills(!showSkills);
    }

    const toggleCovid = () => {
        setShowCovid(!showCovid);
    }


    return (
        <div className="questions">
            <Coordinates 
            changeFirstName={changeFirstName}
            changeLastName={changeLastName}
            changeEmail={changeEmail}
            changeNumber={changeNumber}
            toggleSkills={toggleSkills} toggleStarted={toggleStarted} isCoordinates={isCoordinates} toggleCoordinates={toggleCoordinates}/>
            <Skills toggleCovid={toggleCovid} onDelete={deleteSkill} allSkills={allSkills} addSkill={addSkill} toggleCoordinates={toggleCoordinates} toggleSkills={toggleSkills} showSkills={showSkills}/>
            <Covid 
            debug={debug}
            toggleShowAbout={toggleShowAbout} toggleSkills={toggleSkills} 
            showCovid={showCovid} toggleCovid={toggleCovid} 
            changeWorkPref={changeWorkPref}
            toggleCovidContact={toggleCovidContact}
            changeContactDate={changeContactDate}
            toggleVaccinated={toggleVaccinated}
            changeLastVaccineDate={changeLastVaccineDate}
        />
            <About 
            toggleCovid={toggleCovid} toggleShowAbout={toggleShowAbout} 
            toggleDevtalk={toggleDevtalk}
            changeAboutDevtalk={changeAboutDevtalk}
            changeSpecial={changeSpecial}
            showAbout={showAbout}
            toggleSubmitting={toggleSubmitting}
            />

            {submitting && <Submit postData={postData} toggleShowAbout={toggleShowAbout} toggleSubmitting={toggleSubmitting}/>}

        </div>
    )
}

export default Questions;