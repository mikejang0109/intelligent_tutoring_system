var hints = [{id: "RecCord9a-h1", type: "hint", dependencies: [], title: "Distance Formula", text: "Given endpoints $$(x_1,y_1)$$, and $$(x_2,y_2)$$, the distance between two points is given by $$\\sqrt{{\\left(x_2-x_1\\right)}^2+{\\left(y_2-y_1\\right)}^2}$$.", variabilization: {}}, {id: "RecCord9a-h2", type: "hint", dependencies: ["RecCord9a-h1"], title: "Plug into the formula", text: "We can first calculate 2-(-3) and 3-(-1)", variabilization: {}}, {id: "RecCord9a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["RecCord9a-h2"], title: "Subtraction", text: "What is 2-(-3)?", variabilization: {}}, {id: "RecCord9a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["RecCord9a-h2"], title: "Subtraction", text: "What is 3-(-1)?", variabilization: {}}, {id: "RecCord9a-h5", type: "hint", dependencies: ["RecCord9a-h3", "RecCord9a-h4"], title: "Simplification", text: "We need to simplify the expression $${\\left(5\\right)}^2$$ + $${\\left(4\\right)}^2$$.", variabilization: {}}, {id: "RecCord9a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["25"], dependencies: ["RecCord9a-h5"], title: "Square", text: "What is $${\\left(5\\right)}^2$$?", variabilization: {}}, {id: "RecCord9a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["RecCord9a-h5"], title: "Square", text: "What is $${\\left(4\\right)}^2$$?", variabilization: {}}, {id: "RecCord9a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["41"], dependencies: ["RecCord9a-h6", "RecCord9a-h7"], title: "Addition", text: "What is $$\\left(25\\right)+\\left(16\\right)$$?", variabilization: {}}, {id: "RecCord9a-h9", type: "hint", dependencies: ["RecCord9a-h8"], title: "Extraction of square root", text: "The thid step is computing the principal square root.", variabilization: {}}, {id: "RecCord9a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["sqrt(41)"], dependencies: ["RecCord9a-h9"], title: "Square root", text: "What is the principal square root of 41?", variabilization: {}}, ]; export {hints};