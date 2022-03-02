import Coordinates from "./Coordinates";
import previous from '../images/Previous.png';
import next from '../images/Next.png'
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';
import Skills from "./Skills";
import { useState } from 'react';

const Questions = ({ allSkills, addSkill, isCoordinates, toggleCoordinates}) => {

    const [showSkills, setShowSkills] = useState(false);

    const toggleSkills = () => {
        setShowSkills(!showSkills);
    }

    return (
        <div className="questions">
            <Coordinates toggleSkills={toggleSkills} isCoordinates={isCoordinates} toggleCoordinates={toggleCoordinates}/>
            <Skills allSkills={allSkills} addSkill={addSkill} toggleCoordinates={toggleCoordinates} toggleSkills={toggleSkills} showSkills={showSkills}/>
        </div>
    )
}

export default Questions;