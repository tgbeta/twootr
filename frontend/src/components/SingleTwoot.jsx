import React, { useState, useEffect } from 'react';
import { StyledTwoot } from '../styles/SingleTwoot.styles';
import RetwootText from './Retwoot';

export default function SingleTwoot(props) {

    const {twoot} = props;

    console.log(props);

    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const [retwoot, setRetwoot] = useState(false);
    const [retwootText, setRetwootText] = useState('');

    //Buttons
    const handleLike = () => {
        setLike(!like);
    }

    const handleSave = () => {
        setSave(!save);
    }

    const handleRetwoot = () => {
        setRetwoot(!retwoot);
    }

    const createRetwoot = () => {
        
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
                    <div className='tweet-main' id={twoot._id} key={twoot._id}>
                        <div className='author-section'>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img style={{height:"auto",width:"60px"}} src={`https://avatars.dicebear.com/api/big-smile/${twoot.authorSlug}.svg`} alt="" />
                        {twoot.author}
                        </div>
                        <div style={{display:"flex",alignItems:"center"}}>@{twoot.authorSlug}</div>
                        </div>
                        <div className='tweet'><p style={{marginBottom:"5px"}}>{twoot.content}</p></div>
                        <section className='posted-like-container'>
                        <div>Posted {countDays(twoot.dateAdded)}</div>
                        <div>
                        <button className="like"  onClick={handleLike}><i class={`fa-solid fa-heart ${like}`}></i></button>
                        <button className='save'  onClick={handleSave}><i class={`fa-solid fa-bookmark ${save}`}></i></button>
                        <button className='retweet'  onClick={handleRetwoot}><i class={`fa-solid fa-retweet ${retwoot}`}></i></button>

                        { 
                            retwoot === true && (
                                <div>
                                <input 
                                    type="text" 
                                    id="retwootText" 
                                    size="140"
                                    value={retwootText}
                                    onChange={(e) => setRetwootText(e.target.value)}
                                />
                                <button onClick={createRetwoot}>Submit</button>
                                <RetwootText retwootText={retwootText} />
                                </div>
                            )

                        }
                        </div>
                        </section>
                    </div>
                </StyledTwoot>
    );
}