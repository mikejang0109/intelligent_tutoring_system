var hints = [{id: "FunNota6c-h1", type: "hint", dependencies: [], title: "Evaluating functions", text: "Given the equation for a function, we should replace the input variable in the equation with the value provided and then calculate the result.", variabilization: {}}, {id: "FunNota6c-h2", type: "hint", dependencies: ["FunNota6c-h1"], title: "Replacement", text: "Replace the variable x with the $$a+h$$. We get the expression $${\\left(a+h\\right)}^2+3\\left(a+h\\right)-\\left(4\\right)$$.", variabilization: {}}, {id: "FunNota6c-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$a^2+\\left(2\\right) ah+h^2+\\left(3\\right) a+\\left(3\\right) h-\\left(4\\right)$$"], dependencies: ["FunNota6c-h2"], title: "Simplification", text: "Simplify the expression $${\\left(a+h\\right)}^2+3\\left(a+h\\right)-\\left(4\\right)$$. What do we get?", choices: ["$$a^2+\\left(3\\right) a+\\left(3\\right) h-\\left(4\\right)$$", "$$a^2+\\left(2\\right) ah+\\left(2\\right) h^2+\\left(6\\right) a+\\left(6\\right) h-\\left(4\\right)$$", "$$a^2+\\left(2\\right) ah+h^2+\\left(3\\right) a$$", "$$a^2+\\left(2\\right) ah+h^2+\\left(3\\right) a+\\left(3\\right) h-\\left(4\\right)$$"], variabilization: {}}, ]; export {hints};