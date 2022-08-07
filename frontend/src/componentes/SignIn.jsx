import DefaultButton from "./DefaultButton";
import TextInput from "./TextInput";

const SignIn = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-text mb-8">Sign in</h1>
            <form className="flex flex-col gap-6">
                <TextInput title="Email" placeholder="Insira seu email" type="text" />
                <TextInput title="Senha" placeholder="Insira sua senha" type="password" />
                <DefaultButton type="submit" content="Entrar"/>
                <DefaultButton type="text" content="Registrar"/>
            </form>
        </div>
    )
}

export default SignIn;