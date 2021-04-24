var hints = [{id: "inverse2a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute y for f(x)", variabilization: {}}, {id: "inverse2a-h2", type: "hint", dependencies: ["inverse2a-h1"], title: "Swap", text: "Swap y and x", variabilization: {}}, {id: "inverse2a-h3", type: "hint", dependencies: ["inverse2a-h2"], title: "Multiply", text: "Multiply $$\\left(5\\right) y+\\left(4\\right)$$ to both sides", variabilization: {}}, {id: "inverse2a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x \\left(\\left(5\\right) y+\\left(4\\right)\\right)=\\left(2\\right) y+\\left(3\\right)$$"], dependencies: ["inverse2a-h3"], title: "Result", text: "What is the result?", choices: ["$$y \\left(\\left(5\\right) y+\\left(4\\right)\\right)=\\left(2\\right) y+\\left(3\\right)$$", "$$x \\left(\\left(5\\right) y+\\left(4\\right)\\right)=\\left(2\\right) y+\\left(3\\right)$$", "$$x \\left(\\left(5\\right) y+\\left(4\\right)\\right)=\\left(2\\right) x+\\left(3\\right)$$"], variabilization: {}}, {id: "inverse2a-h5", type: "hint", dependencies: ["inverse2a-h4"], title: "Expand", text: "Expand the left hand side.", variabilization: {}}, {id: "inverse2a-h6", type: "hint", dependencies: ["inverse2a-h5"], title: "Subtract", text: "Subtract 4x from both sides.", variabilization: {}}, {id: "inverse2a-h7", type: "hint", dependencies: ["inverse2a-h6"], title: "Subtract", text: "Subtract 2y from both sides", variabilization: {}}, {id: "inverse2a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$5xy-2y=-\\left(4\\right) x+\\left(3\\right)$$"], dependencies: ["inverse2a-h7"], title: "Result", text: "What is the result?", choices: ["$$\\left(5\\right) xy+\\left(2\\right) y=\\left(4\\right) x+\\left(3\\right)$$", "$$5xy-2y=4x-9$$", "$$5xy-2y=-\\left(4\\right) x+\\left(3\\right)$$"], variabilization: {}}, {id: "inverse2a-h9", type: "hint", dependencies: ["inverse2a-h8"], title: "Factor", text: "Factor out y from the left hand side.", variabilization: {}}, {id: "inverse2a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$y \\left(\\left(5\\right) x-\\left(2\\right)\\right)=-\\left(4\\right) x+\\left(3\\right)$$"], dependencies: ["inverse2a-h9"], title: "Result", text: "What is the result?", choices: ["$$y \\left(\\left(5\\right) x+\\left(2\\right)\\right)=-\\left(4\\right) x+\\left(3\\right)$$", "$$y \\left(\\left(5\\right) x-\\left(2\\right)\\right)=-\\left(4\\right) x+\\left(3\\right)$$", "$$y \\left(\\left(5\\right) x-\\left(2\\right)\\right)=4x-3$$"], variabilization: {}}, {id: "inverse2a-h11", type: "hint", dependencies: ["inverse2a-h10"], title: "Divide", text: "Divide 5x-2 from both sides to get the final answer.", variabilization: {}}, ]; export {hints};