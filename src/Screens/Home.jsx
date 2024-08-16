import React, { useEffect, useState } from 'react'
import Tables from '../Components/Tables'
import axios from 'axios';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [userData,setUserData]=useState([]);
    const navigate =useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then((response)=> setUserData(response.data))
        .catch((error)=>console.log(error))
    }, [])
    
  return (
    <div>
        <h1>
            Table
        </h1>
        <Box>
            <Button onClick={()=> navigate('/newuser')} 
                sx={{float:"right" ,marginBottom: 3 }} variant='contained'>
            Create New User
            </Button>
        </Box>
      <Tables data={userData}/>
    </div>
  )
}

export default Home
