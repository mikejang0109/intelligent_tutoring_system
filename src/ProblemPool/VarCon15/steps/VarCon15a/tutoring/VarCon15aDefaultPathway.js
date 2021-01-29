var hints = [{id: "VarCon15a-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "VarCon15a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16j=32"], dependencies: ["VarCon15a-h1"], title: "Addition", text: "Add 4j to each side of the equation."}, {id: "VarCon15a-h3", type: "hint", dependencies: ["VarCon15a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon15a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["j=2"], dependencies: ["VarCon15a-h3"], title: "Division", text: "Divide 16 from each side."}, {id: "VarCon15a-h5", type: "hint", dependencies: ["VarCon15a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon15a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["VarCon15a-h5"], title: "Verification", text: "Check whether $$\\left(12\\right) \\left(2\\right)$$ equals $$-\\left(4\\right) \\left(2\\right)+\\left(32\\right)$$", choices: ["TRUE", "FALSE"]}, ]; export {hints};