var hints = [{id: "general14a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["no"], dependencies: [], title: "Is there a greatest common factor?", text: "", choices: ["Yes", "No"], variabilization: {}}, {id: "general14a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["other"], dependencies: ["general14a-h1"], title: "Is the polynomial a binomial, trinomial, or are there more than three terms?", text: "", choices: ["binomial", "trinomial", "other"], variabilization: {}}, {id: "general14a-h3", type: "hint", dependencies: ["general14a-h2"], title: "More than three terms", text: "Since there are more than three terms, factor by grouping.", variabilization: {}}, {id: "general14a-h4", type: "hint", dependencies: ["general14a-h3"], title: "Grouping", text: "By grouping, you should be left have $$\\left(6\\right) a \\left(\\left(2\\right) b-\\left(1\\right)\\right)+\\left(5\\right) \\left(\\left(2\\right) b-\\left(1\\right)\\right)$$. Group together.", variabilization: {}}, {id: "general14a-h5", type: "hint", dependencies: ["general14a-h4"], title: "Check", text: "Is it factored completely? Do the factors multiply back to the original polynomial?", variabilization: {}}, ]; export {hints};