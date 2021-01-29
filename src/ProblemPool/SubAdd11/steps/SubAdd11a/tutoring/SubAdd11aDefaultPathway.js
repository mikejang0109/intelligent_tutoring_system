var hints = [{id: "SubAdd11a-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "SubAdd11a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x-5/8+5/8=3/4+5/8"], dependencies: ["SubAdd11a-h1"], title: "Addition", text: "Add $$\\frac{5}{8}$$ to each side of the equation."}, {id: "SubAdd11a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x=11/8"], dependencies: ["SubAdd11a-h2"], title: "Simplification", text: "Simplify the equation."}, {id: "SubAdd11a-h4", type: "hint", dependencies: ["SubAdd11a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "SubAdd11a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["SubAdd11a-h4"], title: "Verification", text: "Check whether $$\\frac{11}{8}-\\frac{5}{8}$$ equals $$\\frac{3}{4}$$", choices: ["TRUE", "FALSE"]}, ]; export {hints};