var hints = [{id: "LinEqua13a-h1", type: "hint", dependencies: [], title: "Excluded values", text: "The excluded values are those making a denominator equal to zero.", variabilization: {}}, {id: "LinEqua13a-h2", type: "hint", dependencies: ["LinEqua13a-h1"], title: "Denominator", text: "The denominators are $$x+\\left(1\\right)$$, x-1 and $$x^2-\\left(1\\right)$$.", variabilization: {}}, {id: "LinEqua13a-h3", type: "hint", dependencies: ["LinEqua13a-h2"], title: "Excluded values", text: "The excluded values are 1 and -1.", variabilization: {}}, {id: "LinEqua13a-h4", type: "hint", dependencies: ["LinEqua13a-h3"], title: "Factoring the denominator", text: "The three denominators in factored form are $$x+\\left(1\\right)$$, x-1 and $$\\left(x+\\left(1\\right)\\right) \\left(x-\\left(1\\right)\\right)$$.", variabilization: {}}, {id: "LinEqua13a-h5", type: "hint", dependencies: ["LinEqua13a-h4"], title: "Find LCD", text: "The LCD is the smallest expression that is divisible by each one of the denominators.", variabilization: {}}, {id: "LinEqua13a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x-1)(x+1)"], dependencies: ["LinEqua13a-h5"], title: "LCD", text: "What is the LCD of this equation?", variabilization: {}}, {id: "LinEqua13a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x-2-x-1=2x"], dependencies: ["LinEqua13a-h6"], title: "Eliminating", text: "Simplify $$\\left(x-\\left(1\\right)\\right) \\left(x+\\left(1\\right)\\right) \\left(\\frac{2}{x+\\left(1\\right)}-\\frac{1}{x-\\left(1\\right)}\\right)=\\left(x-\\left(1\\right)\\right) \\left(x+\\left(1\\right)\\right) \\frac{\\left(2\\right) x}{x^2+\\left(1\\right)}$$.", variabilization: {}}, {id: "LinEqua13a-h8", type: "hint", dependencies: ["LinEqua13a-h7"], title: "Solve equation", text: "Then we should solve the linear equation obtained.", variabilization: {}}, {id: "LinEqua13a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: ["LinEqua13a-h8"], title: "Linear equation", text: "Solve the equation $$2x-2-x-1=2x$$. What is x?", variabilization: {}}, ]; export {hints};