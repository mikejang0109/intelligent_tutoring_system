var hints = [{id: "poly30a-h1", type: "hint", dependencies: [], title: "Problem Breakdown", text: "To solve this problem, we will break it up into two parts- the multiplication and the subtraction.", variabilization: {}}, {id: "poly30a-h2", type: "hint", dependencies: ["poly30a-h1"], title: "Distributive Property Explanation", text: "The distributive property is defined as when you multiply a number by a sum or difference, you have to multiply each term of of the sum or difference by that number.", variabilization: {}}, {id: "poly30a-h3", type: "hint", dependencies: ["poly30a-h2"], title: "Solving Products", text: "Solve the most difficult product in the larger product in the beginning.", variabilization: {}}, {id: "poly30a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(16\\right) t^2-\\left(56\\right) t+\\left(49\\right)$$"], dependencies: ["poly30a-h3"], title: "Solving Products", text: "In this case, we will solve $${\\left(\\left(4\\right) t-\\left(7\\right)\\right)}^2$$ first. What is it equal to?", variabilization: {}}, {id: "poly30a-h5", type: "hint", dependencies: ["poly30a-h4"], title: "Solving Products", text: "Use FOIL (and the distributive property) to multiple by 4t by 4t-7 and -7 by 4t-7.", variabilization: {}}, {id: "poly30a-h6", type: "hint", dependencies: ["poly30a-h5"], title: "Solving Products", text: "Multiply $$\\left(16\\right) t^2-\\left(56\\right) t+\\left(49\\right)$$ by $$\\left(2\\right) t+\\left(1\\right)$$", variabilization: {}}, {id: "poly30a-h7", type: "hint", dependencies: ["poly30a-h6"], title: "Splitting Sums", text: "Split one of the $$\\frac{sums}{differences}$$ into its individual terms, to use the distributive property with.", variabilization: {}}, {id: "poly30a-h8", type: "hint", dependencies: ["poly30a-h7"], title: "Splitting Sums", text: "In this case, we will split the $$\\left(4\\right) x+\\left(1\\right)$$ into 4x and 1.", variabilization: {}}, {id: "poly30a-h9", type: "hint", dependencies: ["poly30a-h8"], title: "Multiplying Individual Terms", text: "Multiply each term from the split difference to the other $$\\frac{sum}{difference}$$.", variabilization: {}}, {id: "poly30a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(32\\right) t^3-\\left(100\\right) t^2+\\left(40\\right) t+\\left(38\\right)$$"], dependencies: ["poly30a-h9"], title: "Simplication", text: "Simplify like terms in the sum. Like terms are terms of the same degree. After simplification, what is the final polynomial result?", variabilization: {}}, ]; export {hints};