var hints = [{id: "DivMul16b-h1", type: "hint", dependencies: [], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul16b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(5\\right) c}{\\left(-5\\right)}=\\frac{55}{\\left(-5\\right)}$$"], dependencies: ["DivMul16b-h1"], title: "Division", text: "Divide -5 from each side.", variabilization: {}}, {id: "DivMul16b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-11"], dependencies: ["DivMul16b-h2"], title: "Simplification", text: "What do we get for c after simplifying the equation?", variabilization: {}}, {id: "DivMul16b-h4", type: "hint", dependencies: ["DivMul16b-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul16b-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul16b-h4"], title: "Verification", text: "Check whether $$-\\left(5\\right) \\left(-11\\right)$$ equals 55.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};