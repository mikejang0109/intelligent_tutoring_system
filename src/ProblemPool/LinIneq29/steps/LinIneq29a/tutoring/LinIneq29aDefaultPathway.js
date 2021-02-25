var hints = [{id: "LinIneq29a-h1", type: "hint", dependencies: [], title: "Isolation", text: "We can first isolate the $$absolute$$ value term by using the addition property."}, {id: "LinIneq29a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["LinIneq29a-h1"], title: "Addition", text: "What number should we add on both sides in order to isolate the $$absolute$$ value term by itself on the left?"}, {id: "LinIneq29a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$|\\left(2\\right) x+\\left(1\\right)| \\leq 5$$"], dependencies: ["LinIneq29a-h2"], title: "Addition", text: "What do we get after we add -1 on both sides?", choices: ["$$|\\left(2\\right) x+\\left(1\\right)| \\leq 5$$", "$$|\\left(2\\right) x-\\left(1\\right)| \\leq 5$$", "$$|\\left(2\\right) x+\\left(1\\right)| \\geq 5$$"]}, {id: "LinIneq29a-h4", type: "hint", dependencies: ["LinIneq29a-h3"], title: "Absolute Value Inequality", text: "For an algebraic expression X, and $$k>0$$, an $$absolute$$ value inequality is an inequality of the form |X|<=k is equivalent to $$-k \\leq X \\leq k$$"}, {id: "LinIneq29a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$-\\left(5\\right) \\leq \\left(2\\right) x+\\left(1\\right) \\leq 5$$"], dependencies: ["LinIneq29a-h4"], title: "Absolute Value Inequality", text: "How can we apply the above principle to our problem?", choices: ["$$-\\left(5\\right) \\leq \\left(2\\right) x+\\left(1\\right)$$ or $$\\left(2\\right) x-\\left(1\\right) \\leq 5$$", "$$-\\left(5\\right) \\leq \\left(2\\right) x-\\left(1\\right) \\leq 5$$", "$$-\\left(5\\right) \\leq \\left(2\\right) x+\\left(1\\right)$$ or $$\\left(2\\right) x-\\left(1\\right) \\geq 5$$"]}, {id: "LinIneq29a-h6", type: "hint", dependencies: ["LinIneq29a-h5"], title: "Simplification", text: "Let's simplify the inequality by using the addition and multiplication property."}, {id: "LinIneq29a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["LinIneq29a-h6"], title: "Addition", text: "What number should we add in order to isolate the variable with its coefficient in the middle?"}, {id: "LinIneq29a-h8", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["-6<=2x<=4"], dependencies: ["LinIneq29a-h7"], title: "Addition", text: "What do we get after we add -1 through all three parts?"}, {id: "LinIneq29a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/2"], dependencies: ["LinIneq29a-h8"], title: "Multiplication", text: "What number should we multiply in order to isolate the variable by itself in the middle?"}, {id: "LinIneq29a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["LinIneq29a-h9"], title: "Right", text: "What do we get for the right-hand side of the inequality after we multiply $$\\frac{1}{2}$$ through all three parts?"}, {id: "LinIneq29a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: ["LinIneq29a-h10"], title: "Left", text: "What do we get for the left-hand side of the inequality after we multiply $$\\frac{1}{2}$$ through all three parts?"}, {id: "LinIneq29a-h12", type: "hint", dependencies: ["LinIneq29a-h11"], title: "Interval Notation", text: "[a,b] represents all real numbers between a and b, including a and b."}, ]; export {hints};