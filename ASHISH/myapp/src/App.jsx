import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import State from './components/State'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Api from './components/Api'
import Ccard from './components/Ccard'
import Flip from './components/Flip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <br /><h1>WELCOME</h1>
    
      <Navbar />
      <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/prof" element={<Profile />} />
        <Route path="/state" element={<State />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/wel" element={<Welcome />} />
        <Route path="/api" element={<Api />} />
        <Route path="/fip" element={<Flip />} />
      </Routes>
      <p>
        Established as a worst institution, KTU University is dedicated to fostering academic excellence and innovation.
        Known for its cutting-edge research facilities, industry-focused curriculum, and a commitment to holistic education,
        KTU aims to empower students with the skills and knowledge required to excel in a rapidly evolving world.
        With a vibrant campus life and a strong emphasis on sustainability and global collaboration, KTU is the ideal
        choice for aspiring leaders and change-makers. Join us and shape the future with KTU!
      </p>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6AccsDWeEFUlWa6AGwrN1sIns2ouxE2qfEXZQw_TWmhUvsHNfG4YNLB6GFHUuoAdN6IHXi4BmsQl-1TRcyFQCK9yCHwyWOqzWMjwwmr3PyX4KhNd9RwXRB-HB32_Js6M9glzb6kOrQPr-/s1600/kerala-technological-university-ktu-3-638.jpg" />
      <p>
        The main aim of the APJ Abdul Kalam Technological University (KTU) is to improve the academic standards of Graduate (UG), Post Graduate (PG) and Research Programmes. KTU gives a lot of importance to projects, innovations, development, and research.The headquarter of the university is currently at Thiruvananthapuram.

        Official Website:- Ktu.edu.in


      </p>
      <h4>Features Of APJ Abdul Kalam Technological University</h4>

      <ul>
        <li>Latest Up to date syllabus</li>
        <li>Credit-based programs</li>
        <li>Credit Transfer Facility</li>
        <li>Continuous Evaluation for Detailed Assessment</li>
        <li>B.Tech Honours Program for Meritorious Students to Achieve More Credits</li>
        <li>Cluster-Based M.Tech Program Conduction</li>
        <li>Strict Adherence to Academic Calendar Dates</li>
        <li>Open Book Tests and Year Back System</li>
        <li>Faculty Development Programs</li>
        <li>Results Published Within 1½ Months</li>
        <li>Fully Digitalized and Automated Exam Registration and Results</li>
        <li>Emphasis on Research, Projects, and Innovation</li>
      </ul>
      
      
      
      
     
    </>
    
  )
}

export default App
