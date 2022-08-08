import React, { useState } from 'react';
import axios from "axios";
import { StyledForm } from '../styles/Form.styles';

export default function Twoot(props) {
    const {focus}=props
    const { twoot, setTwoot } = props;
    const { username, name } = props;

    const [twootText, setTwootText] = useState('');
    const [countChar, setCount] = useState('');

    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    const handleInputChange = (e) => {
        setTwootText(e.target.value);
        setCount(e.target.value.length);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted', twootText);
        const newTwoot = {
          _id: twoot.length + 1,
          author: name,
          content: twootText,
          tag: "other",
          authorSlug: username,
          length: countChar,
          dateAdded: date,
          dateModified: date,
        };
        axios
          .post('/twoot', { newTwoot })
          .then((res) => {
            console.log('res', res);
            setTwoot([...twoot, { ...res.data }]);
            window.location.reload(false);
          })
          .catch((err) => console.log('err', err));
    };
    
    return (
        <section>
            <div>
            <StyledForm onSubmit={handleSubmit}>
                <h2 className='form-title'>Compose Twoot</h2>
                <div className='twoot-container'>
                    <input ref={focus}  maxLength={140} autocomplete="off" placeholder='What are you humming about?' className='twoot-input' type="text" name="description" value={twootText} onChange={handleInputChange} />
                    <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}> 
                    <button className='twoot-btn' disabled={!twootText}>Twoot</button>
                     <div style={{marginRight:"100px"}}><p>{countChar}</p></div>
                    </div>
                </div>
            </StyledForm>
            </div>
        </section>
    );
}
