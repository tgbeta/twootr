import React,{useState} from 'react';
import Twoot from './Twoot';
import TwootList from './TwootList';
import Account from './Account';

export default function Main() {

    const [twoot, setTwoot] = useState([]);
    const [account,setAccount]=useState([])
    return (
        <>
            <Account account={account} setAccount={setAccount}/>
            <Twoot twoot={twoot} setTwoots={setTwoot}/>
            <TwootList />
        </>
    );
}