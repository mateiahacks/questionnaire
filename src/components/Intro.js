import React from 'react';
import { useState } from 'react';
import rocketman from '../images/rocketman.png'

const Intro = ({isStarted, toggleStarted}) => {
    
    return <div>
        { isStarted && (
            
            <div className='intro fill-screen'>
                <h1>Welcome Rocketeer !</h1>
                <div onClick={toggleStarted} className='btn btn-start'>
                    Start Questionnaire
                </div>
                <a onClick={toggleStarted} >Submitted Aplications</a>
                <img src={rocketman} width="410px"/>
            </div>
        )}
    </div>
}

export default Intro;