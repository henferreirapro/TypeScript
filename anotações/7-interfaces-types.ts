/* Interfaces são usadas para definir contratos de estruturas de dados. */

/* Types são usados para juntar diferentes interfaces ou definir que uma 
variavel pode ser uma ou outra interface. */

interface IAnimal {
    nome: string,
    idade: number,
    tipo: "Terrestre" | "Aquatico",
}

interface ICapacidades extends IAnimal {
    atributoPredominante: "Nadador" | "Corredor" |"Voador",
    formaAtaque: "Veneno" | "Mordida" | "Garras",
}

interface IFraquezas {
    veneno: boolean,
    mordida: boolean,
    QTDGarras: number,
}

type IPropriedades = ICapacidades | IFraquezas;

const animal: IPropriedades = {
    nome: "Leao",
    idade: 8,
    tipo: "Terrestre",
    atributoPredominante: "Corredor",
    formaAtaque: "Garras",
    mordida: true,
    QTDGarras: 4,
}