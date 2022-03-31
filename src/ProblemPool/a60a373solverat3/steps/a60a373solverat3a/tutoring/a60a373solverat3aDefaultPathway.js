var hints = [{id: "a60a373solverat3a-h1", type: "hint", dependencies: [], title: "Lowest Common Denominator", text: "The first step is to find the lowest common denominator.", variabilization: {}}, {id: "a60a373solverat3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(3x)(x-1)"], dependencies: ["a60a373solverat3a-h1"], title: "Lowest Common Denominator", text: "What is the lowest common denominator?", variabilization: {}}, {id: "a60a373solverat3a-h3", type: "hint", dependencies: ["a60a373solverat3a-h2"], title: "Distribute and multiply", text: "Distribute and multiply the lowest common denominator to all the terms.", variabilization: {}}, {id: "a60a373solverat3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3x=2x-2$$"], dependencies: ["a60a373solverat3a-h3"], title: "Distribute and multiply", text: "What is the result?", variabilization: {}}, {id: "a60a373solverat3a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=-2$$"], dependencies: ["a60a373solverat3a-h4"], title: "Simple Algebra", text: "Solve for x. Please input the answer as $$variable=answer$$.", variabilization: {}}, {id: "a60a373solverat3a-h6", type: "hint", dependencies: ["a60a373solverat3a-h5"], title: "Double Check", text: "Plug answers for a back into the original equation to make the sure answer is correct and not undefined at any point.", variabilization: {}}, ]; export {hints};