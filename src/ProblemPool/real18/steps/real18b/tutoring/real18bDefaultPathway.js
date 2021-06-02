var hints = [{id: "real18b-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute $$z=5$$ into the equation to obtain $$\\left(4\\right) \\left(5\\right)-\\left(2\\right) \\left(5\\right) \\left(\\left(1\\right)+\\left(4\\right)\\right)-\\left(36\\right)$$", variabilization: {}}, {id: "real18b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["real18b-h1"], title: "Parentheses", text: "What is $$\\left(1\\right)+\\left(4\\right)$$?", variabilization: {}}, {id: "real18b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["20"], dependencies: ["real18b-h2"], title: "Multiplication", text: "What is 4(5)?", variabilization: {}}, {id: "real18b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-50"], dependencies: ["real18b-h3"], title: "Multiplication", text: "What is -2(5)(5)?", variabilization: {}}, {id: "real18b-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-66"], dependencies: ["real18b-h3", "real18b-h4"], title: "Addition", text: "What is 20-50-36?", variabilization: {}}, ]; export {hints};