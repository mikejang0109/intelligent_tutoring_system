var hints = [{id: "a4d2b33use33a-h1", type: "hint", dependencies: [], title: "Using PEMDAS", text: "The Order of Operations, PEMDAS, is Parenthese, Exponents, Multiplication, Division, Addition, and Subtraction.", variabilization: {}}, {id: "a4d2b33use33a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["a4d2b33use33a-h1"], title: "P-Parentheses", text: "Are there any parentheses?", choices: ["Yes", "No"], variabilization: {}}, {id: "a4d2b33use33a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["a4d2b33use33a-h2"], title: "First Operation", text: "What is 3-2?", variabilization: {}}, {id: "a4d2b33use33a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["a4d2b33use33a-h3"], title: "E-Exponents", text: "Are there any exponents?", choices: ["Yes", "No"], variabilization: {}}, {id: "a4d2b33use33a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["a4d2b33use33a-h4"], title: "MD- Multiplication or Division", text: "Is there any multiplication or division?", choices: ["Yes", "No"], variabilization: {}}, {id: "a4d2b33use33a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["a4d2b33use33a-h5"], title: "Second Operation", text: "What is $$\\frac{30}{5}$$?", variabilization: {}}, {id: "a4d2b33use33a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["a4d2b33use33a-h6"], title: "Third Operation", text: "What is 10 times the result of the first operation?", variabilization: {}}, {id: "a4d2b33use33a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["a4d2b33use33a-h7"], title: "AS- Addition or Subtraction", text: "Is there any addition or subtraction?", choices: ["Yes", "No"], variabilization: {}}, {id: "a4d2b33use33a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["a4d2b33use33a-h8"], title: "Fourth Operation", text: "What is $$6+10$$?", variabilization: {}}, ]; export {hints};