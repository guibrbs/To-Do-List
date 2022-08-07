import DefaultButton from "./DefaultButton";
import TextInput from "./TextInput";

const SignUp = ({setShowSignUp}) => {
    return (
        <section>
            <h1 className="text-4xl font-bold text-text mb-8">Sign up</h1>
            <form className="flex flex-col gap-6">
                <TextInput title="Nome" placeholder="Insira seu nome" type="text" />
                <TextInput title="Email" placeholder="Insira seu email" type="text" />
                <TextInput title="Senha" placeholder="Insira sua senha" type="password" />
                <DefaultButton type="submit" content="Registrar"/>
                <DefaultButton type="text" content="Entrar" setShowSignUp={setShowSignUp}/>
            </form>
        </section>
    )
}

export default SignUp;