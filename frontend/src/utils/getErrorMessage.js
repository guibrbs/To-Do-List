export function getErrorMessage(error){
    if (error === "auth/user-not-found") return("Email não encontrado!");
    if (error === "auth/wrong-password") return("Senha incorreta!");
}