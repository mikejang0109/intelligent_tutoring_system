var hints = [{id: "a75d03cRecCord14a-h1", type: "hint", dependencies: [], title: "Distance Formula", text: "Given endpoints $$(x_1,y_1)$$, and $$(x_2,y_2)$$, the distance between two points is given by $$\\sqrt{{\\left(x_2-x_1\\right)}^2+{\\left(y_2-y_1\\right)}^2}$$ .", variabilization: {}}, {id: "a75d03cRecCord14a-h2", type: "hint", dependencies: ["a75d03cRecCord14a-h1"], title: "Plug into the formula", text: "We should first calculate 41-19 and 71-12.", variabilization: {}}, {id: "a75d03cRecCord14a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["22"], dependencies: ["a75d03cRecCord14a-h2"], title: "Subtraction", text: "What is 41-19?", variabilization: {}}, {id: "a75d03cRecCord14a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["59"], dependencies: ["a75d03cRecCord14a-h2"], title: "Subtraction", text: "What is 71-12?", variabilization: {}}, {id: "a75d03cRecCord14a-h5", type: "hint", dependencies: ["a75d03cRecCord14a-h3", "a75d03cRecCord14a-h4"], title: "Simplification", text: "We need to simplify the expression $${22}^2+{59}^2$$.", variabilization: {}}, {id: "a75d03cRecCord14a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["484"], dependencies: ["a75d03cRecCord14a-h5"], title: "Square", text: "What is $${22}^2$$?", variabilization: {}}, {id: "a75d03cRecCord14a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3481"], dependencies: ["a75d03cRecCord14a-h5"], title: "Square", text: "What is $${59}^2$$?", variabilization: {}}, {id: "a75d03cRecCord14a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3965"], dependencies: ["a75d03cRecCord14a-h6", "a75d03cRecCord14a-h7"], title: "Addition", text: "Whta is $$484+3481$$?", variabilization: {}}, {id: "a75d03cRecCord14a-h9", type: "hint", dependencies: ["a75d03cRecCord14a-h8"], title: "Extraction of square root", text: "The thid step is computing the principal square root.", variabilization: {}}, {id: "a75d03cRecCord14a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\sqrt{3965}$$"], dependencies: ["a75d03cRecCord14a-h9"], title: "Square root", text: "What is the principal square root of 3965?", variabilization: {}}, ]; export {hints};