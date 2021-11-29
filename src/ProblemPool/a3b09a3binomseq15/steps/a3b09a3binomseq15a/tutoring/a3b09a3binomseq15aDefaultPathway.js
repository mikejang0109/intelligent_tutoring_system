var hints = [{id: "a3b09a3binomseq15a-h1", type: "hint", dependencies: [], title: "Equation", text: "Use the equation $$C(n,r)rx**n-$$ * $$y^r$$", variabilization: {}}, {id: "a3b09a3binomseq15a-h2", type: "hint", dependencies: ["a3b09a3binomseq15a-h1"], title: "Find r", text: "Since it is asking for the 10th term, $$r+1=6$$", variabilization: {}}, {id: "a3b09a3binomseq15a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["a3b09a3binomseq15a-h2"], title: "Solve For r", text: "What is r?", variabilization: {}}, {id: "a3b09a3binomseq15a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["a3b09a3binomseq15a-h3"], title: "Solve For n", text: "What is n?", variabilization: {}}, {id: "a3b09a3binomseq15a-h5", type: "hint", dependencies: ["a3b09a3binomseq15a-h4"], title: "Plug In Values", text: "Plug in all the values of n, r, x, and y into the equation and solve.", variabilization: {}}, {id: "a3b09a3binomseq15a-h6", type: "hint", dependencies: ["a3b09a3binomseq15a-h5"], title: "Solve C(n,r)", text: "C(n,r) can be converted to the equation (n!)/(r!(n-r)!)", variabilization: {}}, {id: "a3b09a3binomseq15a-h7", type: "hint", dependencies: ["a3b09a3binomseq15a-h6"], title: "Plug In Values", text: "Plug in the values of n and r into the equation that C(n,r) can be converted to", variabilization: {}}, {id: "a3b09a3binomseq15a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-10206"], dependencies: ["a3b09a3binomseq15a-h7"], title: "Solve", text: "Combine all the coefficients of variables into one", variabilization: {}}, ]; export {hints};