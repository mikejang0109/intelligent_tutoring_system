var hints = [{id: "rate18a-h1", type: "hint", dependencies: [], title: "The difference y_2-y_1", text: "We should first calculate the difference of the function evaluated at the two endpoints."}, {id: "rate18a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["52.148"], dependencies: ["rate18a-h1"], title: "The difference y_2-y_1", text: "What is the difference between k(3) and k(-1)?"}, {id: "rate18a-h3", type: "hint", dependencies: ["rate18a-h2"], title: "The difference x_2-x_1", text: "We should then calculate the difference of the two endpoints x values."}, {id: "rate18a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["rate18a-h3"], title: "The difference x_2-x_1", text: "What is the difference between 3 and -1?"}, {id: "rate18a-h5", type: "hint", dependencies: ["rate18a-h4"], title: "The ratio", text: "We should last find the ratio of the difference in y and the difference in x."}, {id: "rate18a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["13.037"], dependencies: ["rate18a-h5"], title: "The ratio", text: "What is the ratio of the difference in y and the difference in x?"}, ]; export {hints};