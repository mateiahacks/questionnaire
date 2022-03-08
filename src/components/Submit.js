import axios from 'axios';

const Submit = ({ toggleThank, postData, result, toggleShowAbout,toggleSubmitting}) => {

    const onSubmit = async () => {
        postData();
        toggleThank();
        toggleSubmitting();
    }

    const back = () => {
        toggleShowAbout();
        toggleSubmitting();
    }

    return (
        <div className="submit">
                <div onClick={onSubmit} className="btn">Submit</div>
                <div onClick={back} className="goback">go back</div>
        </div>
    );
}

export default Submit;