import React,{useState,useEffect} from 'react';
import Twoot from './Twoot';
import TwootList from './TwootList';
import axios from 'axios';
import Account from './Account';


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
            <Account/>
            <Twoot twoot={twoot} setTwoot={setTwoot}/>
            <TwootList />
        </>
    );
}