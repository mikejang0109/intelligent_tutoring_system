var hints = [{id: "DivMul7a-h1", type: "hint", dependencies: [], title: "Minus sign", text: "Remember -n is equivalent to $$\\left(-1\\right) n$$.", variabilization: {}}, {id: "DivMul7a-h2", type: "hint", dependencies: ["DivMul7a-h1"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul7a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-n}{\\left(-1\\right)}=\\frac{\\left(-9\\right)}{\\left(-1\\right)}$$"], dependencies: ["DivMul7a-h2"], title: "Division", text: "Divide -1 from each side.", variabilization: {}}, {id: "DivMul7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-9"], dependencies: ["DivMul7a-h3"], title: "Simplification", text: "What do we get for n after simplifying the equation?", variabilization: {}}, {id: "DivMul7a-h5", type: "hint", dependencies: ["DivMul7a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul7a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul7a-h5"], title: "Verification", text: "Check whether -(-9) equals 9.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};