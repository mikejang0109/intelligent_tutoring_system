var hints = [{id: "add20d-h1", type: "hint", dependencies: [], title: "Simplify Both Sides", text: "We want to start by simplifying both sides and comparing the simplified value."}, {id: "add20d-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["add20d-h1"], title: "Left Hand Side", text: "What does -(-16) evaluate to?", subHints: [{id: "add20d-h2-s1", type: "hint", dependencies: [], title: "Left Hand Side", text: "The notation -a is read as \"the opposite of a.\" Therefore, in the problem, we are asked to find the opposite of -16."}, {id: "add20d-h2-s2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["add20d-h2-s1"], title: "Left Hand Side", text: "What is the opposite of -16?"}]}, {id: "add20d-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-16"], dependencies: ["add20d-h1"], title: "Right Hand Side", text: "What does $$-|\\left(\\-1\\right)6|$$ evaluate to?", subHints: [{id: "add20d-h3-s1", type: "hint", dependencies: [], title: "Right Hand Side", text: "We know that $$|\\left(\\-1\\right)6|=distance$$ from -16 to $$0=16$$, so the opposite of $$|\\left(\\-1\\right)6|$$ is -16."}]}, {id: "add20d-h4", type: "hint", dependencies: ["add20d-h2", "add20d-h3"], title: "Comparing Numbers", text: "Now we are left to compare 16 and -16. Since 16 is to the right of -16 on the number line, we say $$16>-\\left(16\\right)$$. Therefore, $$-\\left(\\-1\\right)6>-|\\left(\\-1\\right)6|$$."}, ]; export {hints};