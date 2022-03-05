import React from 'react';
import Intro from './components/Intro';
import { useState } from 'react';
import Questions from './components/Questions';

function App() {
  const [started, setStarted] = useState(false);  
  const [questions, setQuestions] = useState(false);
  const [coordinates, setCordinates] = useState(false); 
  const [finalSkills, setFinalSkills] = useState([]);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [workPref, setWorkPref] = useState("from_office");
  const [covidContact, setCovidContact] = useState(true);
  const [contactDate, setContactDate] = useState("");
  const [vaccinated, setVaccinated] = useState(true);
  const [lastVaccineDate, setLastVaccineDate] = useState("");

  const [devtalk, setDevtalk] = useState(true);
  const [aboutDevtalk, setAboutDevtalk] = useState("");
  const [special, setSpecial] = useState("");


  var result = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: "+995" + number,
      skills: finalSkills,
      work_preference: workPref,
      had_covid: covidContact,
      had_covid_at: contactDate,
      vaccinated: vaccinated,
      vaccinated_at: lastVaccineDate,
      will_organize_devtalk: devtalk,
      devtalk_topic: aboutDevtalk,
      something_special: special
    }


  const toggleDevtalk = (flag) => {
    setDevtalk(flag);
  }
  const changeAboutDevtalk = (a) => {
    setAboutDevtalk(a);
  }
  const changeSpecial = (a) => {
    setSpecial(a);
  }

  const changeWorkPref = (newWorkPref) => {
    setWorkPref(newWorkPref);
  }
  const toggleCovidContact = (flag) => {
    setCovidContact(flag);
  }
  const changeContactDate = (a) => {
    setContactDate(a);
  }
  const toggleVaccinated = (flag) => {
    setVaccinated(flag);
  }
  const changeLastVaccineDate = (a) => {
    setLastVaccineDate(a);
  } 

  const toggleStarted = () => {
    setStarted(!started);
    toggleCoordinates();
  }

  const toggleCoordinates = () => {
    setCordinates(!coordinates);
  }

  const addSkill = (skill) => {
    setFinalSkills([...finalSkills, skill]);
  }

  const deleteSkill = (skill) => {
    setFinalSkills(finalSkills.filter((e) => skill.id !== e.id));
  }

  const changeFirstName = (a) => {
    setFirstName(a);
  }

  const changeLastName = (a) => {
    setLastName(a)
  }

  const changeEmail = (a) => {
    setEmail(a);
  }

  const changeNumber = (a) => {
    setNumber(a);
  }

  return (
    <div>
      <Intro toggleStarted={toggleStarted} isStarted={started} />
      {started && <Questions
        debug={()=>{console.log(result)}}
        firstName = {firstName}
        lastName = {lastName}
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
        changeEmail={changeEmail}
        changeNumber={changeNumber}
        toggleStarted={toggleStarted} 
        deleteSkill={deleteSkill} 
        allSkills={finalSkills} 
        addSkill={addSkill} 
        toggleCoordinates={toggleCoordinates} 
        isCoordinates={coordinates}
        changeWorkPref={changeWorkPref}
        toggleCovidContact={toggleCovidContact}
        changeContactDate={changeContactDate}
        toggleVaccinated={toggleVaccinated}
        changeLastVaccineDate={changeLastVaccineDate}
        toggleDevtalk={toggleDevtalk}
        changeAboutDevtalk={changeAboutDevtalk}
        changeSpecial={changeSpecial}
      />}
    </div>
  );
}

export default App;
