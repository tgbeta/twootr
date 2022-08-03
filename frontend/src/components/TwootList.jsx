import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function TwootList() {

    const [twoots, setTwoots] = useState([]);

    useEffect (() => {
        axios.get(`http://localhost:8080/twoots`).then((res) => {
        setTwoots(res.data);
        });
    }, []);

    // Date
    function countDays(dateTwoot) {
        const currentDate = new Date();
        const datePost = new Date(dateTwoot);

        const diffTime = currentDate.getTime() - datePost.getTime();
        const diffDay = diffTime / (1000 * 3600 * 24);

        if (diffDay < 1) {
            return ("today");
        } else {
            const date = Math.round(diffDay);
            return (date+" day(s) ago");
        }
        
    }
    
    return (
        <section>
            <h2>Test Twoot List</h2>
            <div>
                {          
                              
                    twoots.map(twoot => <div id={twoot._id} key={twoot._id}>
                        <div>Author: {twoot.author}</div>
                        <div>{twoot.authorSlug}</div>
                        <div>{twoot.dateAdded}</div>
                        <div>Posted {countDays(twoot.dateAdded)}</div>
                        <div>Text: {twoot.content}</div>
                    </div>)
                } 
            </div>
        </section>
    );
}