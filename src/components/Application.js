import vector from '../images/Vector1.png';
import { useState } from 'react';
import { skillsMap } from './skillsMap';
import calendar from '../images/calendar.png';

const Application = ({data, self, index}) => {

    const [sheet, setSheet] = useState(false);
    const [rotated, setRotated] = useState(false);


    const onDrop = () => {
        setSheet(!sheet);
        setRotated(!rotated);
    }

    return (
        <div>
            <div onClick={onDrop} className="app">
                <div>{index}</div>
                <div>
                    <img src={vector} style={{transform: rotated && 'rotate(180deg)', height: '8px', cursor: 'pointer', transition: '1s'}} alt="" />
                </div>
            </div>
    {sheet && <div className="sheet">
                <div className="app-row d-flex">
                    <div className="marg-r row-section">
                        <h1>Personal Information</h1>
                        <pre>First Name               <span>{self.first_name}</span></pre>
                        <pre>Last Name                <span>{self.last_name}</span></pre>
                        <pre>E Mail                         <span>{self.email}</span></pre>
                        <pre>Phone                       <span>{self.phone}</span></pre>
                    </div>
                    <div style={{marginRight: '60px'}} className="row-section">
                        <h1>Skillset</h1>
                        {
                            self.skills.map((e) =>
                                <pre key={e.id}>{skillsMap().get(e.id)}             <span>Years of experience: {e.experience}</span></pre>
                            )
                        }
                    </div>
                </div>
                <div className="app-row d-flex">
                    <div className="row-section" style={{marginRight: '135px'}}>
                        <h1>Covid Situation</h1>
                        <div className="covid-q">
                            <div className="quest">how would you prefer work?</div>
                            <div className="choice d-flex">
                                <div className={self.work_preference==="from_office" ? "checkbox checkedd":"checkbox"}></div>
                                <pre>  From Sairme Office</pre>
                            </div>
                            <div className="choice d-flex">
                                <div className={self.work_preference==="from_home" ? "checkbox checkedd":"checkbox"}></div>
                                <pre>  From Home</pre>
                            </div>
                            <div className="choice d-flex">
                                <div className={self.work_preference==="hybrid" ? "checkbox checkedd":"checkbox"}></div>
                                <pre>  Hybrid</pre>
                            </div>
                        </div>
                        <div className="covid-q">
                            <div className="quest">Did you have covid-19?</div>
                            <div className="choice d-flex">
                                <div className={self.had_covid===true ? "checkbox checkedd":"checkbox"}></div>
                                <pre>  Yes</pre>
                            </div>
                            <div className="choice d-flex">
                                <div className={self.had_covid===false ? "checkbox checkedd":"checkbox"}></div>
                                <pre>  No</pre>
                            </div>
                        </div>
                        <div className="covid-q">
                            <div className="quest"> When did you get covid 19?</div>
                            <div type="date" className='form-input date'><div>{self.had_covid_at}</div><img src={calendar}/></div>
                        </div>
                        <div className="covid-q">
                            <div className="quest">Have you been vaccinated?</div>
                            <div className="choice d-flex">
                                <div className={self.vaccinated===true ? "checkbox checkedd":"checkbox"}></div>
                                <pre>  Yes</pre>
                            </div>
                            <div className="choice d-flex">
                                <div className={self.vaccinated===false ? "checkbox checkedd":"checkbox"}></div>
                                <pre>  No</pre>
                            </div>
                        </div>
                        <div className="covid-q">
                            <div className="quest"> When did you get covid vaccine?</div>
                            <div type="date" className='form-input date'><div>{self.vaccinated_at}</div><img src={calendar}/></div>
                        </div>
                    </div>
                    <div className="row-section">
                        <h1>Insights</h1>
                        <div className="covid-q">
                            <div className="quest">Would you attend Devtalks and maybe also orginze your own?</div>
                            <div className="choice d-flex">
                                <div className={self.will_organize_devtalk===true ? "checkbox checkedd":"checkbox"}></div>
                                <pre>  Yes</pre>
                            </div>
                            <div className="choice d-flex">
                                <div className={self.will_organize_devtalk===false ? "checkbox checkedd":"checkbox"}></div>
                                <pre>  No</pre>
                            </div>
                        </div>
        
                        <div className="covid-q">
                            <div className="quest">What would you speak about at Devtalk</div>
                            <div className="form-input about-input">{self.devtalk_topic}</div>
                        </div>
                        <div className="covid-q">
                            <div className="quest">Tell us something special</div>
                            <div className="form-input about-input">{self.something_special}</div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Application;
