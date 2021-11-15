var hints = [{id: "VarCon7c-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon7c-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3m=-24$$"], dependencies: ["VarCon7c-h1"], title: "Subtraction", text: "Subtract 9 from each side.", variabilization: {}}, {id: "VarCon7c-h3", type: "hint", dependencies: ["VarCon7c-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "VarCon7c-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$m=-8$$"], dependencies: ["VarCon7c-h3"], title: "Division", text: "Divide 3 from each side.", variabilization: {}}, {id: "VarCon7c-h5", type: "hint", dependencies: ["VarCon7c-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon7c-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon7c-h5"], title: "Verification", text: "Check whether $$3\\left(-8\\right)+9$$ equals -15.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};