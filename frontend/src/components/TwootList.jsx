import React, { useState, useEffect } from 'react';
import axios from "axios";
import SingleTwoot from './SingleTwoot';

export default function TwootList(props) {

    const [twoots, setTwoots] = useState([]);

    useEffect (() => {
        axios.get(`http://localhost:8080/twoots`).then((res) => {
        setTwoots(res.data);
        });
    }, []);

    return (
        <section>
            <h2>Test Twoot List</h2>
            <div>
                {          
                    twoots.length > 0 &&           
                    twoots.map(twoot => <SingleTwoot twoot={twoot}/>)
                } 
            </div>
        </section>
    );
}