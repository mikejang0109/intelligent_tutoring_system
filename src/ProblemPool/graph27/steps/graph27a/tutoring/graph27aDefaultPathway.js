var hints = [{id: "graph27a-h1", type: "hint", dependencies: [], title: "Factoring Expressions", text: "Factor out $$x^4$$ out of the expression.", variabilization: {}}, {id: "graph27a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x^4(x^2-x-2)"], dependencies: ["graph27a-h1"], title: "Simplifying Expressions", text: "What is the simplified expression?", variabilization: {}}, {id: "graph27a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x-2)(x+1)"], dependencies: ["graph27a-h2"], title: "Factoring Expressions", text: "What is the factorization of $$x^2$$ -x -2?", variabilization: {}}, {id: "graph27a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2, 1. 0"], dependencies: ["graph27a-h3"], title: "Finding Zeroes", text: "What are the values of x that make the expression 0?", variabilization: {}}, {id: "graph27a-h5", type: "hint", dependencies: ["graph27a-h4"], title: "Definition of Multiplicity", text: "The multiplicity is the power to which each part of the expression is raised", variabilization: {}}, ]; export {hints};