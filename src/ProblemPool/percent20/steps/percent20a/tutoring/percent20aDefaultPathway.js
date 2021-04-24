var hints = [{id: "percent20a-h1", type: "hint", dependencies: [], title: "Simple Interest Formula", text: "The formula for simple interest is $$I=Prt$$, with I being interest, P being the initial amount of money invested (also called principal), r being the rate, and t being the time.", variabilization: {}}, {id: "percent20a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["I"], dependencies: ["percent20a-h1"], title: "Variable in question", text: "What do we want to find? In other words, what variable are we solving for?", choices: ["P", "r", "t", "I"], variabilization: {}}, {id: "percent20a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.03"], dependencies: ["percent20a-h2"], title: "Finding the value for r", text: "What is the interest rate? Write as a decimal", variabilization: {}}, {id: "percent20a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["percent20a-h3"], title: "Finding the value for t", text: "How many years are we considering?", variabilization: {}}, {id: "percent20a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["950"], dependencies: ["percent20a-h4"], title: "Finding the value for P", text: "How much did Areli invest? Write without the dollar sign.", variabilization: {}}, ]; export {hints};