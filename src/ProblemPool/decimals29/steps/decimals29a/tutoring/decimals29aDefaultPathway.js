var hints = [{id: "decimals29a-h1", type: "hint", dependencies: [], title: "Locate", text: "Locate the given place value and mark it or highlight it."}, {id: "decimals29a-h2", type: "hint", dependencies: ["decimals29a-h1"], title: "Digits to the Right", text: "Underline the value to the right of the highlighted or marked value."}, {id: "decimals29a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["no"], dependencies: ["decimals29a-h2"], title: "Value", text: "Is this value greater than or equal to 5?", choices: ["yes", "no"]}, {id: "decimals29a-h4", type: "hint", dependencies: ["decimals29a-h3"], title: "Add", text: "If the underlined digit is not greater than or equal to 5, we will not need to add one to the digit in the given place value."}, {id: "decimals29a-h5", type: "hint", dependencies: ["decimals29a-h4"], title: "Remove", text: "Rewrite the number, removing all digits to the right of the rounding digit."}, ]; export {hints};