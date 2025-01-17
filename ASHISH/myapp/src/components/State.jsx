import { Button, TextField } from '@mui/material'
import React,{ useEffect, useState} from 'react'

const State = () => {
  var [name, setname] = useState("Khan")
  var [b,bname] = useState()
  var handleInput = (e) => {
      console.log(e.target.value)
    setname(e.target.value)
  }
  
  var display = () => {
    bname(name)
    
  }
  useEffect(() => {name },[])
  
  
  return (
      
      <div>
        
      <h3>welcome {b}</h3>
      
      <TextField variant='outlined' onChange={handleInput} /><br />
      <Button variant='contained' onClick={display}>submit</Button>
      
    </div>
  )
}

export default State