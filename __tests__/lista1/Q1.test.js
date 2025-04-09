import inverter from "../../src/lista1/Q1.js";

test("Recebe ABACAXI e devolve IXACABA", () => {
    expect(inverter("ABACAXI")).toBe("IXACABA");
});