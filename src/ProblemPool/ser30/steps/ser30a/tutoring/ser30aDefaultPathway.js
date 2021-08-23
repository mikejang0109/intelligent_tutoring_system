var hints = [{id: "ser30a-h1", type: "hint", dependencies: [], title: "Identify $$a_1$$", text: "The first term is $$a_1=-1$$.", variabilization: {}}, {id: "ser30a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{4}$$"], dependencies: ["ser30a-h1"], title: "Identify r", text: "To find r, divide the 2nd term by the 1st term. What is $$r=\\frac{\\left(-\\frac{1}{4}\\right)}{-\\left(1\\right)}$$?", subHints: [{id: "ser30a-h2-s1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["T"], dependencies: [], title: "Confirm that $$-\\left(1\\right)<r<1$$", text: "Is $$-\\left(1\\right)<\\frac{1}{4}<1$$ T of F?", choices: ["T", "F"], variabilization: {}}], variabilization: {}}, {id: "ser30a-h3", type: "hint", dependencies: ["ser30a-h1", "ser30a-h2"], title: "Formula for the Sum of an Infinite Geometric Series", text: "Substitute values for $$a_1$$ and r into the formula: $$S=\\frac{a_1}{\\left(1\\right)-r}$$.", variabilization: {}}, {id: "ser30a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(4\\right)}{3}$$"], dependencies: ["ser30a-h3"], title: "Solve for S", text: "What is $$S=\\frac{-\\left(1\\right)}{\\left(1\\right)-\\frac{1}{4}}$$?", variabilization: {}}, {id: "ser30a-h5", type: "hint", dependencies: ["ser30a-h4"], title: "Sum of Infinite Geometric Series", text: "The sum of the $$infinite$$ geometric series is $$\\frac{-\\left(4\\right)}{3}$$.", variabilization: {}}, ]; export {hints};