var hints = [{id: "LinIneq12a-h1", type: "hint", dependencies: [], title: "Addition Property", text: "The addition property of inequality: if $$a\\leqb$$, then $$a+c\\leqb+c$$."}, {id: "LinIneq12a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["LinIneq12a-h1"], title: "Apply the Addition Property", text: "What number should we add to both sides of the inequality to isolate the variable term?"}, {id: "LinIneq12a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4x"], dependencies: ["LinIneq12a-h2"], title: "Left side After Addition", text: "What is the left side after adding 7?"}, {id: "LinIneq12a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["LinIneq12a-h2"], title: "Right side After Addition", text: "What is the right side after adding 7?"}, {id: "LinIneq12a-h5", type: "hint", dependencies: ["LinIneq12a-h3", "LinIneq12a-h4"], title: "Multiplication Property", text: "The multiplication property of inequality: If $$a\\leqb$$ and $$c>0$$, then $$ac\\leqbc$$ if $$a\\leqb$$ and $$c<0$$, then $$ac\\geqbc$$."}, {id: "LinIneq12a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/4"], dependencies: ["LinIneq12a-h5"], title: "Apply the Multiplication Property", text: "What number should we multiply to both sides of the inequality?"}, {id: "LinIneq12a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["LinIneq12a-h6"], title: "Left Side", text: "What is the left side after multiplying $$\\frac{1}{4}$$?"}, {id: "LinIneq12a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["LinIneq12a-h6"], title: "Right Side", text: "What is the right side after multiplying by $$\\frac{1}{4}$$?"}, {id: "LinIneq12a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["≤"], dependencies: ["LinIneq12a-h6"], title: "Sign", text: "What is the sign?", choices: ["<=", ">="]}, {id: "LinIneq12a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(-inf,4]"], dependencies: ["LinIneq12a-h7", "LinIneq12a-h8", "LinIneq12a-h9"], title: "Interval Notation", text: "What is $$x\\leq4$$ written in the interval notation?", choices: ["(-inf,4)", "(-inf,4)", "(4,inf)", "(4,inf)"]}, ]; export {hints};