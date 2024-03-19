import Game from "./bowlingKata.js";

describe("bowlingKata", () => {
    let g; 

  beforeEach(() => {
    g = new Game();
  });

  it("Debe crearse la clase juego pero vacía ", () => {
    const myGame = new Game();
    expect(myGame).toBeDefined();
  });

 

  function rollMany(n,pins){
    for (let i=0;i<n;i++)
    {
      g.roll(pins);
    }

  }

  it("Debe tirar 20 veces el jugador derribando cero pinos en cada tiro y dando score 0 ", () => {
    let n=20
    let pins=0
    rollMany(20,0)
    expect(g.score()).toEqual(0);
  });
    
  it("Debe tirar 20 veces el jugador derribando cero pinos en cada tiro y dando score de 20 ", () => {
    rollMany(20,1)
    expect(g.score()).toEqual(20);
  });

  
  it("En el primer tiro se saca 5, en el segundo tambien haciendo un spare, en el tercero se saca 3 y en el resto de los 20 tiros cero, haciendo que se deba obtener una puntuacion de 16", () => {
  rollSpare();
  g.roll(3)
  rollMany(17,0)
  expect(g.score()).toEqual(16);
  });

  function rollStrike()
  {
    g.roll(10)
  }


  function rollSpare(){
    g.roll(5)
    g.roll(5)
  }

  it("Probando un strike", () => {
    rollStrike()
    g.roll(3)
    g.roll(4)
    rollMany(16,0)
    expect(g.score()).toEqual(24);
  });

});