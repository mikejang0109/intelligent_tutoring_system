var hints = [{id: "FracDec19a-h1", type: "hint", dependencies: [], title: "Using Distributive Property", text: "The first step is to use distributive property to clear the fraction"}, {id: "FracDec19a-h2", type: "hint", dependencies: ["FracDec19a-h1"], title: "Definition of Distributive Property", text: "Distributive Property is the property such that $$a \\left(b+c\\right)=a b+a c$$ where a,b, and c are constants"}, {id: "FracDec19a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["FracDec19a-h2"], title: "Multiplying fractions and numbers", text: "What is (1/5)*15?", subHints: [{id: "FracDec19a-h3-s1", type: "hint", dependencies: [], title: "Multiplying fractions and numbers", text: "$$\\frac{1}{a} b$$ is the same thing as \"b divided by a\""}]}, {id: "FracDec19a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2"], dependencies: ["FracDec19a-h2"], title: "Multiplying fractions and numbers", text: "What is (1/5)*-10?", subHints: [{id: "FracDec19a-h4-s1", type: "hint", dependencies: [], title: "Multiplying fractions and numbers", text: "$$\\frac{1}{a} b$$ is the same thing as \"b divided by a\""}]}, {id: "FracDec19a-h5", type: "hint", dependencies: ["FracDec19a-h3", "FracDec19a-h4"], title: "Isolate terms with variables", text: "The next step is to move all the terms with variables to one side of the equation and all the constant terms to the other. By adding 2 to both sides, we get $$\\left(3\\right) x=3$$"}, {id: "FracDec19a-h6", type: "hint", dependencies: ["FracDec19a-h5"], title: "Solving for x", text: "The next step is to multiply both sides of the equation by the reciprocal of the coefficient of x."}, {id: "FracDec19a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2021-01-03 00:00:00"], dependencies: ["FracDec19a-h6"], title: "Reciprocal of 3", text: "What is the reciprocal of 3?"}, {id: "FracDec19a-h8", type: "hint", dependencies: ["FracDec19a-h7"], title: "Solving for x", text: "Multiplying both sides by $$\\frac{1}{3}$$ we get $$x=1$$"}, ]; export {hints};