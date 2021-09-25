var hints = [{id: "general29a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: [], title: "Identifying the GCF", text: "Is there a GCF?", choices: ["YesINo"], variabilization: {}}, {id: "general29a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Trinomial"], dependencies: ["general29a-h1"], title: "Identifying Polynomial Type", text: "Is it a binomial, trinomial, or are there more than three terms?", choices: ["BinomialITrinomialIMore than 3"], variabilization: {}}, {id: "general29a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["general29a-h2"], title: "Checking for Perfect Squares", text: "Are a and c perfect squares?", choices: ["YesINo"], variabilization: {}}, {id: "general29a-h4", type: "hint", dependencies: ["general29a-h3"], title: "Trial and Error", text: "Since there is no GCF, use trial and error or the \"ac\" method to factor the expression.", variabilization: {}}, {id: "general29a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(\\left(2\\right) n-\\left(1\\right)\\right) \\left(n+\\left(7\\right)\\right)$$"], dependencies: ["general29a-h4"], title: "Factor Completely", text: "What is the expression when factored completely? Make sure to multiply and check.", variabilization: {}}, ]; export {hints};