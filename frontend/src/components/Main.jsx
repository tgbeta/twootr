import React,{useState,useEffect} from 'react';
import Twoot from './Twoot';
import TwootList from './TwootList';
import axios from 'axios';
import Account from './Account';

export default function Main() {

    const [twoot, setTwoot] = useState([]);
    const [username,setUsername]=useState('@NicolasM');
    const [name,setName]=useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/twoots').then((res) => {
          console.log('get twoots data', res.data);
          setTwoot(res.data);
        }).catch(err=>console.log(err))
    }, []);
    

    return (
        <>
            <Account username={username} name={name} setName={setName} setUsername={setUsername}/>
            <Twoot twoot={twoot} setTwoot={setTwoot} username={username} name={name} />
            <TwootList twoot={twoot} />
        </>
    );
}