var hints = [{id: "power21a-h1", type: "hint", dependencies: [], title: "Expanding Expressions", text: "Expand the function into polynomial form", variabilization: {}}, {id: "power21a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4x^4-12x^3+9x^2"], dependencies: ["power21a-h1"], title: "Checking your Expansion", text: "What did you get as the expanded expression?", variabilization: {}}, {id: "power21a-h3", type: "hint", dependencies: ["power21a-h2"], title: "Definition", text: "A coefficient is the numeric value that precedes a variable", variabilization: {}}, {id: "power21a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["power21a-h3"], title: "Finding the Leading Coefficient", text: "What is the leading coefficent?", variabilization: {}}, {id: "power21a-h5", type: "hint", dependencies: ["power21a-h4"], title: "Definition", text: "The degree is the value of the highest power a variable has", variabilization: {}}, {id: "power21a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["power21a-h3"], title: "Finding the Degree", text: "What is the degree?", variabilization: {}}, ]; export {hints};