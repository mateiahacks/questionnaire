import vector from '../images/Vector1.png'
import { useState, useEffect } from 'react';
import Application from './Application';

const Applications = ({}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://bootcamp-2022.devtest.ge/api/applications?token=fc966bdd-4da4-4c33-bf6a-4ff25d7e33ce");
            const resData = await res.json();
            setData(resData);
            console.log(resData);
        }
        getData();
    }, []);

    

    return (
        <div className="apps fill-screen">
            <div className="inner">
                <h1>Submitted Applications</h1>
                {data.map((e) => 
                    <Application key={data.indexOf(e)} index={data.indexOf(e)+1} self={e}/>
                )
                }   
            </div>
        </div>
    );
}

export default Applications;