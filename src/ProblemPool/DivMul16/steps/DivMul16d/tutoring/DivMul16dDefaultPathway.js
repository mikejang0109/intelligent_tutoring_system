var hints = [{id: "DivMul16d-h1", type: "hint", dependencies: [], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "DivMul16d-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-37p/(-37)=-541/(-37)"], dependencies: ["DivMul16d-h1"], title: "Division", text: "Divide -37 from each side."}, {id: "DivMul16d-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["541/37"], dependencies: ["DivMul16d-h2"], title: "Simplification", text: "What do we get for p after simplifying the equation?"}, {id: "DivMul16d-h4", type: "hint", dependencies: ["DivMul16d-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul16d-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["DivMul16d-h4"], title: "Verification", text: "Check whether $$-\\left(37\\right) \\frac{541}{37}$$ equals -541.", choices: ["TRUE", "FALSE"]}, ]; export {hints};