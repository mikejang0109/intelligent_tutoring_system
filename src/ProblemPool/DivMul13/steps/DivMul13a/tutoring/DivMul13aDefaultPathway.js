var hints = [{id: "DivMul13a-h1", type: "hint", dependencies: [], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul13a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\frac{8}{15}}{\\left(-\\frac{4}{5}\\right)}=\\frac{\\left(-\\frac{4}{5}\\right) x}{\\left(-\\frac{4}{5}\\right)}$$"], dependencies: ["DivMul13a-h1"], title: "Division", text: "Divide $$\\frac{-\\left(4\\right)}{5}$$ from each side.", variabilization: {}}, {id: "DivMul13a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(2\\right)}{3}$$"], dependencies: ["DivMul13a-h2"], title: "Simplification", text: "What do we get for x after simplifying the equation?", variabilization: {}}, {id: "DivMul13a-h4", type: "hint", dependencies: ["DivMul13a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul13a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul13a-h4"], title: "Verification", text: "Check whether $$\\frac{8}{15}$$ equals $$-\\left(\\frac{4}{5}\\right) \\left(-\\frac{2}{3}\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};