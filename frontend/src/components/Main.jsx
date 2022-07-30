import React, { useState, useEffect } from 'react';
import Account from './Account';
import Twoot from './Twoot';
import TwootList from './TwootList';

export default function Main() {

    const [twoot, setTwoot] = useState([]);
    

    return (
        <>
            <Twoot twoot={twoot} setTwoots={setTwoot}/>
            <TwootList />
        </>
    );
}