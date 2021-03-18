var hints = [{id: "SubAdd17g-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "SubAdd17g-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x-1/3+1/3=2+1/3"], dependencies: ["SubAdd17g-h1"], title: "Addition", text: "Add $$\\frac{1}{3}$$ to each side of the equation."}, {id: "SubAdd17g-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x=7/3"], dependencies: ["SubAdd17g-h2"], title: "Simplification", text: "Simplify the equation."}, {id: "SubAdd17g-h4", type: "hint", dependencies: ["SubAdd17g-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "SubAdd17g-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["SubAdd17g-h4"], title: "Verification", text: "Check whether $$\\frac{7}{3}-\\frac{1}{3}$$ equals 2.", choices: ["TRUE", "FALSE"]}, ]; export {hints};