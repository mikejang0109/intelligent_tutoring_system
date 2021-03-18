var hints = [{id: "VarCon33g-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side."}, {id: "VarCon33g-h2", type: "hint", dependencies: ["VarCon33g-h1"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "VarCon33g-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4y-4=12"], dependencies: ["VarCon33g-h2"], title: "Addition", text: "Add y to each side of the equation."}, {id: "VarCon33g-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4y=16"], dependencies: ["VarCon33g-h3"], title: "Addition", text: "Add 4 to each side of the equation."}, {id: "VarCon33g-h5", type: "hint", dependencies: ["VarCon33g-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon33g-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=4"], dependencies: ["VarCon33g-h5"], title: "Division", text: "Divide 4 from each side."}, {id: "VarCon33g-h7", type: "hint", dependencies: ["VarCon33g-h6"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon33g-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon33g-h7"], title: "Verification", text: "Check whether $$\\left(3\\right) \\left(4\\right)-\\left(4\\right)$$ equals 12-4.", choices: ["TRUE", "FALSE"]}, ]; export {hints};