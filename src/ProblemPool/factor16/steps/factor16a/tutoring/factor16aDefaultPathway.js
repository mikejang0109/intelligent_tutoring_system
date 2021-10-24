var hints = [{id: "factor16a-h1", type: "hint", dependencies: [], title: "Split the expression", text: "Split 9a to 12a and -3a", variabilization: {}}, {id: "factor16a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right) a\\left(a+\\left(6\\right)\\right)$$"], dependencies: ["factor16a-h1"], title: "Factor the expression", text: "What is the factoring of $$\\left(2\\right) a^2$$ $$\\left(+12\\right) a$$", variabilization: {}}, {id: "factor16a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-3\\left(a+\\left(6\\right)\\right)$$"], dependencies: ["factor16a-h2"], title: "Factor the expression", text: "What is the factoring of -3a - 18", variabilization: {}}, {id: "factor16a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(a+\\left(6\\right)\\right) \\left(\\left(2\\right) a-\\left(3\\right)\\right)$$"], dependencies: ["factor16a-h3"], title: "Factor the expression", text: "Factor out the common term of both $$a+\\left(6\\right)$$", variabilization: {}}, ]; export {hints};