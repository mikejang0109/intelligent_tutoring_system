var hints = [{id: "aae6efeSolving2a-h1", type: "hint", dependencies: [], title: "Setup", text: "Assume the number of notebook is x", variabilization: {}}, {id: "aae6efeSolving2a-h2", type: "hint", dependencies: ["aae6efeSolving2a-h1"], title: "Setup", text: "Write an equation based on the question: $$2x+3=7$$", variabilization: {}}, {id: "aae6efeSolving2a-h3", type: "hint", dependencies: ["aae6efeSolving2a-h2"], title: "Organizing", text: "Rewrite the equation as $$2x=7-3$$", variabilization: {}}, {id: "aae6efeSolving2a-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["aae6efeSolving2a-h3"], title: "Subtraction", text: "What is 7-3?", variabilization: {}}, {id: "aae6efeSolving2a-h4", type: "hint", dependencies: ["aae6efeSolving2a-h3"], title: "Division", text: "Dividing the coefficient on x to get the answer", variabilization: {}}, ]; export {hints};