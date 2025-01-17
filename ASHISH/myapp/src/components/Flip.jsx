import axios from 'axios'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  { useState } from 'react'
import { Grid } from '@mui/material';

const Flip = () => {
    var[data,setData]=useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((dat) => {
            console.log(dat.data)
            setData(dat.data)
        })
  return (
      <div>
          <Grid container spacing={2}>
              {
                  data.map((val)=> {
                  return (
              <Grid item xs={9} sm={5} md={ 4}>
                  <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                          sx={{ height: 140 }}
                          image={val.image}
                          title={val.title}
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                              {val.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              <h3>{val.category}</h3>
                              {val.description}
                              <h2>RS:{ val.price}</h2>
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                      </CardActions>
                          </Card> 
                      </Grid>        
              )})}
              </Grid>
                  


    </div>
  )
}

export default Flip