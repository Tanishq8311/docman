import {Link} from "react-router-dom"
import React from 'react'
import Registration from '../registration'
import { useState } from "react";

 

const Login = ({addParticipantsProp}) => {
  const [contact,setcontact]=useState('')
  const [password, setpassword] = useState('')
  const addParticipant=_=>{
    addParticipantsProp({
      id:(new Date).getTime(),
      contact:contact,
      password:password
    })
  }
  return (
<>

<form>
        <h1>DocSpot</h1>
        <p>Your Health, Your Time, Your Doctor</p>
        <p>~Seamlessly Connected</p>
        <input type="text" placeholder='Contact' required pattern='[0-9]{10}' value={contact} onChange={
          (e)=>{
              setcontact(e.target.value)
          }
        } />
        <input type="password" id="password" placeholder='Password' required value={password} onChange={
          (e)=>{
              setpassword(e.target.value)
          }
        }/>
        <input type="submit" value="Login" />
</form>
    <div>
        New User | <Link to="/register">Create an new account</Link>
    </div>
</>

  )
}

export default Login