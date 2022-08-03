import React, { useState, useEffect } from 'react';
import Account from './Account';
import Twoot from './Twoot';
import TwootList from './TwootList';
import axios from 'axios';

export default function Main() {

    const [twoot, setTwoot] = useState([]);

    useEffect(() => {
        axios.get('/twoots').then((res) => {
          console.log('get twoots data', res.data);
          setTwoot(res.data);
        });
    }, []);
    

    return (
        <>
            <Twoot twoot={twoot} setTwoot={setTwoot}/>
            <TwootList />
        </>
    );
}