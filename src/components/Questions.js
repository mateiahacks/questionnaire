import Coordinates from "./Coordinates";
import previous from '../images/Previous.png';
import next from '../images/Next.png'
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';
import Skills from "./Skills";
import Covid from "./Covid";
import { useState } from 'react';

const Questions = ({ toggleStarted, deleteSkill, allSkills, addSkill, isCoordinates, toggleCoordinates}) => {

    const [showSkills, setShowSkills] = useState(false);
    const [showCovid, setShowCovid] = useState(false);

    const toggleSkills = () => {
        setShowSkills(!showSkills);
    }

    const toggleCovid = () => {
        setShowCovid(!showCovid);
    }

    return (
        <div className="questions">
            <Coordinates toggleSkills={toggleSkills} toggleStarted={toggleStarted} isCoordinates={isCoordinates} toggleCoordinates={toggleCoordinates}/>
            <Skills toggleCovid={toggleCovid} onDelete={deleteSkill} allSkills={allSkills} addSkill={addSkill} toggleCoordinates={toggleCoordinates} toggleSkills={toggleSkills} showSkills={showSkills}/>
            <Covid toggleSkills={toggleSkills} showCovid={showCovid} toggleCovid={toggleCovid} />
        </div>
    )
}

export default Questions;