var hints = [{id: "quad1a-h1", type: "hint", dependencies: [], title: "Completing the Square", text: "To complete the square, we need to add a term to make the entire expression of the form $$a^2+\\left(2\\right) ab+b^2$$.", variabilization: {}}, {id: "quad1a-h2", type: "hint", dependencies: ["quad1a-h1"], title: "Completing the Square", text: "In this case, we want to add a term to $$\\left(6\\right) z^2-z$$ to make it a perfect square. Assume $$\\left(6\\right) z^2$$ is the $$a^2$$ term and -z is the 2ab term.", variabilization: {}}, {id: "quad1a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{24}$$"], dependencies: ["quad1a-h2"], title: "Completing the Square", text: "What term should we add to both sides of the equation to make this true?", variabilization: {}}, {id: "quad1a-h4", type: "hint", dependencies: ["quad1a-h3"], title: "Simplification", text: "Now that we added $$\\frac{1}{24}$$ to both sides, we get that $${\\left(\\sqrt{6} x-\\left(\\frac{\\sqrt{6}}{12}\\right)\\right)}^2=\\left(2\\right)+\\frac{1}{24}$$", variabilization: {}}, {id: "quad1a-h5", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["2/3, -1/2"], dependencies: ["quad1a-h4"], title: "Simplification", text: "By taking the square root of both sides, what two answers do we get for z?", variabilization: {}}, ]; export {hints};