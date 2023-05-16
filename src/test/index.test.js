const app = require("../../app");
const session = require("supertest");

const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET rickandmorty/character/{id}", () => {
    it("Responde con status: 200", () =>
      agent.get("/rickandmorty/character/1").expect(200));
    it(`Responde un objeto con las propiedades: id, name, species, gender e image`, () =>
      agent.get("/rickandmorty/character/1").then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: "Rick Sanchez",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        });
      }));

    it("Si hay un error responde con status: 500", () => {
      agent.get("/rickandmorty/character/IDqueNoExiste").expect(500);
    });
  });
});

describe("Test de RUTAS", () => {
  describe("GET rickandmorty/detail/{detailId}", () => {
    it("Responde con status: 200", () =>
      agent.get("/rickandmorty/detail/1").expect(200));
    it(`Responde un objeto con las propiedades: id, name, species, gender, image, status,origin`, () =>
      agent.get("/rickandmorty/detail/1").then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1",
          },
        });
      }));

    it("Si hay un error responde con status: 500", () => {
      agent.get("/rickandmorty/character/IDqueNoExiste").expect(500);
    });
  });
});
