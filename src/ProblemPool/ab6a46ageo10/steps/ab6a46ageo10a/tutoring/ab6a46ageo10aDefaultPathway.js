var hints = [{id: "ab6a46ageo10a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-31"], dependencies: [], title: "Identify $$a_1$$", text: "What is the first term?", variabilization: {}}, {id: "ab6a46ageo10a-h2", type: "hint", dependencies: ["ab6a46ageo10a-h1"], title: "Find r", text: "The common ratio can be found by dividing the second term by the first term.", variabilization: {}}, {id: "ab6a46ageo10a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{2}$$"], dependencies: ["ab6a46ageo10a-h2"], title: "Find r", text: "What is $$\\frac{-\\left(16\\right)}{-\\left(32\\right)}$$?", variabilization: {}}, {id: "ab6a46ageo10a-h4", type: "hint", dependencies: ["ab6a46ageo10a-h3"], title: "Recursive Formula for Geometric Sequences", text: "Define $$a_1$$ and then substitute the common ratio into the recursive formula: $$a_n=r \\operatorname{a_{}}\\left(n-\\left(1\\right)\\right)$$.", variabilization: {}}, {id: "ab6a46ageo10a-h5", type: "hint", dependencies: ["ab6a46ageo10a-h4"], title: "Recursive Formula for Geometric Sequences", text: "The recursive formula for this geometric sequence is $$a_1=-32$$, $$a_n=\\frac{1}{2} \\operatorname{a_{}}\\left(n-\\left(1\\right)\\right)$$.", variabilization: {}}, ]; export {hints};