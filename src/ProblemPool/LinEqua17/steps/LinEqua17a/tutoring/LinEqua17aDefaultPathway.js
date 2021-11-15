var hints = [{id: "LinEqua17a-h1", type: "hint", dependencies: [], title: "The slope of a line", text: "The slope of a line, m, represents the change in y over the change in x. Given two points, (x_1, y_1) and (x_2, y_2), the following formula determines the slope of a line containing these points: m $$=$$ (y_2 - y_1)/(x_2 - x_1).", variabilization: {}}, {id: "LinEqua17a-h2", type: "hint", dependencies: ["LinEqua17a-h1"], title: "Substitute", text: "Substitute the y-values and the x-values into the formula, and we get $$m=\\frac{4-6}{1-\\left(-2\\right)}$$.", variabilization: {}}, {id: "LinEqua17a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2"], dependencies: ["LinEqua17a-h2"], title: "Subtraction", text: "What is 4-6?", variabilization: {}}, {id: "LinEqua17a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["LinEqua17a-h3"], title: "Subtraction", text: "What is 1-(-2)?", variabilization: {}}, {id: "LinEqua17a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-2}{3}$$"], dependencies: ["LinEqua17a-h4"], title: "Division", text: "What is $$\\frac{\\left(-2\\right)}{3}$$?", variabilization: {}}, ]; export {hints};