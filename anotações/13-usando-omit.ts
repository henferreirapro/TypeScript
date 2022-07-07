interface IPessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

//Omit serve para omitir uma variavel dentro de uma interface.
interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'> {}

const brasileiro: IBrasileiro = {
    nome: "Henrique",
    idade: 27,

}