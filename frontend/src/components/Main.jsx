import React from 'react';
import Twoot from './Twoot';
import TwootList from './TwootList';
import AvatarSection from './AvatarSection';
import Account from './Account';
export default function Main() {


    return (
        <>
            <Account/>
            <Twoot />
            <TwootList />
        </>
    );
}