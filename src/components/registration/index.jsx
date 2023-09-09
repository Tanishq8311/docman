import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import { Content, RegisterButton, Wrapper } from './style'

const Registration = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");

//   const navigate = useNavigate()
  

//   const [students, setStudents] = useState([])
//   const register = (e) => {
//     e.preventDefault()
//     axios.post(`http://localhost:5000/api/users/register`,{name,contact,role})
//     .then(({data}) => {
//       setStudents(data)
//       navigate('/')
//     })
//     .catch(console.log)
//     .finally(() =>{
//       setName('')
//     })
//   }

  return (
    <Wrapper>
    <div>
    <form action="" >
        <h1>DocSpot</h1>
        <Content>
        <h2>Create Account</h2>
        <p>Join us in taking control of your healthcare journey.</p>
        <input type="text" placeholder='Name *' pattern='[A-Z a-z]+' value={name} required onChange={e=>setName(e.target.value)}/>
        <input type="text" placeholder='Contact *' pattern='[0-9]{10}'value={contact} required  onChange={e=>setContact(e.target.value)}/>
        <input type="password" placeholder='Password *' required />
        <select id="role" required onChange={e=>setRole(e.target.value)} value={role}>
          <option value="">--Role--</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        <RegisterButton type="submit" value="Register" />
        </Content>

        <div>
    <header><Link to="/login">Login</Link></header>
    </div>

    </form>
    
    {/* {
      students.map(student => <div>
        {student.name} {student.contact}
      </div>)
    } */}
    </div>
    </Wrapper>
  )
}

export default Registration