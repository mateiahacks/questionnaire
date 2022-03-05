import axios from 'axios';

const Submit = ({ postData, result, toggleShowAbout,toggleSubmitting}) => {

    const onSubmit = async () => {
        const res = await fetch('https://bootcamp-2022.devtest.ge/api/application', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        });
        
    }

    const back = () => {
        toggleShowAbout();
        toggleSubmitting();
    }

    return (
        <div className="submit">
                <div onClick={postData} className="btn">Submit</div>
                <div onClick={back} className="goback">go back</div>
        </div>
    );
}

export default Submit;