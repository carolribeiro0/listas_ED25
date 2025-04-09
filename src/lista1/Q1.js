import Pilha from "../pilha.js";

export default function inverter(palavra){
    let pilha = new Pilha();

    for(let i=0; i<palavra.length; i++){
        pilha.push(palavra[i]);
    }

    let palavraInvertida = "";

    while(!pilha.isEmpty()){
        palavraInvertida+=pilha.pop();
    }

    return palavraInvertida;
}