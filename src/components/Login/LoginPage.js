import fruitImg from "../../img/fruits.jpg";

function Login() {
  return (
    <body class="h-screen bg-stone-300 font-sans">
      <div class="flex shadow-md absolute inset-40 bg-green-300 rounded-lg overflow-hidden">
        <div class="shrink-0">
          <img src={fruitImg} alt="fruits"/>
        </div>
        <div class="grid auto-rows-max ml-20 mt-40">
        <p class="mb-10 font-bold text-lg">Welcome to Fruitilicious!</p>
          <div>Username: 
            <input class="border-2 hover:border-green-500 focus:outline-none rounded-md ml-2 mb-5 h-10"></input>
            </div>          
          <div>Password: 
            <input class="border-2 hover:border-green-500 focus:outline-none rounded-md ml-3.5 mb-5 h-10"></input>
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
