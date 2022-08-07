import DefaultButton from "./DefaultButton";
import TextInput from "./TextInput";

const SignIn = ({ setShowSignUp }) => {
    return (
        <section>
            <h1 className="text-4xl font-bold text-text mb-8">Sign in</h1>
            <div className="flex flex-col gap-6">
                <TextInput title="Email" placeholder="Insira seu email" type="text" />
                <TextInput title="Senha" placeholder="Insira sua senha" type="password" />
                <DefaultButton type="submit" content="Entrar"/>
                <DefaultButton type="text" content="Registrar" onClick={() => setShowSignUp(true)} />
            </div>
        </section>
    )
}

export default SignIn;