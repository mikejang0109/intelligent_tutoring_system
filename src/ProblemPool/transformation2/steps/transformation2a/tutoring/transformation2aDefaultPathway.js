var hints = [{id: "transformation2a-h1", type: "hint", dependencies: [], title: "If f(s) is even then f(-s) should be equal to f(s)", text: ""}, {id: "transformation2a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["s^4 + 3s^2 + 7"], dependencies: ["transformation2a-h1"], title: "What is f(-s)", text: ""}, {id: "transformation2a-h3", type: "hint", dependencies: ["transformation2a-h2"], title: "If f(s) is odd then -f(-s) should be equal to f(s)", text: ""}, {id: "transformation2a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-s^4 - 3s^2 - 7"], dependencies: ["transformation2a-h3"], title: "What is -f(-s)", text: ""}, {id: "transformation2a-s1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Even"], dependencies: ["transformation2a-h4"], title: "Is the function even, odd, or neither?", text: ""}, ]; export {hints};