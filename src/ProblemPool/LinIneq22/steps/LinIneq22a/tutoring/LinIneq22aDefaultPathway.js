var hints = [{id: "LinIneq22a-h1", type: "hint", dependencies: [], title: "Isolation", text: "We can isolate the variable term by using the addition property.", variabilization: {}}, {id: "LinIneq22a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["LinIneq22a-h1"], title: "Addition", text: "What number should we add in order to isolate the variable with its coefficient in the middle?", variabilization: {}}, {id: "LinIneq22a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$12<2x \\leq 18$$"], dependencies: ["LinIneq22a-h2"], title: "Addition", text: "What do we get after we add 8?", choices: ["$$10<2x \\leq 18$$", "$$12<2x \\leq 16$$", "$$12<2x \\leq 18$$"], variabilization: {}}, {id: "LinIneq22a-h4", type: "hint", dependencies: ["LinIneq22a-h3"], title: "Isolation", text: "We can leave the variable term by itself in the middle by using the multiplication property.", variabilization: {}}, {id: "LinIneq22a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{2}$$"], dependencies: ["LinIneq22a-h4"], title: "Multiplication", text: "What number should we multiply in order to isolate the variable by itself in the middle?", variabilization: {}}, {id: "LinIneq22a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$6<x \\leq 9$$"], dependencies: ["LinIneq22a-h5"], title: "Multiplication", text: "What do we get after we multiply $$\\frac{1}{2}$$ through all three parts?", choices: ["$$6<x \\leq 9$$", "$$3<x \\leq 10$$", "$$6<x \\leq 18$$", "$$4<x \\leq 9$$"], variabilization: {}}, ]; export {hints};