import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fruitImg from "../../img/fruits.jpg";

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

  // login functionality to be implemented once real backend is there - post request with checkLogin-Logic

  return (
    <body class="h-screen bg-stone-300 font-sans">
      <div class="flex shadow-md absolute inset-40 bg-green-300 rounded-lg overflow-hidden">
        <div class="shrink-0">
          <img src={fruitImg} alt="fruits"/>
        </div>
        <div class="grid auto-rows-max ml-20 mt-40">
        <p class="mb-10 font-bold text-lg">Welcome to Fruitilicious!</p>
          <div>E-Mail: 
            <input 
            class="border-2 hover:border-green-500 focus:outline-none rounded-md ml-9 mb-5 h-10"
            type="email"
            value={email}
            onChange={emailOnChange}></input>
            </div>          
          <div>Password: 
            <input 
            class="border-2 hover:border-green-500 focus:outline-none rounded-md ml-3.5 mb-5 h-10"
            type="password"
            value={password}
            onChange={passwordOnChange}></input>
            </div>
          <div>
            <button class="cursor-pointer rounded-full w-20 h-10 bg-green-500 hover:bg-green-400">Login</button>
            </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
