var hints = [{id: "sys2b-h1", type: "hint", dependencies: [], title: "Substitute", text: "We substitue $$x=-3$$ and $$y=4$$ into both equations.", variabilization: {}}, {id: "sys2b-h2", type: "hint", dependencies: ["sys2b-h1"], title: "Substitute into First Equation", text: "$$2x-6y=0$$ \\n $$2\\times-3-6\\times4=0$$ \\n $$-30=0$$", variabilization: {}}, {id: "sys2b-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["FALSE"], dependencies: ["sys2b-h2"], title: "Substitute into First Equation", text: "Is the equation above true?", choices: ["True", "False"], variabilization: {}}, {id: "sys2b-h4", type: "hint", dependencies: ["sys2b-h3"], title: "Solution to First Equation", text: "Therefore, (-3,4) does not satisfies the first equation.", variabilization: {}}, {id: "sys2b-h5", type: "hint", dependencies: ["sys2b-h4"], title: "Solutions of a System of Equations", text: "(-3,4) does not make both equations true. (-3,4) is not a solution.", variabilization: {}}, ]; export {hints};