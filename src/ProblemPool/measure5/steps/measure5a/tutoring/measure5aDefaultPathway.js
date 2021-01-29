var hints = [{id: "measure5a-h1", type: "hint", dependencies: [], title: "Add", text: "We will add the weights of the steaks to find the total weight of the steaks. We first add the ounces, then add the pounds."}, {id: "measure5a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["2 pounds, 22 ounces"], dependencies: ["measure5a-h1"], title: "Add", text: "What do we get after the addition?", choices: ["2 pounds, 20 ounces", "2 pounds", "2 pounds, 22 ounces"]}, {id: "measure5a-h3", type: "hint", dependencies: ["measure5a-h2"], title: "Convert", text: "We then need to convert 22 ounces to pounds and ounces."}, {id: "measure5a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["1 pound, 6 ounces"], dependencies: ["measure5a-h3"], title: "Convert", text: "What do we get after the conversion?", choices: ["1 pound, 8 ounces", "1 pound, 3 ounces", "1 pound, 6 ounces"]}, {id: "measure5a-h5", type: "hint", dependencies: ["measure5a-h4"], title: "Add", text: "We then need to add 2 pounds with 1 pound, 6 ounces."}, {id: "measure5a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["3 pounds, 6 ounces"], dependencies: ["measure5a-h5"], title: "Add", text: "What do we get after the addition?", choices: ["3 pounds, 6 ounces", "3 pounds, 3 ounces", "2 pounds, 6 ounces", "3 pounds"]}, ]; export {hints};