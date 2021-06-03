var hints = [{id: "decimals8a-h1", type: "hint", dependencies: [], title: "Decimal Point", text: "Put a decimal point where it says \"and\"", variabilization: {}}, {id: "decimals8a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["13"], dependencies: ["decimals8a-h1"], title: "Before Decimal", text: "What is the number before the decimal point?", variabilization: {}}, {id: "decimals8a-h3", type: "hint", dependencies: ["decimals8a-h2"], title: "Decimal Place", text: "find the decimal place in the word", variabilization: {}}, {id: "decimals8a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["thousandths"], dependencies: ["decimals8a-h3"], title: "Decimal Place Value", text: "What is the decimal place in the word?", choices: ["tenth", "hundredths", "thousandths", "ten-thousandths"], variabilization: {}}, {id: "decimals8a-h5", type: "hint", dependencies: ["decimals8a-h4"], title: "After Decimal", text: "translate the words after the \"and\" into the number to the right of the decimal point, putting the last digit in the thousandths place", variabilization: {}}, {id: "decimals8a-h6", type: "hint", dependencies: ["decimals8a-h5"], title: "Adding Placeholder 0s", text: "Fill in zeros for empty place holders as needed.", variabilization: {}}, ]; export {hints};