import { Link } from "react-router-dom";
import Counter from "./Counter.jsx";
import { useEffect } from 'react';
import '../../templates/style.css';
import '../../templates/css/font-icons.css';
import '../../templates/css/components/ion.rangeslider.css';
import '../../templates/demos/hosting/hosting.css';
import '../../templates/css/custom.css';

export default function () {

    // Inside your React component
    useEffect(() => {


       
    }, []);

    return <>

            <div id="top-bar" className="text-center dark" style={{ backgroundColor: '#15888a' }}>
                <p className="mb-0 text-white" style={{ fontSize: '14px' }}>
                    Holisticly cultivate multifunctional quality vectors after Mobile SDK.
                    <a href="#" className="ms-2 font-primary fw-bold text-white"><u>Learn More</u> &#8250;</a>
                </p>
            </div>

          

    </>;
}