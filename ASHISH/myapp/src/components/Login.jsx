import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
      <div>
          <h1>please login to continue!!!</h1>
          username:<input type="text" name="hello" id="" />
          <br />
          password:<input type="" name="" id="" />
          <br />
     
      <Link to='/prof'>
        <Button variant='contained'>LOGIN</Button>
      </Link>
      <br />
      <img src="https://www.gecwyd.ac.in/wp-content/uploads/2017/07/Government-Engineering-CollegeWayanad-GECW.jpg" />
    </div>
  )
}

export default Login