import { useState } from "react";
import { signIn } from "../firebase-config";
import DefaultButton from "./DefaultButton";
import TextInput from "./TextInput";

const SignIn = ({ setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signIn(email, password);
  }

  return (
    <section>
      <h1 className="text-4xl font-bold text-text mb-8">Sign in</h1>
      <div className="flex flex-col gap-6">
        <TextInput
          title="Email"
          placeholder="Insira seu email"
          type="text"
          setValue={setEmail}
        />
        <TextInput
          title="Senha"
          placeholder="Insira sua senha"
          type="password"
          setValue={setPassword}
        />
        <DefaultButton type="submit" content="Entrar" onClick={handleSignIn}/>
        <DefaultButton
          type="text"
          content="Registrar"
          onClick={() => setShowSignUp(true)}
        />
      </div>
    </section>
  );
};

export default SignIn;
