var hints = [{id: "add29d-h1", type: "hint", dependencies: [], title: "Simplify Both Sides", text: "We want to start by simplifying both sides and comparing the simplified value."}, {id: "add29d-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["add29d-h1"], title: "Left Hand Side", text: "What does -(-9) evaluate to?", subHints: [{id: "add29d-h2-s1", type: "hint", dependencies: [], title: "Left Hand Side", text: "The notation -a is read as \"the opposite of a.\" Therefore, in the problem, we are asked to find the opposite of -9."}, {id: "add29d-h2-s2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["add29d-h2-s1"], title: "Left Hand Side", text: "What is the opposite of -9?"}]}, {id: "add29d-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-9"], dependencies: ["add29d-h1"], title: "Right Hand Side", text: "What does $$-|\\left(-9\\right)|$$ evaluate to?", subHints: [{id: "add29d-h3-s1", type: "hint", dependencies: [], title: "Right Hand Side", text: "We know that $$|\\left(-9\\right)|=distance$$ from -9 to $$0=9$$, so the opposite of $$|\\left(-9\\right)|$$ is -9."}]}, {id: "add29d-h4", type: "hint", dependencies: ["add29d-h2", "add29d-h3"], title: "Comparing Numbers", text: "Now we are left to compare 9 and -9. Since 9 is to the right of -9 on the number line, we say $$9>-\\left(9\\right)$$. Therefore, $$-\\left(-9\\right)>-|\\left(-9\\right)|$$."}, ]; export {hints};