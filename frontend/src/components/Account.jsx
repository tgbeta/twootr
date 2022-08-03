import React,{useState,useEffect, useRef} from 'react'
import axios from 'axios'
export default function Account(props) {
  const [name1,setName1]=useState('')
  const [name2,setName2]=useState('')
  return (
    <div>
      <h2>Create your Avatar</h2>
      <input value={name1} type="text" />
      <input value={name2} type="text" />
      <button onChange={()=>setName()}>New Account</button>
    </div>
  )
}
