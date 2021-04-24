var hints = [{id: "exp20d-h1", type: "hint", dependencies: [], title: "Converting to Standard Notation", text: "To convert a number in scientific notation to standard notation, simply reverse the process. Move the decimal n places to the right if n is positive or n places to the left if n is negative and add zeros as needed. Remember, if n is positive, the value of the number is greater than 1, and if n is negative, the value of the number is less than one.", variabilization: {}}, {id: "exp20d-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Left"], dependencies: ["exp20d-h1"], title: "Moving the Decimal", text: "In which direction do you have to move the decimal?", choices: ["Left", "Right"], variabilization: {}}, {id: "exp20d-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["exp20d-h2"], title: "Moving the Decimal", text: "How many places to the left do you need to move the decimal?", variabilization: {}}, ]; export {hints};