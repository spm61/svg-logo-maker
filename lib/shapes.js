//Here's a file containing the base shape class and all the shapes that will derive from it.
//The basic, abstract shape.
class Shape {
    constructor(color) {
        this.color = color; //define a color property and assign it a value.
    }

    //All the shapes are going to have a render method, but it'll be implemented in the more concrete child classes.
    //Therefore, throw an error if you try to invoke it on the parent.
    render() {
        throw new Error("Abstract shapes cannot be rendered, use a more concrete shape instead.");
    }
}

//Create a Triangle, which "IS A" Shape.  All stuff in Shape is inherited.
class Triangle extends Shape {
    //method to render the triangle.  This creates a polygon with the dimensions of a Triangle and then fills it with the color.
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`; 
    }
}

//A Square is also a Shape.  
class Square extends Shape {
    render() {
        //return a rectangle with equal width and height, making a square.  Be sure to fill it with the color.
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

//You probably won't beleive this, but circles are shapes too.  
class Circle extends Shape {
    render() {
        //returns a circle that gets filled with the color.
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

//The classes are defined, now box them up and ship them.
module.exports = { Triangle, Square, Circle };