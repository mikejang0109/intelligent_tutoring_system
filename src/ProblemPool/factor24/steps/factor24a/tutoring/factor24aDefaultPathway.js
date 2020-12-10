var hints = [{id: "factor24a-h1", type: "hint", dependencies: [], title: "Difference of Squares Definition", text: "A difference of squares is an expression with the form $$n^2 x^2-b^2$$ where n and b are positive integers."}, {id: "factor24a-h2", type: "hint", dependencies: ["factor24a-h1"], title: "Integer Definition", text: "Integers are positive and negative whole numbers. For example, 4, 20, and -36 are integers, while 2.31 is not."}, {id: "factor24a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["19"], dependencies: ["factor24a-h2"], title: "Square Root of 361", text: "What is the square root of 361?"}, {id: "factor24a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["factor24a-h3"], title: "Square Root of 81", text: "What is the square root of 81?"}, {id: "factor24a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["factor24a-h4"], title: "Classifying the Expression", text: "Is the expression a difference of squares?", choices: ["Yes", "No"]}, {id: "factor24a-h6", type: "hint", dependencies: ["factor24a-h5"], title: "Factoring a Difference of Squares", text: "A difference of squares $$n^2 x^2-b^2$$ can be factored as (nx+b)(nx-b)."}, ]; export {hints};