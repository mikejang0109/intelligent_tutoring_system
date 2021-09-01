var hints = [{id: "spe12a-h1", type: "hint", dependencies: [], title: "Addition Binomial Square Formula", text: "We compare our expression to the addition binomial square formula: $${\\left(a+b\\right)}^2=a^2+\\left(2\\right) a b+b^2$$.", variabilization: {}}, {id: "spe12a-h2", type: "hint", dependencies: ["spe12a-h1"], title: "Compare the Binomial", text: "$${\\left(a+b\\right)}^2$$ $${\\left(\\left(3\\right) d+\\left(1\\right)\\right)}^2$$", variabilization: {}}, {id: "spe12a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(3\\right) d$$"], dependencies: ["spe12a-h2"], title: "Identify a", text: "What is a in the expression?", variabilization: {}}, {id: "spe12a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["spe12a-h3"], title: "Identify b", text: "What is b in the expression?", variabilization: {}}, {id: "spe12a-h5", type: "hint", dependencies: ["spe12a-h3", "spe12a-h4"], title: "Plug in the Terms", text: "Substitute $$a=\\left(3\\right) d$$ and $$b=1$$ into the addition binomial square formula: $${\\left(a+b\\right)}^2=a^2+\\left(2\\right) a b+b^2$$ $${\\left(\\left(3\\right) d+\\left(1\\right)\\right)}^2={\\left(\\left(3\\right) d\\right)}^2+\\left(2\\right) \\left(3\\right) d \\left(1\\right)+{\\left(1\\right)}^2$$", variabilization: {}}, {id: "spe12a-h6", type: "hint", dependencies: ["spe12a-h5"], title: "Simplify", text: "$$\\left(9\\right) d^2+\\left(6\\right) d+\\left(1\\right)$$", variabilization: {}}, ]; export {hints};