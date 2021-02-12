var hints = [{id: "SubAdd17k-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "SubAdd17k-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["q+3/4-3/4=1/2-3/4"], dependencies: ["SubAdd17k-h1"], title: "Subtraction", text: "Subtract $$\\frac{3}{4}$$ from each side."}, {id: "SubAdd17k-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["q=-1/4"], dependencies: ["SubAdd17k-h2"], title: "Simplification", text: "Simplify the equation."}, {id: "SubAdd17k-h4", type: "hint", dependencies: ["SubAdd17k-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "SubAdd17k-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["SubAdd17k-h4"], title: "Verification", text: "Check whether $$\\frac{-\\left(1\\right)}{4}+\\frac{3}{4}$$ equals $$\\frac{1}{2}$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};