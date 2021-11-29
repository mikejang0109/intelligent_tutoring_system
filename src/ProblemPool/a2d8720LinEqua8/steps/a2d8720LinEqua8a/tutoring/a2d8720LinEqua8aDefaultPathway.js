var hints = [{id: "a2d8720LinEqua8a-h1", type: "hint", dependencies: [], title: "Find LCD", text: "We have three denominators: 3x, 4, and 6x.", variabilization: {}}, {id: "a2d8720LinEqua8a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12x"], dependencies: ["a2d8720LinEqua8a-h1"], title: "LCD", text: "What is the LCD of this equation?", variabilization: {}}, {id: "a2d8720LinEqua8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$8=3x-2$$"], dependencies: ["a2d8720LinEqua8a-h2"], title: "Eliminating", text: "Simplify $$12x \\frac{2}{3x}=12x \\frac{1}{4}-12x \\frac{1}{6x}$$.", variabilization: {}}, {id: "a2d8720LinEqua8a-h4", type: "hint", dependencies: ["a2d8720LinEqua8a-h3"], title: "Solve equation", text: "Then we should solve the linear equation obtained.", variabilization: {}}, {id: "a2d8720LinEqua8a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=\\frac{10}{3}$$"], dependencies: ["a2d8720LinEqua8a-h4"], title: "Linear equation", text: "Solve the linear equation $$8=3x-2$$.", variabilization: {}}, ]; export {hints};