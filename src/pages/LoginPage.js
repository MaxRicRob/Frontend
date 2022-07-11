import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/system"
import {Typography, Button, TextField, Link} from '@mui/material'
import fruitImg from "../img/fruits.jpg";

function Login(props) {

  let navigate = useNavigate()
  const baseURL = props.baseURL

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailOnChange = (event) => {
    setEmail(event.target.value)
  };
  const passwordOnChange = (event) => {
    setPassword(event.target.value)
  };

  const loginHandler = () => {
    const enteredMail = email;
    const enteredPassword = password;
    const payload = {
      email: enteredMail,
      password: enteredPassword,
    }
    const requestOptions = {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
    fetch(`${baseURL}/login`, requestOptions)
    .then((response) => response.json())
      .then((res) => {
        if (res.status === "200") {
          props.setIsLoggedIn(true);
          navigate('/');
          return true;
        } else {
          props.setIsLoggedIn(false);
          return false;
        }
      })
  }

  return (
  <body class="h-screen bg-stone-200 bg-cover">
      <div class="flex shadow-lg absolute md:inset-20 lg:inset-40 bg-green-100 rounded-xl overflow-hidden min-w-fit">
        <div class="shrink-0">
          <img src={fruitImg} alt="fruits"/>
        </div>
        <div class="grid auto-rows-max ml-20 mt-20">
        <Typography variant="h5" mb={3} fontWeight="bold">
          Welcome to Fruitilicious!
        </Typography>
           <Box noValidate>
             <TextField
              margin="normal"
              required
              id="email"
              label="Email"
              name="email"
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
              color="success"
            /><br/>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
              onClick={loginHandler}
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

export default Login
