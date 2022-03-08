import { useState, useEffect } from 'react';
import previous from '../images/Previous.png';
import next from '../images/Next.png'
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';
import vector from '../images/Vector.png';
import remove from '../images/Remove.png'
import { skillsMap } from './skillsMap';

const Skills = ({onDelete, allSkills, addSkill, showSkills, toggleCoordinates, toggleSkills, toggleCovid}) => {
    const [skillsData, setSkillsData] = useState([]);
    const [skill, setSkill] = useState("Skills");
    const skillMap = skillsMap();
    const [showDrop, setShowDrop] = useState(false);
    const [exp, setExp] = useState(0);

    const [renderExp, setRenderExp] = useState(0);

    const getSkills = async () => {
        const res = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
        const data = await res.json();
        console.log(data);
        setSkillsData(data);
    }

    useEffect(() => {
        getSkills();
    }, [])

    function is_numeric(str){
        return /^\d+$/.test(str);
    }
    
    function getByValue(map, searchValue) {
        for (let [key, value] of map.entries()) {
          if (value === searchValue)
            return key;
        }
      }

    const changeSkill = (e) => {
        setSkill(e);
        toggleDrop();
    }

    const toggleDrop = () => {
        setShowDrop(!showDrop);
    }

    const onPrev = () => {
        toggleCoordinates();
        toggleSkills();
    }

    const onNext = () => {
        if(allSkills.length > 0) {
            toggleCovid();
            toggleSkills();
        }
    }

    const changeExp = (a) => {
        setExp(a);
    }

    const onAdd = (e) => {
        if(skill !== "Skills" && is_numeric(exp)) {
            e.preventDefault();
            const n = {
                id: parseInt(getByValue(skillMap, skill)),
                experience: parseInt(exp)
            }
            var isAlready = false;
            for(var i=0; i<allSkills.length; i++) {
                if(allSkills[i].id === n.id) {
                    isAlready = true;
                    break;
                }
            }
            if(isAlready) {
                document.getElementById("is").style.display = "block";
            }
            if(!isAlready && exp !== 0 && skill !== "Skills") {
                document.getElementById("is").style.display = "none";
                addSkill(n);
            }
            console.log(n);
        }
    }
 
    return <div>
            {showSkills && (
            <div className="coordinates d-flex">
                    <div className="left skills-left d-flex">
                        <h1 id="skillsH">Tell us about your skills</h1>
                        <form>
                            <div onClick={toggleDrop} style={{cursor: 'pointer'}} className='skills form-input'>
                                {skill}
                                <img src={vector} alt="" />
                            </div>
                            <div id="is" style={{display: 'none'}} className='error'>*already added this language</div>
                            {showDrop && <div className='drop-skills'>
                                {
                                    skillsData.map((s) => 
                                        <div key={Math.random()*999} onClick={()=>changeSkill(s.title)} className='skill'>{s.title}</div>
                                    )
                                }
                            </div>}
                            <input onChange={(e) => changeExp(e.target.value)} id="exper" className={is_numeric(exp) ? 'form-input':'form-input errored'} name="durations" type="text" placeholder='Experience duration in years'/>
                            {!is_numeric(exp) && <div className="error">*input should be number</div>}
                            <div onClick={onAdd} className="btn">Add programming language</div>
                        
                            
                            <div className='allSkills'>
                                {
                                    allSkills.map((s) => 
                                        <div key={Math.random()*999} className='skillbar'>
                                            {console.log(allSkills)}
                                            <div style={{marginLeft: '-30px'}}>{skillMap.get(s.id)}</div>
                                            <div style={{marginLeft: '-80px'}}>{console.log(s)}Years of Experience: {s.experience}</div>
                                            <img onClick={() => onDelete(s)} style={{ cursor: 'pointer', marginRight: '-30px'}} src={remove} alt="" />
                                        </div>
                                    )
                                }
                            </div>
                        </form>
                        <div className="switcher">
                            <img onClick={onPrev} src={previous} />
                            <img onClick={onPrev} src={ellipse1} alt="" />
                            <img src={ellipse1} alt="" />
                            <img src={ellipse2} alt="" />
                            <img src={ellipse2} alt="" />
                            <img src={ellipse2} alt="" />
                            <img onClick={onNext} src={next} alt="next" />
                        </div>
                    </div>
                    <div className="right">
                        <h1>A bit about our battles</h1>
                        <p>As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.</p>
                    </div>
                </div>
        )}
    </div>
}

export default Skills;