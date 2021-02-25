var hints = [{id: "LinIneq3b-h1", type: "hint", dependencies: [], title: "Addition Property", text: "The addition property of inequality: if $$a \\geq b$$, then $$a+c \\geq b+c$$"}, {id: "LinIneq3b-h2", type: "hint", dependencies: ["LinIneq3b-h1"], title: "Applying the Addition Property", text: "Our goal is to isolate x (have x on one side and numbers on the other side)"}, {id: "LinIneq3b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["LinIneq3b-h2"], title: "Applying the Addition Property", text: "What number should we add to both sides of the inequality to isolate x?"}, {id: "LinIneq3b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["LinIneq3b-h3"], title: "Left side", text: "What is the left side after adding 1?"}, {id: "LinIneq3b-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["LinIneq3b-h4"], title: "Right side", text: "What is the right side after adding 1?"}, ]; export {hints};