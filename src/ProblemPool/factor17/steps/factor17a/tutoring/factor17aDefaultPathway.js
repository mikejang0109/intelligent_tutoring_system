var hints = [{id: "factor17a-h1", type: "hint", dependencies: [], title: "Split the expression", text: "Split -19n to -22n and 3n"}, {id: "factor17a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3n(2n+1)"], dependencies: ["factor17a-h1"], title: "Factor the expression", text: "What is the factoring of $$6n^2+3n$$"}, {id: "factor17a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-11(2n+1)"], dependencies: ["factor17a-h2"], title: "Factor the expression", text: "What is the factoring of -22n- 11"}, {id: "factor17a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(3n-11)(2n+1)"], dependencies: ["factor17a-h3"], title: "Factor the expression", text: "Factor out the common term of both $$2n+1$$"}, ]; export {hints};