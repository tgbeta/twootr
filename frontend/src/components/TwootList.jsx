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
        
        if (currentDate === datePost) {
            return ("today");
        } else {
            const diffTime = currentDate.getTime() - datePost.getTime();
            console.log(diffTime);
            const diffDay = Math.round(diffTime / (1000 * 3600 * 24));
            return diffDay;
        }
        
    }
    
    return (
        <section>
            <h2>Test Twoot List</h2>
            <div>
                {          
                              
                    twoots.map(twoot => <div id={twoot._id}>
                    <div>Author: {twoot.author}</div>
                    <div>{twoot.authorSlug}</div>
                    <div>{twoot.dateAdded}</div>
                    <div>Posted {countDays(twoot.dateAdded)} day(s) ago</div>
                    <div>Text: {twoot.content}</div>
                    </div>)
                } 
            </div>
        </section>
    );
}