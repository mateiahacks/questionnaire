import { useState, useEffect } from 'react';

const Thank = ({ onIntro,toggleThank, toggleStarted}) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        let interval = setInterval(() => {
            setSeconds(seconds+1);
            console.log(seconds);
            if(seconds === 2) {
                toggleThank();
                onIntro();
                clearInterval(interval);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [seconds]);

    return (
        <div className="thank fill-screen">
            <h1>Thanks for Joining 😊</h1>
        </div>
    );
}

export default Thank;