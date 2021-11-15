var hints = [{id: "VarCon33i-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the right side as the \"variable\" side.", variabilization: {}}, {id: "VarCon33i-h2", type: "hint", dependencies: ["VarCon33i-h1"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon33i-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$11=a+4$$"], dependencies: ["VarCon33i-h2"], title: "Addition", text: "Add $$\\frac{1}{5} a$$ to each side of the equation.", variabilization: {}}, {id: "VarCon33i-h4", type: "hint", dependencies: ["VarCon33i-h3"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon33i-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$a=7$$"], dependencies: ["VarCon33i-h4"], title: "Subtraction", text: "Subtract 4 from each side.", variabilization: {}}, {id: "VarCon33i-h6", type: "hint", dependencies: ["VarCon33i-h5"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon33i-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon33i-h6"], title: "Verification", text: "Check whether $$11-7\\frac{1}{5}$$ equals $$7\\frac{4}{5}+4$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};