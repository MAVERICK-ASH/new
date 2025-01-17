import { Button, TextField, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
    
  return (
    <div class="login">
      <h1 id="ooo">signup</h1>
      email id :<TextField id="ash" label="email id " variant="outlined" />
    <br /> pasword:<TextField id ="02" label="password" varient="outlined" />
   
      
      
      <br /><Button>LOGIN</Button>
    </div>
  )
}

export default Signup