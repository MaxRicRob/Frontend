import fruitImg from "../../img/fruits.jpg";

function Login() {
  return (
    <body class="h-screen bg-stone-300 font-sans">
      <div class="flex shadow-md absolute inset-40 bg-green-300 rounded-lg overflow-hidden">
        <div class="shrink-0">
          <img class="" src={fruitImg} alt="fruits"/>
        </div>
        
        <div class="grid auto-rows-max ml-20 mt-40">
        <p class="mb-10 font-bold text-lg">Welcome to Fruitilicious!</p>
          <div>Username: 
            <input class="border-2 hover:border-green-500 rounded-md ml-2 mb-5 h-10"></input>
            </div>          
          <div>Password: 
            <input class="border-2 hover:border-green-500 rounded-md ml-4 mb-5 h-10"></input>
            </div>
          <div>
            <button class="cursor-pointer rounded-full w-20 h-10 bg-green-500">Login</button>
            </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
