import Intro from './components/Intro';
import { useState } from 'react';

function App() {
  const [started, setStarted] = useState(true);   

  const toggleStarted = () => {
    setStarted(!started);
  }

  return (
    <div>
      <Intro toggleStarted={toggleStarted} isStarted={started} />
    </div>
  );
}

export default App;
