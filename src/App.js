import React from 'react';
import Intro from './components/Intro';
import { useState } from 'react';
import Questions from './components/Questions';

function App() {
  const [started, setStarted] = useState(false);  
  const [questions, setQuestions] = useState(false);
  const [coordinates, setCordinates] = useState(false); 
  const [finalSkills, setFinalSkills] = useState([
    {
      id: 1,
      experience: 3
    },
    {
      id: 3,
      experience: 2
    }
  ]);

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

  return (
    <div>
      <Intro toggleStarted={toggleStarted} isStarted={started} />
      {started && <Questions allSkills={finalSkills} addSkill={addSkill} toggleCoordinates={toggleCoordinates} isCoordinates={coordinates}/>}
    </div>
  );
}

export default App;
