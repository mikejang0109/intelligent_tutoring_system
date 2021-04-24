var hints = [{id: "linear2a-h1", type: "hint", dependencies: [], title: "Subtract", text: "Subtract 3x from both sides.", variabilization: {}}, {id: "linear2a-h2", type: "hint", dependencies: ["linear2a-h1"], title: "Divide", text: "Divide both sides by 5.", variabilization: {}}, {id: "linear2a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3/5"], dependencies: ["linear2a-h2"], title: "Slope", text: "What is the slope of the function?", variabilization: {}}, {id: "linear2a-s1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["linear2a-h3"], title: "Constant", text: "Is this slope constant for every increase in x?", choices: ["Yes", "No"], variabilization: {}}, {id: "linear2a-s2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["linear2a-s1"], title: "Meaning", text: "Does this mean it can be written as a linear function?", choices: ["Yes", "No"], variabilization: {}}, ]; export {hints};