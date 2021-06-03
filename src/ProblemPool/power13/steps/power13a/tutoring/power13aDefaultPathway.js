var hints = [{id: "power13a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: [], title: "Verifying Power Function Form", text: "Is the function in the form $${kx}^p$$?", choices: ["Yes", "No"], variabilization: {}}, {id: "power13a-s1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["power13a-h1"], title: "Drawing Conclusions", text: "Does this mean it is a power function?", choices: ["Yes", "No"], variabilization: {}}, {id: "power13a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["power13a-s1"], title: "Verifying Polynomial Form", text: "Is the function in the form $${ax}^p$$ + $${bx}^p-\\left(1\\right)$$ + c?", choices: ["Yes", "No"], variabilization: {}}, ]; export {hints};