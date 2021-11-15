var hints = [{id: "VarCon33e-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side.", variabilization: {}}, {id: "VarCon33e-h2", type: "hint", dependencies: ["VarCon33e-h1"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon33e-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$15x-17=13$$"], dependencies: ["VarCon33e-h2"], title: "Addition", text: "Add 8x to each side of the equation.", variabilization: {}}, {id: "VarCon33e-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$15x=30$$"], dependencies: ["VarCon33e-h3"], title: "Addition", text: "Add 17 to each side of the equation.", variabilization: {}}, {id: "VarCon33e-h5", type: "hint", dependencies: ["VarCon33e-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "VarCon33e-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=2$$"], dependencies: ["VarCon33e-h5"], title: "Division", text: "Divide 15 from each side.", variabilization: {}}, {id: "VarCon33e-h7", type: "hint", dependencies: ["VarCon33e-h6"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon33e-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon33e-h7"], title: "Verification", text: "Check whether $$7\\times2-17$$ equals $$-8\\times2+13$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};