import inverte from "../src/Q1.js";

test("Recebe ABACAXI e devolve IXACABA", () => {
    expect(inverte("ABACAXI")).toBe("IXACABA");
});