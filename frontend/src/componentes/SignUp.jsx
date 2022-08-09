import { useState } from "react";
import { signUp } from "../firebase-config";
import DefaultButton from "./DefaultButton";
import TextInput from "./TextInput";

const SignUp = ({ setShowSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUp(name, email, password);
  };

  return (
    <section>
      <h1 className="text-4xl font-bold text-text mb-8">Sign up</h1>
      <div className="flex flex-col gap-6">
        <TextInput
          title="Nome"
          placeholder="Insira seu nome"
          type="text"
          setValue={setName}
        />
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
        <DefaultButton
          type="submit"
          content="Registrar"
          onClick={handleSignUp}
        />
        <DefaultButton
          type="text"
          content="Entrar"
          onClick={() => setShowSignUp(false)}
        />
      </div>
    </section>
  );
};

export default SignUp;
