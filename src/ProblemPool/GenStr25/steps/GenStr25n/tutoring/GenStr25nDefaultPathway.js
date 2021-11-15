var hints = [{id: "GenStr25n-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr25n-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$24-2y=32$$"], dependencies: ["GenStr25n-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr25n-h3", type: "hint", dependencies: ["GenStr25n-h2"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr25n-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-2y=8$$"], dependencies: ["GenStr25n-h3"], title: "Subtraction", text: "Subtract 24 from each side.", variabilization: {}}, {id: "GenStr25n-h5", type: "hint", dependencies: ["GenStr25n-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "GenStr25n-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y=-4$$"], dependencies: ["GenStr25n-h5"], title: "Division", text: "Divide -2 from each side.", variabilization: {}}, {id: "GenStr25n-h7", type: "hint", dependencies: ["GenStr25n-h6"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr25n-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr25n-h7"], title: "Verification", text: "Check whether $$18-2\\left(-4-3\\right)$$ equals 32.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};