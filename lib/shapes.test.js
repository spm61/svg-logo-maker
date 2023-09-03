//Start by requiring the shapes.
const { Shape, Triangle, Square, Circle } = require("./shapes.js");

//Triangle Test
describe("Triangle", () => {
    it("should return a triangle with a blue color.", () => {
      const shape = new Triangle("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });

  //Square Test
  describe("Square ", () => {
    it("should return a square with a green background.", () => {
      const shape = new Square("green");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="green" />'
      );
    });
  });

  //Circle Test
  describe("Circle", () => {
    it("should return a circle with a brown color code.", () => {
      const shape = new Circle("#A52A2A");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#A52A2A" />'
      );
    });
  });
