var hints = [{id: "rational9a-h1", type: "hint", dependencies: [], title: "Factoring Trinomials", text: "Factor the trinomial in the numerator."}, {id: "rational9a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(y+5)(y+5)"], dependencies: ["rational9a-h1"], title: "Factoring Trinomials", text: "What are the two binomial factors of numerator?"}, {id: "rational9a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(y+5)(y+6)"], dependencies: ["rational9a-h2"], title: "Factoring Trinomials", text: "What are the two binomial factors of denominator?"}, {id: "rational9a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(y+5)"], dependencies: ["rational9a-h3"], title: "Common Factor", text: "What is the common factor?"}, {id: "rational9a-h5", type: "hint", dependencies: ["rational9a-h4"], title: "Common Factor", text: "Cancel the common factor from the numerator and denominator."}, {id: "rational9a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(y+5)"], dependencies: ["rational9a-h5"], title: "Simplifying Expressions", text: "What is remaining in the numerator?"}, {id: "rational9a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(y+6)"], dependencies: ["rational9a-h6"], title: "Simplifying Expressions", text: "What is remaining in the denominator?"}, {id: "rational9a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(y+5)/(y+6)"], dependencies: ["rational9a-h7"], title: "Simplifying Expressions", text: "What is the simplified expression?"}, ]; export {hints};