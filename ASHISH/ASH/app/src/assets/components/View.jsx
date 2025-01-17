import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () =>{
    const [data, setData] = useState([])
    var navigate=useNavigate()
    axios.get("http://localhost:3007/view")
        .then((res) => {
            setData(res.data);
        }
        )

const delvalue = (id) => {
    console.log(id)
    axios.delete("http://localhost:3007/remove/" + id)
        .then((res) => {
            alert(res.data.message)
            window.location.reload()
        }
)}
    

    const updatevalue = (val) => {
        navigate("/add",{ state:{val} })
    }
  return (
      <div>
          <h1 >VIEW </h1>
          <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                     <TableCell >NAME</TableCell>
                      <TableCell>AGE</TableCell>
                      <TableCell  >DEPT</TableCell>
                          <TableCell>SALARY</TableCell>
                          <TableCell></TableCell>

                      </TableRow>
                        </TableHead>
                  <TableBody>
                      
                {data.map((val) => {
                    return (
                    <TableRow>
                            <TableCell >{val.Name}</TableCell>
                            <TableCell >{val.Age}</TableCell>
                            <TableCell >{val.Department}</TableCell>
                            <TableCell >{val.Salary}</TableCell>
                            <TableCell >
                                <Button varient='contained' color="error" onClick={() => { delvalue(val._id) }}>DELETE</Button>&nbsp;
                                <Button varient='contained' color="success" onClick={() => { updatevalue(val) }}>UPDATE</Button>
                            </TableCell>
                              </TableRow>
                          )
                      })}
                </TableBody>
                  
            
          </Table>
        </TableContainer>
    </div>
  )
}

export default View