var hints = [{id: "addand18a-h1", type: "hint", dependencies: [], title: "Add", text: "Add the numerators and place the sum over the common denominator.", variabilization: {}}, {id: "addand18a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3+x$$"], dependencies: ["addand18a-h1"], title: "Numerator", text: "What do we get for the numerator after adding the two together?", variabilization: {}}, {id: "addand18a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{3+x}{4}$$"], dependencies: ["addand18a-h2"], title: "Final Answer", text: "What do we get after placing the sum over the common denominator?", variabilization: {}}, ]; export {hints};