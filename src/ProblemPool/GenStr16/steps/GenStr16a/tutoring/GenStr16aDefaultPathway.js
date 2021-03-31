var hints = [{id: "GenStr16a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr16a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4x-6=10x+21"], dependencies: ["GenStr16a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr16a-h3", type: "hint", dependencies: ["GenStr16a-h2"], title: "Variable Terms", text: "Collect all variable terms on the right side of the equation."}, {id: "GenStr16a-h4", type: "hint", dependencies: ["GenStr16a-h3"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "GenStr16a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6=6x+21"], dependencies: ["GenStr16a-h4"], title: "Subtraction", text: "Subtract 4x from each side."}, {id: "GenStr16a-h6", type: "hint", dependencies: ["GenStr16a-h5"], title: "Constant Terms", text: "Collect all constant terms on the left side of the equation."}, {id: "GenStr16a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-27=6x"], dependencies: ["GenStr16a-h6"], title: "Subtraction", text: "Subtract 21 from each side."}, {id: "GenStr16a-h8", type: "hint", dependencies: ["GenStr16a-h7"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr16a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x=-9/2"], dependencies: ["GenStr16a-h8"], title: "Division", text: "Divide 6 from each side."}, {id: "GenStr16a-h10", type: "hint", dependencies: ["GenStr16a-h9"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr16a-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr16a-h10"], title: "Verification", text: "Check whether $$\\left(4\\right) \\left(\\frac{\\left(-9\\right)}{2}-\\left(1\\right)\\right)-\\left(2\\right)$$ equals $$\\left(5\\right) \\left(\\left(2\\right) \\frac{\\left(-9\\right)}{2}+\\left(3\\right)\\right)+\\left(6\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};