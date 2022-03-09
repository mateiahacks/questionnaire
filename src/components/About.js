import previous from '../images/Previous.png';
import next from '../images/Next.png'
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';
import { useState } from 'react';

const About = ({ toggleCoordinates, toggleSkills, toggleSubmitting, toggleDevtalk, changeAboutDevtalk, changeSpecial, showAbout, toggleCovid, toggleShowAbout}) => {

    const [devtalkColor, setDevtalkColor] = useState(['blue', 'white']);
    const [about, setAbout] = useState("");
    const [special, setSpecial] = useState("");

    const onPrev = () => {
        toggleCovid();
        toggleShowAbout();
    }

    const onNext = () => {
        if((about !== "" && special !== "") || (devtalkColor[1] ==='blue' && special !== "")) {
            toggleSubmitting();
            toggleShowAbout();
        }
    }

    const toggleColor = (index) => {
        if(index == 0) {
            setDevtalkColor(['blue', 'white']);
        } else {
            setDevtalkColor(['white', 'blue'])
        }
    }

    const goCords = () => {
        toggleShowAbout();
        toggleCoordinates();
    }

    const goSkills = () => {
        toggleShowAbout();
        toggleSkills();
    }

    return <div>{showAbout && (
        <div className="coordinates d-flex">
            <div className="left ab-left d-flex">
                <h1>What about you?</h1>
                <form>
                    <div className="covid-q">
                        <div className="quest">Would you attend Devtalks and maybe also  organize your own?</div>
                        <div className="choice d-flex">
                            <div onClick={() => {toggleColor(0); toggleDevtalk(true); document.getElementById("aboutDevtalk").style.display = 'block';}} style={{backgroundColor: devtalkColor[0]}} className="checkbox"></div>
                            <pre>  Yes</pre>    
                        </div>
                        <div className="choice d-flex">
                            <div style={{backgroundColor: devtalkColor[1]}} onClick={() => {
                                toggleColor(1); 
                                toggleDevtalk(false);
                                document.getElementById("aboutDevtalk").style.display = 'none';
                                }} className="checkbox"></div>
                            <pre>  No</pre>    
                        </div>
                    </div>
                    <div id='aboutDevtalk' className="covid-q">
                        <div className="quest">What would you speak about ad Devtalk?</div>
                        <textarea onChange={(e)=>{setAbout(e.target.value); changeAboutDevtalk(e.target.value);}} placeholder='I would...' className={about==="" ?  "form-input about-input errored":"form-input about-input"}  value={about}/>
                        {about==="" && <div className='error'>*type something</div>}
                    </div>
                    <div className="covid-q">
                        <div className="quest">Tell us something special</div>
                        <textarea onChange={(e) => {setSpecial(e.target.value); changeSpecial(e.target.value)}} placeholder='I...' 
                        className={special==="" ?  "form-input about-input errored":"form-input about-input"}
                        value={special} style={{height: '50px'}} />
                        {special==="" && <div className='error'>*type something</div>}
                    </div>
                </form>
                <div className="switcher">
                    <img onClick={onPrev} src={previous} />
                    <img onClick={goCords} src={ellipse1} alt="" />
                    <img onClick={goSkills} src={ellipse1} alt="" />
                    <img onClick={onPrev} src={ellipse1} alt="" />
                    <img src={ellipse1} alt="" />
                    <img src={ellipse2} alt="" />
                    <img onClick={onNext} src={next} alt="" />
                </div>
            </div>
            <div className="right about-right">
                <h1>Redberrian Insights</h1>
                <p>We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!</p>
            </div>
        </div>
    )}
</div>
}

export default About;