const Player = require("./Player");

test("Crear jugador", ()=>{
    const jugador1 = new Player("Pepe");
    expect(jugador1.name).toBe("Pepe");
    expect(jugador1).toEqual({name: "Pepe", ranking : 0});
   
});

test("Crear jugador con ranking", () =>{
    const jugador1 = new Player("Pepe", 7);
    expect(jugador1.ranking).toBe(7);
    jugador1.ranking = 9;
    expect(jugador1.ranking).toBe(9);
    expect(jugador1).toEqual({name : "Pepe" , ranking: 9});

});

test("Crear jugador male", ()=>{
    const jugador1 = new Player("Pepe",5,"male");
    expect(jugador1.name).toBe("Pepe");
    expect(jugador1.gender).toBe("male");
});

test("Crear jugador female", ()=>{
    const jugador1 = new Player("Ana",6,"female");
    expect(jugador1.name).toBe("Ana");
    expect(jugador1.gender).toBe("female");
});

test("Crear jugador female sin indicar el genero", ()=>{
    const jugador1 = new Player("Ana");
    expect(jugador1.name).toBe("Ana");
    expect(jugador1.gender).toBe("female");
});

test("Crear jugador female por poner un genero extraño", ()=>{
    const jugador1 = new Player("Ana",3,"hfue");
    expect(jugador1.name).toBe("Ana");
    expect(jugador1.gender).toBe("female");
});

test("Crear jugador con fecha de nacimiento valida", ()=>{
    const jugador1 = new Player("Ana", 2, "female", "13/04/1999");
    expect(jugador1.dateOfBirth).toBe("13/04/1999");
});

test("Crear jugador con fecha de nacimiento no valida", ()=>{
    const jugador1 = new Player("Ana", 2, "female", "dhss");
    expect(jugador1.dateOfBirth).not.toBe("dhss");
    expect(jugador1.dateOfBirth).toBeUndefined();
    expect(jugador1.age).toBeUndefined();

});

test("Crear jugador con fecha de nacimiento valida", ()=>{
    const jugador1 = new Player("Ana", 2, "female", "27/10/2000");
    expect(jugador1.age).toBe(22);
});

test("Crear jugador benjamin", ()=>{
    const jugador1 = new Player("Pepe", 1, "male", "12/12/2016");
    expect(jugador1.category).toBe("Benjamin");
});

test("Crear jugador cadet", ()=>{
    const jugador1 = new Player("Pepe", 1, "male", "1/1/2010");
    expect(jugador1.category).toBe("Cadet");
});

test("Crear jugador junior", ()=>{
    const jugador1 = new Player("Pepe", 1, "male", "1/1/2004");
    expect(jugador1.category).toBe("Junior");
});

test("Crear jugador senior", ()=>{
    const jugador1 = new Player("Pepe", 1, "male", "1/1/2000");
    expect(jugador1.category).toBe("Senior");
});
