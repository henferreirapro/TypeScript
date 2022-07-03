function somar(a: number, b: number) {
    return a+b;
}

somar(2, 5);
somar("2", "5"); //aqui recebemos um aviso que o argumento não é do tipo number.

function verificaString(palavra: string) {
    return palavra;
}

verificaString(2);