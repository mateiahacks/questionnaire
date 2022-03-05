import React from 'react';
import Intro from './components/Intro';
import { useState } from 'react';
import Questions from './components/Questions';
import Submit from './components/Submit';

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

  const [submitting, setSubmitting] = useState(false);

  const postData = async () => {
    await fetch("https://bootcamp-2022.devtest.ge/api/application", {
      method: 'POST',
      headers: {
          'Accept' : 'application/jason',
          'Content-Type' : 'application/json',
          'Sec-Fetch-Site': 'same-origin'
      },
      body: JSON.stringify({
        token: "fc966bdd-4da4-4c33-bf6a-4ff25d7e33ce",
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: number,
        work_preference: workPref,
        had_covid: covidContact,
        had_covid_at: contactDate,
        vaccinated: vaccinated,
        vaccinated_at: lastVaccineDate,
        will_organize_devtalk: devtalk,
        devtalk_topic: aboutDevtalk,
        something_special: special,
        skills: finalSkills
      }),
    });
  }
  
  const toggleSubmitting = () => {
    setSubmitting(!submitting);
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
        toggleSubmitting={toggleSubmitting}
        submitting={submitting}
        postData={postData}
      />}      
    </div>
  );
}

export default App;
