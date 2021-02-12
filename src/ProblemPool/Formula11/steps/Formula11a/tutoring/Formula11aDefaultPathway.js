var hints = [{id: "Formula11a-h1", type: "hint", dependencies: [], title: "Identify the Unknown", text: "The formula is $$I=Prt$$, and we want to find P."}, {id: "Formula11a-h2", type: "hint", dependencies: ["Formula11a-h1"], title: "Substitute", text: "Since we know that I=$5,600, r=4% (0.04), and $$t=7$$ years, we can substitute these values into the formula and get 5600=P(0.04)(7)."}, {id: "Formula11a-h3", type: "hint", dependencies: ["Formula11a-h2"], title: "Simplify", text: "Simplifying the equation, we get 5600=P*0.28."}, {id: "Formula11a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["20000"], dependencies: ["Formula11a-h3"], title: "Solve", text: "To solve for P, we can divide both sides of the equation by 0.28. What is P?"}, ]; export {hints};