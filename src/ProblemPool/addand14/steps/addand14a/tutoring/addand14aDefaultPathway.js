var hints = [{id: "addand14a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute -4 for p, -2 for q, and 8 for r in the expression."}, {id: "addand14a-h2", type: "hint", dependencies: ["addand14a-h1"], title: "Substitute", text: "We get $$\\frac{\\left(\\-4\\right)+\\left(\\-2\\right)}{8}$$ after the substitution."}, {id: "addand14a-h3", type: "hint", dependencies: ["addand14a-h2"], title: "Numerator", text: "Add in the numerator first."}, {id: "addand14a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6"], dependencies: ["addand14a-h3"], title: "Numerator", text: "What do we get for the numerator after adding the two together?"}, {id: "addand14a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3/4"], dependencies: ["addand14a-h4"], title: "Simplify", text: "What do we get after simplifying the fraction?"}, ]; export {hints};