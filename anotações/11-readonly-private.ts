interface IPessoa {
    nome: string;
    idade: number;
    lugarFavorito?: string;
}

//valores recebidos serão somente de leitura
type leituraIUsuario = {
    readonly [valor in keyof IPessoa] : IPessoa[valor];
    //readonly [valor in keyof IPessoa]-? : IPessoa[valor];
}   // -? Serve para remover os valores opcionais


class MeuUsuario implements leituraIUsuario {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa = new MeuUsuario("Henrique", 27);