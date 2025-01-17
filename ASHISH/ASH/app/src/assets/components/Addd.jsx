import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addd = () => {
  var [input, setinput] = useState({ Name: "", Age: "", Department: "", Salary: "" })
  var navigate = useNavigate()
  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]:e.target.value})
    console.log(input)
  }
  const addHandler = () => {
    axions.post("http://localhost:3007/add", input)
      .then((res) => {
        alert(res.data.message);
        navigate("/view")
    })
  
  }
    return (
     
        <div>
            <h1 >ADD</h1>
         <br /> <TextField id="outlined-basic" label="Name" Variant="outlined" />
         <br /> <TextField id="outlined-basic" label="Age" Variant="outlined" />
          <br /><TextField id="outlined-basic" label="Department" Variant="outlined" />
          <br /><TextField id="outlined-basic" label="Salary" Variant="outlined" />
          <br /><Button color="secondary">Submit</Button>
          
    </div>
  )
    
}

export default Addd