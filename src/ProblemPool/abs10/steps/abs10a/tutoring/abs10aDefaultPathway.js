var hints = [{id: "abs10a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute 0 for y.", variabilization: {}}, {id: "abs10a-h2", type: "hint", dependencies: ["abs10a-h1"], title: "Isolate", text: "Isolate the absolute value on one side of the equation.", variabilization: {}}, {id: "abs10a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$-1=|x|$$"], dependencies: ["abs10a-h2"], title: "Isolate", text: "What do we get after the isolation?", choices: ["$$1=|x|$$", "$$0=|x|$$", "$$-1=|x|$$"], variabilization: {}}, {id: "abs10a-h4", type: "hint", dependencies: ["abs10a-h3"], title: "Absolute Value", text: "$$|x|$$ is always non-negative, so we cannot find x-intercepts in this case.", variabilization: {}}, ]; export {hints};