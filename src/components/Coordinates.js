import { useState } from 'react';
import { Form, Formik } from 'formik';
import previous from '../images/Previous.png';
import next from '../images/Next.png'
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';

const Coordinates = ({toggleStarted, toggleSkills, isCoordinates, toggleCoordinates}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const onNext = () => {
        toggleCoordinates();
        toggleSkills();
    }

    const onPrev = () => {
        toggleCoordinates();
        toggleStarted();
    }

    return <div>{isCoordinates && (
            <div className="coordinates d-flex">
                <div className="left d-flex">
                    <h1>Hey, Rocketeer, what are your coordinates?</h1>
                    <form>
                        <input name="firstname" className='form-input' type="text" placeholder='First Name'/>
                        <input className='form-input' type="text" placeholder='Last Name'/>
                        <input className='form-input' type="text" placeholder='E Mail'/>
                        <input className='form-input' type="text" placeholder=''/>
                    </form>
                    <div className="switcher">
                        <img onClick={onPrev} src={previous} />
                        <img src={ellipse1} alt="" />
                        <img src={ellipse2} alt="" />
                        <img src={ellipse2} alt="" />
                        <img src={ellipse2} alt="" />
                        <img src={ellipse2} alt="" />
                        <img onClick={onNext} src={next} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>Redberry Origins</h1>
                    <p>You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇</p>
                </div>
            </div>
        )}
    </div>
}

export default Coordinates;