var hints = [{id: "addand2a-h1", type: "hint", dependencies: [], title: "Subtract", text: "Subtract the numerators and place the difference over the common denominator.", variabilization: {}}, {id: "addand2a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-36"], dependencies: ["addand2a-h1"], title: "Numerator", text: "What do we get for the numerator after subtracting the two?", variabilization: {}}, {id: "addand2a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-36/24"], dependencies: ["addand2a-h2"], title: "Denominator", text: "What do we get after placing the difference over the common denominator?", variabilization: {}}, {id: "addand2a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3/2"], dependencies: ["addand2a-h3"], title: "Simplify", text: "What do we get after simplifying the above expression?", variabilization: {}}, ]; export {hints};