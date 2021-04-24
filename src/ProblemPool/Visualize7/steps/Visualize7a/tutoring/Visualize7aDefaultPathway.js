var hints = [{id: "Visualize7a-h1", type: "hint", dependencies: [], title: "Determining the Sign", text: "The first step is to find the sign of the product. Since the signs are the different, the product is negative.", variabilization: {}}, {id: "Visualize7a-h2", type: "hint", dependencies: ["Visualize7a-h1"], title: "Multiplying", text: "The next step is to multiply the two numerators and the two demoninators.", variabilization: {}}, {id: "Visualize7a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["80"], dependencies: ["Visualize7a-h2"], title: "Multiplying the Numerators", text: "What is $$\\left(10\\right) \\left(8\\right)$$?", variabilization: {}}, {id: "Visualize7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["420"], dependencies: ["Visualize7a-h2"], title: "Multiplying the Denominators", text: "What is $$\\left(28\\right) \\left(15\\right)$$?", variabilization: {}}, {id: "Visualize7a-h5", type: "hint", dependencies: ["Visualize7a-h3", "Visualize7a-h4"], title: "Putting Top and Bottom Together", text: "Putting our answers to the last two steps together, we get the fraction $$\\frac{-\\left(80\\right)}{420}$$. The next step is to simplify our answer if possible.", variabilization: {}}, {id: "Visualize7a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["Visualize7a-h5"], title: "Checking for Common Factors", text: "Is $$\\frac{-\\left(80\\right)}{420}$$ already in its simplest form?", choices: ["Yes", "No"], variabilization: {}}, {id: "Visualize7a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["20"], dependencies: ["Visualize7a-h6"], title: "Finding Largest Common Factor", text: "What is the largest common factor between the numerator and the denominator?", variabilization: {}}, {id: "Visualize7a-h8", type: "hint", dependencies: ["Visualize7a-h7"], title: "Simplifying", text: "To simplify the fraction, we can divide both the numerator and the denominator by their largest common factor.", variabilization: {}}, {id: "Visualize7a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["Visualize7a-h8"], title: "Dividing Numerator", text: "What is $$\\frac{80}{20}$$?", variabilization: {}}, {id: "Visualize7a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["21"], dependencies: ["Visualize7a-h8"], title: "Dividing Denominator", text: "What is $$\\frac{420}{20}$$?", variabilization: {}}, {id: "Visualize7a-h11", type: "hint", dependencies: ["Visualize7a-h9", "Visualize7a-h10"], title: "Final Answer", text: "So $$\\frac{-\\left(4\\right)}{21}$$ is our final answer.", variabilization: {}}, ]; export {hints};