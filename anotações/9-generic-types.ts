//Generic Types

/*Usamos o <> chamado de diamante com um T dentro para
 quando não sabemos o valor que sera recebido.

 Assim o TypeScript identifica qual typeof será utilizado caso todos
 os dados sejam do mesmo typeof, se não retornará um erro.
*/
function adicionaApendiceaLista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}



adicionaApendiceaLista([1, 2, 3,], 1);



adicionaApendiceaLista(["a", "b", "c", ""], "e");