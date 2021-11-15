var hints = [{id: "comp2a-h1", type: "hint", dependencies: [], title: "Substitution", text: "Let’s begin by substituting g(x) into f(x).", variabilization: {}}, {id: "comp2a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$2\\left(3-x\\right)+1$$"], dependencies: ["comp2a-h1"], title: "Substitution", text: "What do we get after substituting the given functions?", choices: ["$$3-2x+1$$", "$$2\\left(3+x\\right)-1$$", "$$2\\left(3-x\\right)+1$$"], variabilization: {}}, {id: "comp2a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7-2x"], dependencies: ["comp2a-h2"], title: "Simplify", text: "What do we get after rearranging and simplifying the above equation?", variabilization: {}}, ]; export {hints};