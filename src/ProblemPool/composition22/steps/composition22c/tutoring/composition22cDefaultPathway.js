var hints = [{id: "composition22c-h1", type: "hint", dependencies: [], title: "Composition", text: "Remember that to solve f(f(-2)), we need to first find the value of f(-2), then plug that value back in to f(x).", variabilization: {}}, {id: "composition22c-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["composition22c-h1"], title: "Finding f(-2)", text: "To find f(-2), we need to plug in -2 for the x in the function f: (2(-2)**2)+1. What does this evaluate to?", subHints: [{id: "composition22c-h2-s1", type: "hint", dependencies: [], title: "Exponents", text: "Based off the Order of Operations, the first step is the exponent: $${\\left(-2\\right)}^2=4$$.", variabilization: {}}, {id: "composition22c-h2-s2", type: "hint", dependencies: ["composition22c-h2-s1"], title: "Multiplication", text: "Now, our expression reads $$\\left(2\\right) \\left(4\\right)+\\left(1\\right)$$. The next step is the multiplication: $$\\left(2\\right) \\left(4\\right)=8$$.", variabilization: {}}, {id: "composition22c-h2-s3", type: "hint", dependencies: ["composition22c-h2-s2"], title: "Addition", text: "Lastly, our expression is $$\\left(8\\right)+\\left(1\\right)$$, which is equal to 9.", variabilization: {}}], variabilization: {}}, {id: "composition22c-h3", type: "hint", dependencies: ["composition22c-h2"], title: "Finding f(f(-2))", text: "Our next step is to plug the value of f(-2) into f. In other words, we are evaluating f(9).", variabilization: {}}, {id: "composition22c-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["composition22c-h3"], title: "Finding f(f(-2))", text: "To find f(-2), we need to plug in -2 for the x in the function f: (2(-2)**2)+1. What does this evaluate to?", variabilization: {}}, ]; export {hints};