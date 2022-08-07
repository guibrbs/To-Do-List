import { auth } from "../firebase-config";

const Homepage = () => {
    return (
        <div>
            <button onClick={() => auth.signOut()}>
                sair
            </button>
        </div>
    );
}

export default Homepage;