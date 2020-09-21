var hints = [{id: "poly22a-h1", type: "hint", dependencies: [], title: "Perfect Square Trinomial Formula", text: "When a binomial is squared, the result is a perfect square trinomial. Use the formula: $x^2$ + 2ax + $a^2$"}, {id: "poly22a-h2", type: "hint", dependencies: ["poly22a-h1"], title: "Perfect Square Trinomial Formula", text: "Square the first term of the binomial."}, {id: "poly22a-h3", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["9y**2"], dependencies: ["poly22a-h2"], title: "Perfect Square Trinomial Formula", text: "What is the product?"}, {id: "poly22a-h4", type: "hint", dependencies: ["poly22a-h3"], title: "Perfect Square Trinomial Formula", text: "Square the last term of the binomial."}, {id: "poly22a-h5", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["36"], dependencies: ["poly22a-h4"], title: "Perfect Square Trinomial Formula", text: "What is the product?"}, {id: "poly22a-h6", type: "hint", dependencies: ["poly22a-h5"], title: "Perfect Square Trinomial Formula", text: "For the middle term of the trinomial, double the product of the two terms."}, {id: "poly22a-h7", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["-36y"], dependencies: ["poly22a-h6"], title: "Perfect Square Trinomial Formula", text: "What is the product?"}, {id: "poly22a-h8", type: "hint", dependencies: ["poly22a-h7"], title: "Combine Like Terms", text: "Add and simplify."}, ]; export {hints};