var hints = [{id: "general1a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: [], title: "Is there a greatest common factor?", text: "", choices: ["Yes", "No"], variabilization: {}}, {id: "general1a-h2", type: "hint", dependencies: ["general1a-h1"], title: "GCF", text: "Factor out the greatest common factor", variabilization: {}}, {id: "general1a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["binomial"], dependencies: ["general1a-h2"], title: "Is the polynomial a binomial, trinomial, or are there more than three terms?", text: "", choices: ["binomial", "trinomial", "other"], variabilization: {}}, {id: "general1a-h4", type: "hint", dependencies: ["general1a-h3"], title: "Binomial", text: "Since it's a binomial, check to see whether the expression is a sum or difference.", variabilization: {}}, {id: "general1a-h5", type: "hint", dependencies: ["general1a-h4"], title: "Difference of squares", text: "Factor as the product of conjugates. $$a^2-\\left(b^2\\right)=\\left(a-b\\right) \\left(a+b\\right)$$", variabilization: {}}, {id: "general1a-h6", type: "hint", dependencies: ["general1a-h5"], title: "Check", text: "Is it factored completely? Do the factors multiply back to the original polynomial?", variabilization: {}}, ]; export {hints};