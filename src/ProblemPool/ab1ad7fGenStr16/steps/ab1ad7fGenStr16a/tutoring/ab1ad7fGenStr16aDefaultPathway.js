var hints = [{id: "ab1ad7fGenStr16a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$4x-6=\\left(10\\right) x+\\left(21\\right)$$"], dependencies: ["ab1ad7fGenStr16a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h3", type: "hint", dependencies: ["ab1ad7fGenStr16a-h2"], title: "Variable Terms", text: "Collect all variable terms on the right side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h4", type: "hint", dependencies: ["ab1ad7fGenStr16a-h3"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-6=\\left(6\\right) x+\\left(21\\right)$$"], dependencies: ["ab1ad7fGenStr16a-h4"], title: "Subtraction", text: "Subtract 4x from each side.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h6", type: "hint", dependencies: ["ab1ad7fGenStr16a-h5"], title: "Constant Terms", text: "Collect all constant terms on the left side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-27=6x$$"], dependencies: ["ab1ad7fGenStr16a-h6"], title: "Subtraction", text: "Subtract 21 from each side.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h8", type: "hint", dependencies: ["ab1ad7fGenStr16a-h7"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=\\frac{-\\left(9\\right)}{2}$$"], dependencies: ["ab1ad7fGenStr16a-h8"], title: "Division", text: "Divide 6 from each side.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h10", type: "hint", dependencies: ["ab1ad7fGenStr16a-h9"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr16a-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["ab1ad7fGenStr16a-h10"], title: "Verification", text: "Check whether $$\\left(4\\right) \\left(-\\frac{9}{2}-\\left(1\\right)\\right)-\\left(2\\right)$$ equals $$\\left(5\\right) \\left(\\left(2\\right) \\left(-\\frac{9}{2}\\right)+\\left(3\\right)\\right)+\\left(6\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};