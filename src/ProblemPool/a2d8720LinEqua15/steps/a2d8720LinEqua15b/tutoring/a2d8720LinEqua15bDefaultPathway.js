var hints = [{id: "a2d8720LinEqua15b-h1", type: "hint", dependencies: [], title: "Excluded values", text: "The excluded values are those making a denominator equal to zero.", variabilization: {}}, {id: "a2d8720LinEqua15b-h2", type: "hint", dependencies: ["a2d8720LinEqua15b-h1"], title: "Denominator", text: "The only denominator is x-1.", variabilization: {}}, {id: "a2d8720LinEqua15b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["a2d8720LinEqua15b-h2"], title: "Excluded values", text: "State the excluded value.", variabilization: {}}, {id: "a2d8720LinEqua15b-h4", type: "hint", dependencies: ["a2d8720LinEqua15b-h3"], title: "Factoring the denominator", text: "The denominator in factored form is x-1.", variabilization: {}}, {id: "a2d8720LinEqua15b-h5", type: "hint", dependencies: ["a2d8720LinEqua15b-h4"], title: "Find LCD", text: "The LCD is the smallest expression that is divisible by each one of the denominators.", variabilization: {}}, {id: "a2d8720LinEqua15b-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x-1"], dependencies: ["a2d8720LinEqua15b-h5"], title: "LCD", text: "What is the LCD of this equation?", variabilization: {}}, {id: "a2d8720LinEqua15b-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(3\\right) x+\\left(2\\right) x-\\left(2\\right)=3$$"], dependencies: ["a2d8720LinEqua15b-h6"], title: "Eliminating", text: "Simplify $$\\left(x-\\left(1\\right)\\right) \\frac{\\left(3\\right) x}{x-\\left(1\\right)}+2\\left(x-\\left(1\\right)\\right)=\\left(x-\\left(1\\right)\\right) \\frac{3}{x-\\left(1\\right)}$$.", variabilization: {}}, {id: "a2d8720LinEqua15b-h8", type: "hint", dependencies: ["a2d8720LinEqua15b-h7"], title: "Solve equation", text: "Then we should solve the linear equation obtained.", variabilization: {}}, {id: "a2d8720LinEqua15b-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["a2d8720LinEqua15b-h8"], title: "Linear equation", text: "Solve the equation $$\\left(3\\right) x+\\left(2\\right) x-\\left(2\\right)=3$$. What is x?", variabilization: {}}, {id: "a2d8720LinEqua15b-h10", type: "hint", dependencies: ["a2d8720LinEqua15b-h9"], title: "Check the solution", text: "Since 1 is an excluded value, it is not the true solution for the original rational function. As a result, there is no solution.", variabilization: {}}, ]; export {hints};