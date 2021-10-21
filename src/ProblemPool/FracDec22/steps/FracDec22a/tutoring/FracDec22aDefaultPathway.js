var hints = [{id: "FracDec22a-h1", type: "hint", dependencies: [], title: "Clearing out the fractions", text: "The first step is to multiply both sides of the equation by a number that will clear out the fractions. In other words, we will multiply both sides of the equation by the least common multiple of the denominators.", variabilization: {}}, {id: "FracDec22a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["FracDec22a-h1"], title: "Finding the least common multiple", text: "What is the smallest number that is a multiple of 2 and 5?", variabilization: {}}, {id: "FracDec22a-h3", type: "hint", dependencies: ["FracDec22a-h2"], title: "Using Distributive Property", text: "The next step is to use distributive property to clear out the fractions", variabilization: {}}, {id: "FracDec22a-h4", type: "hint", dependencies: ["FracDec22a-h3"], title: "Definition of Distributive Property", text: "Distributive Property is the property such that $$a \\left(b+c\\right)=a b+a c$$, where a,b, and c are constants", variabilization: {}}, {id: "FracDec22a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["FracDec22a-h4"], title: "Multiplying numbers", text: "What is $$\\left(10\\right) \\frac{1}{2}$$?", variabilization: {}}, {id: "FracDec22a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["50"], dependencies: ["FracDec22a-h4"], title: "Multiplying numbers", text: "What is $$\\left(10\\right) \\left(5\\right)$$?", variabilization: {}}, {id: "FracDec22a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["FracDec22a-h4"], title: "Multiplying numbers", text: "What is $$\\left(10\\right) \\frac{1}{5}$$?", variabilization: {}}, {id: "FracDec22a-h8", type: "hint", dependencies: ["FracDec22a-h5", "FracDec22a-h6", "FracDec22a-h7"], title: "New Equation", text: "Now, we get the new equation $$\\operatorname{5}\\left(\\left(3\\right) v-\\left(6\\right)\\right)+\\left(50\\right)=2(11v-4)$$, and we need to solve for v.", variabilization: {}}, {id: "FracDec22a-h9", type: "hint", dependencies: ["FracDec22a-h8"], title: "Solving for v", text: "The first step is to distribute the parentheses. Multiplying, we get $$\\left(15\\right) v-\\left(30\\right)+\\left(50\\right)=22v-8$$, which is equivalent to $$\\left(15\\right) v+\\left(20\\right)=22v-8$$.", variabilization: {}}, {id: "FracDec22a-h10", type: "hint", dependencies: ["FracDec22a-h9"], title: "Solving for v", text: "The next step is to move all the terms with v to one side of the expression and all the constants to another. In other words, we want to isolate v by algebraically manipulate the equation.", variabilization: {}}, {id: "FracDec22a-h11", type: "hint", dependencies: ["FracDec22a-h10"], title: "Solving for v", text: "We can start by subtracting 15v from both sides, which gives us the equation $$20=7v-8$$.", variabilization: {}}, {id: "FracDec22a-h12", type: "hint", dependencies: ["FracDec22a-h11"], title: "Solving for v", text: "The next step is to add 8 to both sides of the equation, which gives us $$7v=28$$.", variabilization: {}}, {id: "FracDec22a-h13", type: "hint", dependencies: ["FracDec22a-h12"], title: "Solving for v", text: "The last step is to divide both sides of the equation by the coefficient of v, which gives us $$v=4$$.", variabilization: {}}, ]; export {hints};