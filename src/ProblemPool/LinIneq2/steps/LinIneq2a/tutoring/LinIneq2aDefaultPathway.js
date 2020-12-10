var hints = [{id: "LinIneq2a-h1", type: "hint", dependencies: [], title: "Number of intervals", text: "We need two intervals, one for representing \"less than or equal to -1\", and another for \"greater than or equal to 1.\""}, {id: "LinIneq2a-h2", type: "hint", dependencies: [], title: "Or", text: "or means we should use the union symbol U (satisfy at least one OR the other condition)"}, {id: "LinIneq2a-h3", type: "hint", dependencies: ["LinIneq2a-h1"], title: "First interval endpoints", text: "The two endpoints for the interval \"less than or equal to -1\" are $$-\\infty$$ and -1."}, {id: "LinIneq2a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["("], dependencies: ["LinIneq2a-h3"], title: "First interval symbol", text: "Should we use parenthesis or bracket for the negative infinity?", choices: ["(", "["]}, {id: "LinIneq2a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["]"], dependencies: ["LinIneq2a-h3"], title: "First interval symbol", text: "Should we use parenthesis or bracket for the -1?", choices: [")", "]"]}, {id: "LinIneq2a-h6", type: "hint", dependencies: ["LinIneq2a-h1"], title: "Second interval endpoints", text: "The two endpoints for the interval \"greater than or equal to b\" are 1 and inf."}, {id: "LinIneq2a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["["], dependencies: ["LinIneq2a-h6"], title: "Second interval symbol", text: "Should we use parenthesis or bracket for the 1?", choices: ["(", "["]}, {id: "LinIneq2a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: [")"], dependencies: ["LinIneq2a-h6"], title: "Second interval symbol", text: "Should we use parenthesis or bracket for the infinity?", choices: [")", "]"]}, ]; export {hints};