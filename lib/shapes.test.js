//Start by requiring the shapes.
const { Triangle, Square, Circle } = require("./shapes.js");

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
        '<rect x="73" y="40" width="160" height="160" fill="purple" />'
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

  //Shape Test (it's supposed to throw an error here.)'
  describe('Shape', () => {
    it('should throw an error when we try to render an abstract shape.', () => {
      const shape = new Shape("blue");
      const err = new Error(
        "Abstract shapes cannot be rendered, use a more concrete shape instead."
      );

      expect(shape.render()).toThrowError(err);
    });
  });
