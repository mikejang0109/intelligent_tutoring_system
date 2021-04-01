var hints = [{id: "use31a-h1", type: "hint", dependencies: [], title: "Using PEMDAS", text: "The Order of Operations, PEMDAS, is Parenthese, Exponents, Multiplication, Division, Addition, and Subtraction."}, {id: "use31a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["use31a-h1"], title: "P-Parentheses", text: "Are there any parentheses?", choices: ["Yes", "No"]}, {id: "use31a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["use31a-h2"], title: "E-Exponents", text: "Are there any exponents?", choices: ["Yes", "No"]}, {id: "use31a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["use31a-h3"], title: "MD- Multiplication or Division", text: "Is there any multiplication or division?", choices: ["Yes", "No"]}, {id: "use31a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["use31a-h4"], title: "First Operation", text: "What is $$\\left(5\\right) \\left(2\\right)$$?"}, {id: "use31a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["use31a-h5"], title: "AS- Addition or Subtraction", text: "Is there any addition or subtraction?", choices: ["Yes", "No"]}, {id: "use31a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["use31a-h6"], title: "Second Operation", text: "What is 12-10?"}, ]; export {hints};