var hints = [{id: "acff542gra2b-h1", type: "hint", dependencies: [], title: "Substitute", text: "We substitute $$x=7$$ and $$y=1$$ into both inequalities.", variabilization: {}}, {id: "acff542gra2b-h2", type: "hint", dependencies: ["acff542gra2b-h1"], title: "Substitute into First Equation", text: "$$3x+y>5$$ \\n $$3\\times7+1>5$$ \\n $$22>5$$", variabilization: {}}, {id: "acff542gra2b-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["T"], dependencies: ["acff542gra2b-h2"], title: "Substitute into First Equation", text: "Is the inequality above true?", choices: ["T", "F"], variabilization: {}}, {id: "acff542gra2b-h4", type: "hint", dependencies: ["acff542gra2b-h3"], title: "Substitute into Second Equation", text: "$$2x-y \\leq 10$$ \\n $$2\\times7-1 \\leq 10$$ \\n $$13 \\leq 10$$", variabilization: {}}, {id: "acff542gra2b-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["F"], dependencies: ["acff542gra2b-h4"], title: "Substitute into Second Equation", text: "Is the inequality above true?", choices: ["T", "F"], variabilization: {}}, {id: "acff542gra2b-h6", type: "hint", dependencies: ["acff542gra2b-h5"], title: "Solutions of a System of Equations", text: "(7,1) does not make both inequalities true. (7,1) is not a solution.", variabilization: {}}, ]; export {hints};