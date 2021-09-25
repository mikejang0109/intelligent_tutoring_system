var hints = [{id: "general16a-h1", type: "hint", dependencies: [], title: "Identifying the GCF", text: "The expression contains a GCF (greatest common factor) which is $$\\left(4\\right) x^4$$. Factor out the GCF.", variabilization: {}}, {id: "general16a-h2", type: "hint", dependencies: ["general16a-h1"], title: "Identifying Polynomial Type", text: "Since there are two terms in the parantheses, the polynomial type is a binomial.", variabilization: {}}, {id: "general16a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(4\\right) x^4 \\left(x+\\left(3\\right)\\right)$$"], dependencies: ["general16a-h2"], title: "Factor Completely", text: "What is the expression when factored completely? Make sure to multiply and check.", variabilization: {}}, ]; export {hints};