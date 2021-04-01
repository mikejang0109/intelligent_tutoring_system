var hints = [{id: "GenStr25p-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr25p-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2a+12=4a-12"], dependencies: ["GenStr25p-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr25p-h3", type: "hint", dependencies: ["GenStr25p-h2"], title: "Variable Terms", text: "Collect all variable terms on the right side of the equation."}, {id: "GenStr25p-h4", type: "hint", dependencies: ["GenStr25p-h3"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "GenStr25p-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12=6a-12"], dependencies: ["GenStr25p-h4"], title: "Addition", text: "Add 2a to each side of the equation."}, {id: "GenStr25p-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["24=6a"], dependencies: ["GenStr25o-h6"], title: "Addition", text: "Add 12 to each side of the equation."}, {id: "GenStr25p-h8", type: "hint", dependencies: ["GenStr25p-h7"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr25p-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["a=4"], dependencies: ["GenStr25p-h8"], title: "Division", text: "Divide 6 from each side."}, {id: "GenStr25p-h10", type: "hint", dependencies: ["GenStr25p-h9"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr25p-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr25p-h10"], title: "Verification", text: "Check whether $$-\\left(2\\right) \\left(\\left(4\\right)-\\left(6\\right)\\right)$$ equals $$\\left(4\\right) \\left(\\left(4\\right)-\\left(3\\right)\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};