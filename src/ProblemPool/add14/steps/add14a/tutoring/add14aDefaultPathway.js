var hints = [{id: "add14a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: [], title: "Seeing if the Signs Are Different", text: "Are the signs of the two terms different?", choices: ["Yes", "No"]}, {id: "add14a-h2", type: "hint", dependencies: ["add14a-h1"], title: "First Step to Find the Value of the Expression", text: "Since 31 and 19 have the same sign, we add 31 to 19."}, {id: "add14a-h3", type: "hint", dependencies: ["add14a-h2"], title: "Sign of the Answer", text: "The answer will be negative because there are only negatives"}, {id: "add14a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-50"], dependencies: ["add14a-h3"], title: "Calculating the Value of the Expression", text: "What is $$-\\left(\\left(31\\right)+\\left(19\\right)\\right)$$?"}, ]; export {hints};