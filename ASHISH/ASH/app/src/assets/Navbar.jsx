import React from 'react'

import { AppBar , Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Link to='/add'>
                      <Button variant='contained'>ADD</Button>
                  </Link>
                  <Link to='/view'>
                      <Button variant='contained'>VIEW</Button>
                  </Link>
              </Toolbar>

          </AppBar>  


    </div>
  )
}

export default Navbar