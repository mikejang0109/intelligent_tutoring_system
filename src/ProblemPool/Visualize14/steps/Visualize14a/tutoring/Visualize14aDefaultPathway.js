var hints = [{id: "Visualize14a-h1", type: "hint", dependencies: [], title: "Fraction Division", text: "To divide fractions, we multiply the first fraction by the reciprocal of the second."}, {id: "Visualize14a-h2", type: "hint", dependencies: ["Visualize14a-h1"], title: "Reciprocal", text: "The reciprocal of $$\\frac{a}{b}$$ is $$\\frac{b}{a}$$."}, {id: "Visualize14a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6/5"], dependencies: ["Visualize14a-h2"], title: "Reciprocal of the Second Fraction", text: "What is the reciprocal of $$\\frac{5}{6}$$?"}, {id: "Visualize14a-h4", type: "hint", dependencies: ["Visualize14a-h3"], title: "Multiplying Fractions", text: "The next step is to multiply the first fraction by the reciprocal of the second."}, {id: "Visualize14a-h5", type: "hint", dependencies: ["Visualize14a-h4"], title: "Determining the Sign", text: "Since the signs are the same, the product is positive."}, {id: "Visualize14a-h6", type: "hint", dependencies: ["Visualize14a-h5"], title: "Multiplying Fractions", text: "To multiply fractions, we multiply the numerators and the denominators. So the numerator is $$\\left(2\\right) \\left(6\\right)$$ and the denominator is $$\\left(3\\right) \\left(5\\right)$$. The next step is to simplify the fraction if possible."}, {id: "Visualize14a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["Visualize14a-h6"], title: "Checking for Common Factors", text: "Do $$\\left(2\\right) \\left(6\\right)$$ and $$\\left(3\\right) \\left(5\\right)$$ have any common factors?", choices: ["Yes", "No"]}, {id: "Visualize14a-h8", type: "hint", dependencies: ["Visualize14a-h7"], title: "Common Factors", text: "We will rewrite $$\\left(2\\right) \\left(6\\right)$$ and $$\\left(3\\right) \\left(5\\right)$$ as the product of primes and divide out the common factors from there."}, {id: "Visualize14a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(2\\right) \\left(2\\right) \\left(3\\right)$$"], dependencies: ["Visualize14a-h8"], title: "Rewriting the Numerator", text: "What is $$\\left(2\\right) \\left(6\\right)$$ written as the product of primes?", choices: ["$$\\left(2\\right) \\left(2\\right) \\left(3\\right)$$", "$$\\left(2\\right) \\left(3\\right) \\left(3\\right)$$", "$$\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(3\\right)$$", "$$\\left(2\\right) \\left(3\\right) \\left(5\\right)$$"]}, {id: "Visualize14a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(3\\right) \\left(5\\right)$$"], dependencies: ["Visualize14a-h8"], title: "Rewriting the Denominator", text: "What is $$\\left(3\\right) \\left(5\\right)$$ written as the product of primes?", choices: ["$$\\left(2\\right) \\left(2\\right) \\left(5\\right)$$", "$$\\left(2\\right) \\left(3\\right) \\left(5\\right)$$", "$$\\left(3\\right) \\left(5\\right)$$", "$$\\left(2\\right) \\left(25\\right)$$."]}, {id: "Visualize14a-h11", type: "hint", dependencies: ["Visualize14a-h9", "Visualize14a-h10"], title: "Dividing Common Factors", text: "We can now divide out the common factor 3 from both the top and the bottom, which gives us the fraction $$\\frac{\\left(2\\right) \\left(2\\right)}{5}=\\frac{4}{5}$$."}, ]; export {hints};