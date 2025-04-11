import GerenciadorCaminhoes from "../../src/lista2/Q3";

let f;

beforeEach(() => {
    f = new GerenciadorCaminhoes();
});

test("Inserção manual de caminhoneiros e verificação de ordem", () => {
    f.chegada("Carlos");
    expect(f.estaVazio()).toBe(false);
    expect(f.quantidade()).toBe(1);
    expect(f.listar()).toEqual(["Carlos"]);

    f.chegada("Lucas");
    f.chegada("Fernanda");
    expect(f.quantidade()).toBe(3);
    expect(f.listar()).toEqual(["Carlos", "Lucas", "Fernanda"]);
});

test("Saída manual de caminhoneiros", () => {
    f.chegada("Ana");
    f.chegada("Beto");
    f.chegada("Clara");

    const primeiro = f.saida();
    expect(primeiro).toBe("Ana");
    expect(f.quantidade()).toBe(2);
    expect(f.listar()).toEqual(["Beto", "Clara"]);

    const segundo = f.saida();
    expect(segundo).toBe("Beto");
    expect(f.quantidade()).toBe(1);
    expect(f.listar()).toEqual(["Clara"]);
});

test("Verificar limite máximo de caminhoneiros", () => {
    f.chegada("1");
    f.chegada("2");
    f.chegada("3");
    f.chegada("4");
    f.chegada("5");
    f.chegada("6");
    f.chegada("7");
    f.chegada("8");
    f.chegada("9");
    f.chegada("10");

    expect(f.estaCheio()).toBe(true);
    expect(() => f.chegada("11")).toThrow("Limite de caminhoneiros atingido");
});

test("Verificar erro ao retirar caminhoneiro de fila vazia", () => {
    expect(f.estaVazio()).toBe(true);
    expect(() => f.saida()).toThrow("Nenhum caminhoneiro aguardando");
});

test("Limpar a fila e verificar se esvaziou", () => {
    f.chegada("Carlos");
    f.chegada("Rafael");
    expect(f.quantidade()).toBe(2);
    f.limpar();
    expect(f.estaVazio()).toBe(true);
    expect(f.quantidade()).toBe(0);
});
