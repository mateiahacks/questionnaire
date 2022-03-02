import previous from '../images/Previous.png';
import next from '../images/Next.png'
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';

const Covid = ({showCovid, toggleCovid, toggleSkills}) => {

    const onPrev = () => {
        toggleCovid();
        toggleSkills();
    }

    return <div>{showCovid && (
        <div className="coordinates d-flex">
            <div className="left d-flex">
                <h1>Covid Stuff</h1>
                <form className='covidForm'>
                    <div className='covid-q'>
                        <div className='quest'>how would you prefer to work?</div>
                        <div className="choice d-flex">
                            <div className="checkbox"></div>
                            <pre>  From Sairme office</pre>
                        </div>
                        <div className="choice d-flex">
                            <div className="checkbox"></div>
                            <pre>  From Home</pre>
                        </div>
                        <div className="choice d-flex">
                            <div className="checkbox"></div>
                            <pre>  Hybrid</pre>
                        </div>
                    </div>
                    <div className='covid-q'>
                        <div className="quest">did you contact covid-19 :(?</div>
                        <div className="choice d-flex">
                            <div className="checkbox"></div>
                            <pre>  yes</pre>
                        </div>
                        <div className="choice d-flex">
                            <div className="checkbox"></div>
                            <pre>  no</pre>
                        </div>

                    </div>
                </form>
                <div className="switcher">
                    <img onClick={onPrev} src={previous} />
                    <img src={ellipse1} alt="" />
                    <img src={ellipse1} alt="" />
                    <img src={ellipse1} alt="" />
                    <img src={ellipse2} alt="" />
                    <img src={ellipse2} alt="" />
                    <img src={next} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Redberry Covid Policies</h1>
                <p>As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications Zoom meetings. Both on the fun and productivity scales. </p>
            </div>
        </div>
    )}
</div>
}

export default Covid;