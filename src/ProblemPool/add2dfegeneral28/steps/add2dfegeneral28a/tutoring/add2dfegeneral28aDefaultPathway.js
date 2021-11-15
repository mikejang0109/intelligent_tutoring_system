var hints = [{id: "add2dfegeneral28a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: [], title: "Identifying the GCF", text: "Is there a GCF?", choices: ["YesINo"], variabilization: {}}, {id: "add2dfegeneral28a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Trinomial"], dependencies: ["add2dfegeneral28a-h1"], title: "Identifying Polynomial Type", text: "Is it a binomial, trinomial, or are there more than three terms?", choices: ["BinomialITrinomialIMore than 3"], variabilization: {}}, {id: "add2dfegeneral28a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["add2dfegeneral28a-h2"], title: "Checking for Perfect Squares", text: "Are a and c perfect squares?", choices: ["YesINo"], variabilization: {}}, {id: "add2dfegeneral28a-h4", type: "hint", dependencies: ["add2dfegeneral28a-h3"], title: "Trial and Error", text: "Since there is no GCF, use trial and error or the \"ac\" method to factor the expression.", variabilization: {}}, {id: "add2dfegeneral28a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(b-5)(b-12)"], dependencies: ["add2dfegeneral28a-h4"], title: "Factor Completely", text: "What is the expression when factored completely? Make sure to multiply and check.", variabilization: {}}, ]; export {hints};