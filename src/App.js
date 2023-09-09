import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Login from './components/login';
import Registration from "./components/registration";
import { useState } from "react";



function App() {
  const [participants, setparticipants] = useState([])
  const addParticipants=participant=>{
    setparticipants([...participants,participant])
    alert("Succesfullly logged in",participant.contact)
  }
  return (
    <Router>
      <Routes>
      <Route path="/register" exact element={<Registration />} />
      <Route path="/login" exact element={<Login addParticipantProp={addParticipants} />}/>
      </Routes>
    </Router>

  );
}

export default App;
