import React, { useState, useEffect } from 'react';
import { StyledTwoot } from '../styles/SingleTwoot.styles';

export default function SingleTwoot(props) {

    const {twoot} = props;

    console.log(props);

    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const [retwoot, setTwoot] = useState(false);

    //Buttons
    const handleLike = () => {
        setLike(!like);
    }

    const handleSave = () => {
        setSave(!save);
    }

    const handleRetwoot = () => {
        setTwoot(!retwoot);
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

    return (
                <StyledTwoot>
                    <div id={twoot._id} key={twoot._id}>
                        <div>Author: {twoot.author}</div>
                        <div>{twoot.authorSlug}</div>
                        <div>{twoot.dateAdded}</div>
                        <div>Posted {countDays(twoot.dateAdded)}</div>
                        <div>Text: {twoot.content}</div>
                        <button onClick={handleLike}><i class={`fa-solid fa-heart ${like}`}></i></button>
                        <button onClick={handleSave}><i class={`fa-solid fa-bookmark ${save}`}></i></button>
                        <button onClick={handleRetwoot}><i class={`fa-solid fa-retweet ${retwoot}`}></i></button>
                    </div>
                </StyledTwoot>
    );
}