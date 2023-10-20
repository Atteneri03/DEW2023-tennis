const [suma,resta,producto] = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test("sumar 10 + 4 es igual a 14", () =>{
    expect(suma(10,4)).toBe(14);
});

 test("restar 5 - 2 es igual a 3", () =>{
     expect(resta(5,2)).toBe(3);
});

test ("producto de 4 * 0 es igual a 0", () =>{
    expect(producto(4,0)).toBe(0);
});
