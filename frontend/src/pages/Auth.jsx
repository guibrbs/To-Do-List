import { useState } from "react";
import auth_illustration from "../assets/auth_illustration.svg";
import SignIn from "../componentes/SignIn";
import SignUp from "../componentes/SignUp";
const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <section className="w-screen h-screen p-5 flex justify-between">
      <div className="w-3/6 h-full bg-secondary rounded-xl bg-pattern-background flex flex-col 
      justify-center items-center">
        <h1 className="font-bold text-text 2xl:text-5xl 2xl:w-96 text-4xl w-72 text-center mb-8">Crie suas listas agora mesmo</h1>
        <img src={auth_illustration} alt="To-do Illustration" className="2xl:w-[550px] w-96" />
      </div>
      <div className="w-3/6 flex flex-col items-center justify-center">
        {showSignUp ? <SignUp setShowSignUp={setShowSignUp} /> : <SignIn setShowSignUp={setShowSignUp} />}
      </div>
    </section>
  );
};

export default Auth;
