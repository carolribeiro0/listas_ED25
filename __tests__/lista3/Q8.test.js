import { Lista } from "../../src/lista3/Q8";

test("Ordenação por nome", () => {
    const lista = new Lista();
    lista.add("Ana", 23);
    lista.add("Carlos", 34);
    lista.add("Beatriz", 19);
    lista.add("Daniel", 27);

    lista.ordenarPorNome();
    expect(lista.toString()).toBe("Nome: Ana, Idade: 23\nNome: Beatriz, Idade: 19\nNome: Carlos, Idade: 34\nNome: Daniel, Idade: 27");
});

test("Ordenação por idade", () => {
    const lista = new Lista();
    lista.add("Ana", 23);
    lista.add("Carlos", 34);
    lista.add("Beatriz", 19);
    lista.add("Daniel", 27);

    lista.ordenarPorIdade();
    expect(lista.toString()).toBe("Nome: Beatriz, Idade: 19\nNome: Ana, Idade: 23\nNome: Daniel, Idade: 27\nNome: Carlos, Idade: 34");
});
