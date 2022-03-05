import { useState } from 'react';
import { Form, Formik } from 'formik';
import previous from '../images/Previous.png';
import next from '../images/Next.png'
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';

const Coordinates = ({ changeFirstName, changeLastName, changeEmail, changeNumber, toggleStarted, toggleSkills, isCoordinates, toggleCoordinates}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const [errors, setErrors] = useState([false, false, false, false]); 

    function is_numeric(str){
        return /^\d+$/.test(str);
    }

    const onFirstNameChange = (a) => {
        if(a.length == 0) {
            setErrors([true, errors[1], errors[2], errors[3]]);
        } else {
            setErrors([false, errors[1], errors[2], errors[3]]);
        }
        setFirstName(a);
    }

    const onLastNameChange = (a) => {
        if(a.length < 3) {
            setErrors([errors[0], true, errors[2], errors[3]]);
        } else {
            setErrors([errors[0], false, errors[2], errors[3]]);
        }
        setLastName(a);
    }

    const onEmailChange = (a) => {
        const regex  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!regex.test(a)) {
            setErrors([errors[0], errors[1], true, errors[3]]);
        } else {
            setErrors([errors[0], errors[1], false, errors[3]]);
        }
        setEmail(a);
    }

    const onNumberChange = (a) => {
        if(!(is_numeric(a) && a.length == 9)) {
            setErrors([errors[0], errors[1], errors[2], true]);
        } else {
            setErrors([errors[0], errors[1], errors[2], false]);
        }
        setNumber(a);
    }

    const collectInfo = () => {
        changeFirstName(firstName);
        changeLastName(lastName);
        changeEmail(email);
        changeNumber(number);
    }

    const onNext = () => {
        if(!errors.includes(true) && !document.getElementById("firstName").value.length == 0) {
            collectInfo();
            console.log({
                firstname: firstName,
                lastname: lastName,
                email: email,
                number: number
            })
            toggleCoordinates();
            toggleSkills();
        }
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
                        <input value={firstName} id="firstName" onChange={(e) => onFirstNameChange(e.target.value)} name="firstname" className={errors[0] ? 'form-input errored':'form-input'} type="text" placeholder='First Name'/>
                        {errors[0] && <div className="error">*first name required</div>}
                        <input value={lastName} onChange={(e) => onLastNameChange(e.target.value)} className={errors[1] ? 'form-input errored':'form-input'} type="text" placeholder='Last Name'/>
                        {errors[1] && <div className="error">*last name should include 3 or more characters</div>}
                        <input value={email} onChange={(e) => onEmailChange(e.target.value)} className={errors[2] ? 'form-input errored':'form-input'} type="text" placeholder='E Mail'/>
                        {errors[2] && <div className="error">*invalid email format</div>}
                        <input value={number} onChange={(e) => onNumberChange(e.target.value)} className={errors[3] ? 'form-input errored':'form-input'} type="text" placeholder='+995 --- ------ '/>
                        {errors[3] && <div className="error">*number should contain exactly 9 digits</div>}
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