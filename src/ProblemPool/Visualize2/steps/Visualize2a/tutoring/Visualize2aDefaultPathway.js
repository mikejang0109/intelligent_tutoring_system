var hints = [{id: "Visualize2a-h1", type: "hint", dependencies: [], title: "Defining Simplified Fraction", text: "A fraction is considered simplified if there are no common factors in its numerator and denominator.", variabilization: {}}, {id: "Visualize2a-h2", type: "hint", dependencies: ["Visualize2a-h1"], title: "Finding Common Factors", text: "If we find the common factor of the numerator and the denominator, we can easily use the equivalent fractions property to simplify the fraction.", variabilization: {}}, {id: "Visualize2a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["Visualize2a-h2"], title: "Finding Common Factors", text: "What is the largerst common factor between 42 and 54?", subHints: [{id: "Visualize2a-h3-s1", type: "hint", dependencies: [], title: "Finding Common Factors", text: "We can rewrite 42 as $$\\left(6\\right) \\left(7\\right)$$ and 54 as $$\\left(6\\right) \\left(9\\right)$$, which tells us that the largest common factor is 6.", variabilization: {}}], variabilization: {}}, {id: "Visualize2a-h4", type: "hint", dependencies: ["Visualize2a-h3"], title: "Equivalent Fractions Property", text: "We can then use the equivalent fractions property to simpily the fraction, which states that if a, b, c are numbers where b≠0, c≠0, then $$\\frac{a}{b}=\\frac{a c}{b c}$$.", variabilization: {}}, {id: "Visualize2a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(7\\right)}{9}$$"], dependencies: ["Visualize2a-h4"], title: "Final Answer", text: "In the previous steps, we rewrite $$\\frac{-\\left(42\\right)}{54}$$ as $$\\frac{-\\left(\\left(6\\right) \\left(7\\right)\\right)}{\\left(6\\right) \\left(9\\right)}$$. Observe this fraction. What can we simplify it to?", variabilization: {}}, ]; export {hints};