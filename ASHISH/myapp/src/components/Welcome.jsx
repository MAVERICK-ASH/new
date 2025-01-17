
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
const Welcome = () => {
    var [result, set] = useState()
    var [a,b]= useState()

    var add = () => {
        set("computer science department")
        b("Computer science is the study of computers and computational systems. It involves understanding both the theoretical and practical aspects of computing, including the development of software, hardware, and algorithms that drive technology.")
        
    }
    var sub = () => {
        set("CIVIL department") 
        b("Civil engineering is the branch of engineering that focuses on the design, construction, and maintenance of infrastructure projects such as buildings, roads, bridges, dams, airports, and water supply systems. Civil engineers work on projects that improve the built environment and contribute to the safety, well-being, and convenience of society.")
    }
    var sb = () => {
        set("ELECTRICAL department")
        b("Electrical engineering is a branch of engineering that deals with the study and application of electricity, electronics, and electromagnetism. It involves designing, developing, and maintaining electrical systems and devices that power and control machinery, communication systems, and much more. Electrical engineers work on a wide range of technologies, from power generation and distribution to microelectronics and telecommunication systems.")
    }

    useEffect(() => { add()},[])
   
    



  return (
      <div>
          

     
          <Button variant='contained' color='secondary' onClick={add}>COMPUTER SCIENCE</Button>
          <Button variant='contained'  color='success' onClick={sub}>CIVIL</Button>
          <Button variant='contained' color='error' onClick={sb}>ELECTRICAL</Button>
          <h1>welcome to {result}</h1>
          <h2>{a}</h2>
      
    </div>


  )
  }

export default Welcome