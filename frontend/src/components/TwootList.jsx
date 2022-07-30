import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function TwootList() {

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
                    twoots.map(twoot => <div id={twoot._id}>
                    <div>Author: {twoot.author}</div>
                    <div>{twoot.authorSlug}</div>
                    <div>{twoot.dateAdded}</div>
                    <div>Text: {twoot.content}</div>
                    </div>)
                } 
            </div>
        </section>
    );
}