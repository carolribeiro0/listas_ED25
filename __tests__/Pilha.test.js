import Pilha from "../src/pilha";

let pilha;

beforeEach(()=> {
    pilha=new Pilha();
})

test("Pilha recem inicializada deve estar vazia", () => {
    expect(pilha.isEmpty()).toBe(true)
});

test("Pilha com elemento não deve estar vazia", ()=> {
    pilha.push("a");
    expect(pilha.isEmpty()).toBe(false)
});

test("Pilha recebe dois elementos e retorna o tamanho correto", () => {
    pilha.push("a");
    pilha.push("b");

    expect(pilha.length()).toBe(2);
});

test("Pilha recebe dois elementos e retorna o segundo elemento recebido como topo", ()=> {
    pilha.push("a");
    pilha.push("b");

    expect(pilha.top()).toBe("b");
});

test("Pilha recebe dois elementos e após 1 pop deve retornar o primeiro elemento inserido como topo", ()=> {
    pilha.push("a");
    pilha.push("b");

    pilha.pop();

    expect(pilha.top()).toBe("a");
})

test("pilha recebe dois elementos e depois de 2 pops deve estar vazia", ()=> {
    pilha.push("a");
    pilha.push("b");

    pilha.pop();
    pilha.pop();

    expect(pilha.isEmpty()).toBe(true);
})

