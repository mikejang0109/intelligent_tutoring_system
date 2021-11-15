var hints = [{id: "VarCon33b-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the right side as the \"variable\" side.", variabilization: {}}, {id: "VarCon33b-h2", type: "hint", dependencies: ["VarCon33b-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon33b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$21=f+14$$"], dependencies: ["VarCon33b-h2"], title: "Subtraction", text: "Subtract 18f from each side.", variabilization: {}}, {id: "VarCon33b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$f=7$$"], dependencies: ["VarCon33b-h3"], title: "Subtraction", text: "Subtract 14 from each side.", variabilization: {}}, {id: "VarCon33b-h5", type: "hint", dependencies: ["VarCon33b-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon33b-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon33b-h5"], title: "Verification", text: "Check whether $$21+18\\times7$$ equals $$19\\times7+14$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};