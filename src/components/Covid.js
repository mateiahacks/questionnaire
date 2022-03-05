import previous from '../images/Previous.png';
import next from '../images/Next.png'
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';
import { useState } from 'react';

const Covid = ({debug,showCovid, toggleCovid, toggleSkills, toggleShowAbout,
                changeWorkPref, toggleCovidContact,
                changeContactDate, toggleVaccinated, changeLastVaccineDate
            }) => {
    const [workChoicesColor, setWorkChoicesColor] = useState(['blue', 'white', 'white']);
    const [covidChoicesColor, setCovidChoicesColor] = useState(['blue', 'white']);    
    const [vacChoicesColor, setVacChoicesColor] = useState(['blue', 'white']);

    const [contactDate, setContactDate] = useState('');
    const [vacDate, setVacDate] = useState('');

    const onChangeContactDate = (e) => {
        setContactDate(e);
    }

    const onChangeVacDate = (e) => {
        setVacDate(e);
    }

    const onPrev = () => {
        toggleCovid();
        toggleSkills();
    }

    const onNext = () => {
        if(!((vacDate=="" && vacChoicesColor[0]==="blue") || (contactDate=="" && covidChoicesColor[0]==="blue"))) {
            toggleShowAbout();
            toggleCovid();
        }
    }

    const toggleVacColor = (index) => {
        if(index == 0) {
            setVacChoicesColor(['blue', 'white']);
        }
        if(index == 1) {
            setVacChoicesColor(['white', 'blue']);
        }
    }

    const toggleCovidColor = (index) => {
        if(index == 0) {
            setCovidChoicesColor(['blue', 'white']);
        }
        if(index == 1) {
            setCovidChoicesColor(['white', 'blue'])
        }
    }

    const toggleWorkColor = (index) => {
        if(index == 0) {
            setWorkChoicesColor(['blue', 'white', 'white']);
        } 
        if(index == 1) {
            setWorkChoicesColor(['white', 'blue', 'white']);
        }
        if(index == 2) {
            setWorkChoicesColor(['white', 'white', 'blue']);
        }
        
    }

    return <div>{showCovid && (
        <div className="coordinates d-flex">
            <div className="left d-flex">
                <h1>Covid Stuff</h1>
                <form className='covidForm'>
                    <div className='covid-q'>
                        <div className='quest'>how would you prefer to work?</div>
                        <div className="choice d-flex">
                            <div 
                             onClick={() => {toggleWorkColor(0); changeWorkPref("from-office")}}   
                             style={{backgroundColor: workChoicesColor[0]}} className="checkbox"></div>
                            <pre>  From Sairme office</pre>
                        </div>
                        <div className="choice d-flex">
                            <div 
                            onClick={() => {toggleWorkColor(1); changeWorkPref("from-home")}}
                            style={{backgroundColor: workChoicesColor[1]}}
                            className="checkbox"></div>
                            <pre>  From Home</pre>
                        </div>
                        <div className="choice d-flex">
                            <div
                            onClick={() => {toggleWorkColor(2); changeWorkPref("hybrid")}}
                            style={{backgroundColor: workChoicesColor[2]}} 
                            className="checkbox"></div>
                            <pre>  Hybrid</pre>
                        </div>
                    </div>
                    <div className='covid-q'>
                        <div className="quest">did you contact covid-19 :(?</div>
                        <div className="choice d-flex">
                            <div 
                            onClick={() => {toggleCovidColor(0); toggleCovidContact(true)}}
                            style={{backgroundColor: covidChoicesColor[0]}}
                            className="checkbox"></div>
                            <pre>  Yes</pre>
                        </div>
                        <div className="choice d-flex">
                            <div 
                            onClick={() => {toggleCovidColor(1); toggleCovidContact(false)}}
                            style={{backgroundColor: covidChoicesColor[1]}}
                            className="checkbox"></div>
                            <pre>  No</pre>
                        </div>
                    </div>
                    <div className="covid-q">
                        <div className="quest"> When ?</div>
                        <input onChange={(e) => {
                            onChangeContactDate(e.target.value);
                            changeContactDate(e.target.value);
                            }} placeholder="dd-mm-yyyy" className='form-input date' value={contactDate} type="date"/>
                        {(contactDate=="" && covidChoicesColor[0]==="blue") && <div className="error">*choose date</div>}
                    </div>
                    <div className="covid-q">
                        <div className="quest">Have you been vaccinated?</div>
                        <div className="choice d-flex">
                            <div 
                            onClick={() => {toggleVacColor(0); toggleVaccinated(true);}}
                            style={{backgroundColor: vacChoicesColor[0]}}
                            className="checkbox"></div>
                            <pre>  Yes</pre>
                        </div>
                        <div className="choice d-flex">
                            <div 
                            onClick={() => {toggleVacColor(1); toggleVaccinated(false)}}
                            style={{backgroundColor: vacChoicesColor[1]}}
                            className="checkbox"></div>
                            <pre>  No</pre>
                        </div>
                    </div>
                    <div className="covid-q">
                        <div className="quest">When did you get last covid vaccine?</div>
                        <input onChange={(e) => {
                            onChangeVacDate(e.target.value);
                            changeLastVaccineDate(e.target.value);
                            }} placeholder="dd-mm-yyyy" value={vacDate} className='form-input date' type="date"/>
                        {(vacDate=="" && vacChoicesColor[0]==="blue") && <div className="error">*choose date</div>}
                    </div>
                </form>
                <div className="switcher">
                    <img onClick={onPrev} src={previous} />
                    <img src={ellipse1} alt="" />
                    <img src={ellipse1} alt="" />
                    <img src={ellipse1} alt="" />
                    <img src={ellipse2} alt="" />
                    <img src={ellipse2} alt="" />
                    <img onClick={onNext} src={next} alt="" />
                </div>
            </div>
            <div className="right covid">
                <h1>Redberry Covid Policies</h1>
                <p>As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications Zoom meetings. Both on the fun and productivity scales. </p>
            </div>
        </div>
    )}
</div>
}

export default Covid;