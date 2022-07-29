import React, { useState, useEffect } from 'react';
import Account from './Account';
import Twoot from './Twoot';
import TwootList from './TwootList';
import axios from 'axios';

export default function Main() {


    return (
        <main>
            <Account />
            <Twoot />
            <TwootList />
        </main>
    );
}