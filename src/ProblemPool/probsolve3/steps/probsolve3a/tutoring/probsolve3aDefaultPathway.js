var hints = [{id: "probsolve3a-h1", type: "hint", dependencies: [], title: "Translate words to expressions", text: "The first step is to express the amount the husband and wife earns as a mathematical expressions", variabilization: {}}, {id: "probsolve3a-h2", type: "hint", dependencies: ["probsolve3a-h1"], title: "Define the variable for husband", text: "Let h represent the amount husband earns", variabilization: {}}, {id: "probsolve3a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right) h$$"], dependencies: ["probsolve3a-h2"], title: "Write wife's earnings in terms of the husband's earnings", text: "What is twice the amount the husband earns?", variabilization: {}}, {id: "probsolve3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right) h-\\left(16000\\right)$$"], dependencies: ["probsolve3a-h3"], title: "Write wife's earnings in terms of the husband's earnings", text: "What is 16000 less than the previous answer?", variabilization: {}}, {id: "probsolve3a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right) h-\\left(16000\\right)$$"], dependencies: ["probsolve3a-h4"], title: "Write wife's earnings in terms of the husband's earnings", text: "How much does the wife earn?", variabilization: {}}, {id: "probsolve3a-h6", type: "hint", dependencies: ["probsolve3a-h5"], title: "Translate the problem into an equation", text: "The next step is to express their total earnings as a mathematical equation.", variabilization: {}}, {id: "probsolve3a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["110000"], dependencies: ["probsolve3a-h6"], title: "Total sum of earnings", text: "How much does the couple together earn per year? Write the answer without the dollar sign", variabilization: {}}, {id: "probsolve3a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$h+\\left(2\\right) h-\\left(16000\\right)=110000$$"], dependencies: ["probsolve3a-h7"], title: "Writing the equation", text: "How can we express \"husband's earning+wife's $$earning=110000\"$$ mathematically?", variabilization: {}}, {id: "probsolve3a-h9", type: "hint", dependencies: ["probsolve3a-h8"], title: "Solving the equation", text: "The last step is to solve for h", variabilization: {}}, {id: "probsolve3a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Add 16000, divide by 2"], dependencies: ["probsolve3a-h9"], title: "Solving the equation", text: "What should we do to both sides of the equation in order to isolate x?", choices: ["Divide by 2, add 16000", "Add 16000, divide by 2", "Subtract 110000", "none of the above"], variabilization: {}}, ]; export {hints};