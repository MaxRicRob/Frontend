import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fruitImg from "../img/fruits.jpg";
import { Box } from "@mui/system";
import {Typography, Button, TextField, Link} from '@mui/material';

function Login(props) {

  let navigate = useNavigate();
  const baseURL = props.baseURL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // login functionality to be implemented once real backend is there - post request with checkLogin-Logic

  return (

    <body class="h-screen bg-stone-200 bg-cover">
      <div class="flex shadow-lg absolute inset-40 bg-green-100 rounded-xl overflow-hidden min-w-fit">
        <div class="shrink-0">
          <img src={fruitImg} alt="fruits"/>
        </div>
        <div class="grid auto-rows-max ml-20 mt-40">
        <Typography variant="h5" mb={3} fontWeight="bold">
          Welcome to Fruitilicious!
        </Typography>
           <Box onSubmit={handleSubmit} noValidate>
             <TextField
              margin="normal"
              required
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"
            /><br/>
            <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="success"
            /><br/>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
            >
              Sign In
            </Button>
            <br/>
            <Link href="#" variant="body1" color="#357a38">
                  {"Don't have an account? Sign Up"}
            </Link>
            </Box>
        </div>
      </div>
    </body>
  );
}

export default Login;
