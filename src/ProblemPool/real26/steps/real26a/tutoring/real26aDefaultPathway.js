var hints = [{id: "real26a-h1", type: "hint", dependencies: [], title: "Multiplication", text: "The first step is to simplify multiplication and division."}, {id: "real26a-h2", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["10"], dependencies: ["real26a-h1"], title: "Multiplication", text: "What is $2\\times5$?"}, {id: "real26a-h3", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["6"], dependencies: ["real26a-h1"], title: "Multiplication", text: "What is $3\\times2$?"}, {id: "real26a-h4", type: "hint", dependencies: ["real26a-h2", "real26a-h3"], title: "Addition", text: "The next step is to simplify addition and subtraction."}, {id: "real26a-h5", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["20"], dependencies: ["real26a-h4"], title: "Addition", text: "What is $10+6+4$?"}, ]; export {hints};