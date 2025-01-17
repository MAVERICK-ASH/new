import React from 'react'
import { AppBar, Avatar, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'


const Navbar = () => {
    var profilee = () => {
        const Profile = () => {
            const student = {
                name: 'Ashish',
                age: 20,
                major: 'Computer Science',
                university: 'KTU',
                email: 'asishm2004@gmail.com',
                profilePicture: 'https://resizing.flixster.com/-1N2PWYxUFGd62SHCoasGYtInLo=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170054_v9_bb.jpg',
            };

            return (
                <div style={styles.container}>
                    <img
                        src={student.profilePicture}
                        alt={`${student.name}'s profile`}
                        style={styles.profileImage}
                    />
                    <h1 style={styles.name}>{student.name}</h1>
                    <p><strong>Age:</strong> {student.age}</p>
                    <p><strong>Major:</strong> {student.major}</p>
                    <p><strong>University:</strong> {student.university}</p>
                    <p><strong>Email:</strong> {student.email}</p>
                </div>
            );
        };

        const styles = {
            container: {
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                maxWidth: '400px',
                margin: '16px auto',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#f9f9f9',
                textAlign: 'center',
            },
            profileImage: {
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                objectFit: 'cover', // Ensures the image fits nicely
                marginBottom: '16px',
            },
            name: {
                color: '#333',
                marginBottom: '8px',
            },
        };
    }
  return (
          <div>
          <AppBar length="100px" width="50px">
                  <Toolbar>
                  <h1>KERALA TECHNICAL UNIVERSITY </h1>
                  <img src="https://www.gecwyd.ac.in/wp-content/uploads/2017/07/Government-Engineering-CollegeWayanad-GECW.jpg" length="100px" width="50px" />
                  <Link to ='/log'>
                  <Button variant='contained'>login</Button>
                  </Link>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  {/* <Link to='/sign'>
                      <Button variant='contained'>sign</Button>
                  </Link> */}
                  <Link to='/state'>
                      <Button variant='contained'>State</Button>
                  </Link>
                  {/* <Link to='/count'>
                      <Button variant='contained'>Counter</Button>
                  </Link> */}
                  <Link to='/wel'>
                      <Button variant='contained'>courses</Button>
                  </Link>
                  <Link to='/api'>
                      <Button variant='contained'>API</Button>
                  </Link>
                  <Link to='/fip'>
                      <Button variant='contained'>CARD</Button>
                  </Link>

                  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
                  <Avatar id="pic" alt="Remy Sharp" src="https://img.indiaforums.com/person/480x360/0/0002-shah-rukh-khan.jpg?c=4sR1C4" onClick={profilee } />
                  
              </Toolbar>
          </AppBar>

          &nbsp; &nbsp;
          </div>
          )
}




export default Navbar