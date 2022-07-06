interface IUsuario {
    id: string;
    email: string;
    cargo?: "Gerente" | "Coordenador" | "Supervisor";
}

function redirecionar(usuario: IUsuario) {
    if(usuario.cargo) {
        return `Bem vindo ${pessoa1.id} a área de ${pessoa1.cargo}.`;
    }

    return `Bem vindo a área comum!`;
}

const pessoa1: IUsuario = {
    id: "Henrique",
    email: "henrique@gmail.com",
    cargo: "Coordenador",
}

const pessoa2: IUsuario ={
    id: "Leveli",
    email: "leveli@gmail.com",

}

console.log(redirecionar(pessoa1));
console.log(redirecionar(pessoa2));