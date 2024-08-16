import { Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [createData, setCreateData] = useState({
        name: "",
        email: "",
        username: "",
        phone: ""
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/users", createData)
            .then((response) => {
                alert('New User Added Successfully');
                navigate('/'); 
            })
            .catch((error) => console.log(error));
    }

    return (
        <form onSubmit={handleSubmit}>
            <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
                <Typography variant="h4" sx={{ marginBottom: 5, textAlign: "center" }}>
                    Create User
                </Typography>
                <TextField
                    onChange={(e) =>
                        setCreateData({ ...createData, name: e.target.value })
                    }
                    sx={{ mb: 3 }}
                    fullWidth
                    label="Full Name"
                    required
                />
                <TextField
                    onChange={(e) =>
                        setCreateData({ ...createData, username: e.target.value })
                    }
                    sx={{ mb: 3 }}
                    fullWidth
                    label="Username"
                    required
                />
                <TextField
                    onChange={(e) =>
                        setCreateData({ ...createData, email: e.target.value })
                    }
                    sx={{ mb: 3 }}
                    fullWidth
                    label="Email"
                    required
                />
                <TextField
                    onChange={(e) =>
                        setCreateData({ ...createData, phone: e.target.value })
                    }
                    sx={{ mb: 3 }}
                    fullWidth
                    label="Phone"
                    required
                />

                <Button variant="contained" type="submit">
                    Create
                </Button>
            </Paper>
        </form>
    );
};

export default User;
