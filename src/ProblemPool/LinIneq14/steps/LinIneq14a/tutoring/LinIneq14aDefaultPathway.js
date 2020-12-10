var hints = [{id: "LinIneq14a-h1", type: "hint", dependencies: [], title: "Move Variable Terms", text: "We start by moving variable terms to one side of the inequality"}, {id: "LinIneq14a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["3>3x-5"], dependencies: ["LinIneq14a-h1"], title: "Move Variable Terms", text: "What inequality do we get after moving the variable terms?", choices: ["$$3>3x-5$$", "$$3>-x-5$$"]}, {id: "LinIneq14a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["LinIneq14a-h2"], title: "Isolate Variable Term", text: "What number should we add to both sides?"}, {id: "LinIneq14a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["8>3x"], dependencies: ["LinIneq14a-h3"], title: "Isolate Variable Term", text: "What inequality do we get after isolating the variable term?", choices: ["$$-2>3x$$", "$$8>3x$$"]}, {id: "LinIneq14a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/3"], dependencies: ["LinIneq14a-h4"], title: "Apply the Multiplication Property", text: "To make the coeffient of x be 1, what number should we multiply both sides of the inequality by?"}, {id: "LinIneq14a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8/3"], dependencies: ["LinIneq14a-h5"], title: "Left Side", text: "What is the left side after multiplying by 1/3?"}, {id: "LinIneq14a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["LinIneq14a-h5"], title: "Right Side", text: "What is the right side after multiplying by 1/3?"}, {id: "LinIneq14a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: [">"], dependencies: ["LinIneq14a-h5"], title: "Sign", text: "What is the sign of the inequality after multiplication?", choices: ["<", ">"]}, {id: "LinIneq14a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(-inf,3/8)"], dependencies: ["LinIneq14a-h6", "LinIneq14a-h7", "LinIneq14a-h8"], title: "Interval Notation", text: "What is $$\\frac{8}{3}>x$$ written in interval notion?", choices: ["$$\\\\frac{-inf3}{8}$$", "$$\\\\frac{3}{8} \\\\infty$$"]}, ]; export {hints};