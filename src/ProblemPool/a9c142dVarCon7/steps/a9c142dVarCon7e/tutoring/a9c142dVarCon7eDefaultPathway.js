var hints = [{id: "a9c142dVarCon7e-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "a9c142dVarCon7e-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$84=-21x$$"], dependencies: ["a9c142dVarCon7e-h1"], title: "Addition", text: "Add 24 to each side of the equation.", variabilization: {}}, {id: "a9c142dVarCon7e-h3", type: "hint", dependencies: ["a9c142dVarCon7e-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "a9c142dVarCon7e-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=-4$$"], dependencies: ["a9c142dVarCon7e-h3"], title: "Division", text: "Divide -21 from each side.", variabilization: {}}, {id: "a9c142dVarCon7e-h5", type: "hint", dependencies: ["a9c142dVarCon7e-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a9c142dVarCon7e-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a9c142dVarCon7e-h5"], title: "Verification", text: "Check whether 60 equals $$-21\\left(-4\\right)-24$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};