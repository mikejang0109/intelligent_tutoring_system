var hints = [{id: "factor28a-h1", type: "hint", dependencies: [], title: "Perfect Square Trinomial", text: "A perfect square trinomial has the form $$a^2+2ab+b^2$$."}, {id: "factor28a-h2", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["5"], dependencies: ["factor28a-h1"], title: "Square Root of 25", text: "What is the square root of 25?"}, {id: "factor28a-h3", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["12"], dependencies: ["factor28a-h2"], title: "Square Root of 144", text: "What is the square root of 144?"}, {id: "factor28a-h4", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["-120"], dependencies: ["factor28a-h3"], title: "2ab", text: "What is the product 2ab?"}, {id: "factor28a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["factor28a-h4"], title: "Classifying the Expression", text: "Is the expression a perfect square trinomial?", choices: ["Yes", "No"]}, {id: "factor28a-h6", type: "hint", dependencies: ["factor28a-h5"], title: "Factoring a Perfect Square Trinomial", text: "A difference of squares with the form $$a^2+2ab+b^2$$ can be factored as $${\\left(a+b\\right)}^2$$."}, ]; export {hints};