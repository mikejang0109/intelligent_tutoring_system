var hints = [{id: "a9c142dVarCon33a-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side.", variabilization: {}}, {id: "a9c142dVarCon33a-h2", type: "hint", dependencies: ["a9c142dVarCon33a-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "a9c142dVarCon33a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x-17=2$$"], dependencies: ["a9c142dVarCon33a-h2"], title: "Subtraction", text: "Subtract 5x from each side.", variabilization: {}}, {id: "a9c142dVarCon33a-h4", type: "hint", dependencies: ["a9c142dVarCon33a-h3"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "a9c142dVarCon33a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=19$$"], dependencies: ["a9c142dVarCon33a-h4"], title: "Addition", text: "Add 17 to each side of the equation.", variabilization: {}}, {id: "a9c142dVarCon33a-h6", type: "hint", dependencies: ["a9c142dVarCon33a-h5"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a9c142dVarCon33a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a9c142dVarCon33a-h6"], title: "Verification", text: "Check whether $$\\left(6\\right) \\left(19\\right)-\\left(17\\right)$$ equals $$\\left(5\\right) \\left(19\\right)+\\left(2\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};