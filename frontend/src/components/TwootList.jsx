import React, { useState, useEffect } from 'react';
import axios from "axios";
import { StyledList } from '../styles/TwootList.styles';

export default function TwootList(props) {

    const {like, setLike} = props;
    const {save, setSave} = props;

    const [twoots, setTwoots] = useState([]);

    //Buttons
    const handleLike = () => {
        setLike(!like)
    }

    const handleSave = () => {
        setSave(!save)
    }

    const handleRetweet = () => {
        setSave(!save)
    }

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

    useEffect (() => {
        axios.get(`http://localhost:8080/twoots`).then((res) => {
        setTwoots(res.data);
        });
    }, []);
    
    return (
        <section>
            <h2>Test Twoot List</h2>
            <StyledList>
            <div>
                {          
                              
                    twoots.map(twoot => <div id={twoot._id} key={twoot._id}>
                        <div>Author: {twoot.author}</div>
                        <div>{twoot.authorSlug}</div>
                        <div>{twoot.dateAdded}</div>
                        <div>Posted {countDays(twoot.dateAdded)}</div>
                        <div>Text: {twoot.content}</div>
                        <button onclick={handleLike}><i class="fa-solid fa-heart"></i></button>
                        <button onclick={handleSave}><i class="fa-solid fa-bookmark"></i></button>
                        <button onclick={handleRetweet}><i class="fa-solid fa-retweet"></i></button>
                    </div>)
                } 
            </div>
            </StyledList>
        </section>
    );
}