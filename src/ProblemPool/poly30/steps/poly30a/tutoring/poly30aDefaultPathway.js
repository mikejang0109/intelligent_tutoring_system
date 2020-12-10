var hints = [{id: "poly30a-h1", type: "hint", dependencies: [], title: "Problem Breakdown", text: "To solve this problem, we will break it up into two parts- the multiplication and the subtraction."}, {id: "poly30a-h2", type: "hint", dependencies: ["poly30a-h1"], title: "Distributive Property Explanation", text: "The distributive property is defined as when you multiply a number by a sum or difference, you have to multiply each term of of the sum or difference by that number."}, {id: "poly30a-h3", type: "hint", dependencies: ["poly30a-h2"], title: "Solving Products", text: "Solve the most difficult product in the larger product in the beginning."}, {id: "poly30a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16t^2-56t+49"], dependencies: ["poly30a-h3"], title: "Solving Products", text: "In this case, we will solve $${\\left(4t-7\\right)}^2$$ first. What is it equal to?"}, {id: "poly30a-h5", type: "hint", dependencies: ["poly30a-h4"], title: "Solving Products", text: "Use FOIL (and the distributive property) to multiple by 4t by 4t-7 and -7 by 4t-7."}, {id: "poly30a-h6", type: "hint", dependencies: ["poly30a-h5"], title: "Solving Products", text: "Multiply $$16t^2-56t+49$$ by $$2t+1$$"}, {id: "poly30a-h7", type: "hint", dependencies: ["poly30a-h6"], title: "Splitting Sums", text: "Split one of the $$\\frac{sums}{differences}$$ into its individual terms, to use the distributive property with."}, {id: "poly30a-h8", type: "hint", dependencies: ["poly30a-h7"], title: "Splitting Sums", text: "In this case, we will split the $$4x+1$$ into 4x and 1."}, {id: "poly30a-h9", type: "hint", dependencies: ["poly30a-h8"], title: "Multiplying Individual Terms", text: "Multiply each term from the split difference to the other sum/difference."}, {id: "poly30a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["32t^3−100t^2+40t+38"], dependencies: ["poly30a-h9"], title: "Simplication", text: "Simplify like terms in the sum. Like terms are terms of the same degree. After simplification, what is the final polynomial result?"}, ]; export {hints};