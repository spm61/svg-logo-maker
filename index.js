//import the needed packages by requiring them.  
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");
const { error } = require("console");

//Uses the inquirer to ask the user what kind of SVG thing they want.
function inquireUser() {
    inquirer
    .prompt([
      {
        type: "input", 
        message:
          "What text would you like you logo to display? Up to three characters only!",
        name: "text",
      },
      {
        type: "input",
        message:
          "Choose text color. Specify a keyword or a hexadecimal code.",
        name: "textColor",
      },

      {
        type: "list",
        message: "What shape would you like your logo to be?  Select one.",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Choose the color of your shape.  Enter a keyword or a hexadecimal code.",
        name: "shapeColor",
      },
    ])
    .then((userInput) => {
        //Since a logo can only be generated with three characters or less, we need to try again.
        if (userInput.text.length > 3) {
            throw new Error("An SVG Logo can only have three characters!  Please try again.")
        } else {
          //All the info is valid, so inject it into an SVG and output it.
          generateLogo("logo.svg", userInput);
        }
      });
}

function generateLogo(logoName, userInput) {
    //define the SVG String.
    let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'; //Start an SVG File.
    svgString += '<g>'; //open up a g tag so the user text layers on top of the polygon.
    svgString += `${userInput.shape}`; //Add the user's shape to the string

    let chosenShape; //variable for storing the chosen shape.  
    switch(userInput.shape) { //create a shape object based on the shape choise, using the specified color.
        case("Triangle") :
            chosenShape = new Triangle(userInput.shapeColor);
            break;
        case("Square"):
            chosenShape = new Square(userInput.shapeColor);
            break;
        case("Circle"):
            chosenShape = new Circle(userInput.shapeColor);
            break;
    }
    svgString += chosenShape.render();
    //use the SVG Text Tag to render the chosen text in the chosen color.
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${userInput.textColor}">${userInput.text}</text>`;
    //We opened up a g tag earlier so now we have to close it.
    svgString += "</g>";
    //Close the main SVG tag, completing the logo.
    svgString += "</svg>";

    //Now that we have our file, attempt to write it.
    fs.writeFile(logoName, svgString, (error) => {
        console.error("An error occurred generating the SVG file. " + error)
    });
}

//A simple function to welcome the user and start the program.
function runProgram() {
    console.log("Welcome to the SVG Logo Generator!  Please answer the following prompts to generate an SVG Logo");
    promptUser();
}
//Begin execution of the code.
runProgram();