var hints = [{id: "Multiply15a-h1", type: "hint", dependencies: [], title: "Read the Problem", text: "The first step is to make sure all the words and ideas are understood.", variabilization: {}}, {id: "Multiply15a-h2", type: "hint", dependencies: ["Multiply15a-h1"], title: "Identify the Unknown", text: "What we are asked to find is the number of yards lost.", variabilization: {}}, {id: "Multiply15a-h3", type: "hint", dependencies: ["Multiply15a-h2"], title: "Rephrase the Question", text: "To rephrase the questions, we are finding the value of three times a 15-yard penalty.", variabilization: {}}, {id: "Multiply15a-h4", type: "hint", dependencies: ["Multiply15a-h3"], title: "Translate into Math", text: "Translate the phrase into mathematical expression, we get $$\\left(3\\right) \\left(15\\right)$$.", variabilization: {}}, {id: "Multiply15a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["45"], dependencies: ["Multiply15a-h4"], title: "Simplify", text: "What is $$\\left(3\\right) \\left(15\\right)$$?", variabilization: {}}, ]; export {hints};