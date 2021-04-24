var hints = [{id: "other19c-h1", type: "hint", dependencies: [], title: "Isolating the Absolute Value", text: "First, isolate the absolute value by adding 4 to both sides of the equation.", variabilization: {}}, {id: "other19c-h2", type: "hint", dependencies: ["other19c-h1"], title: "Writing Two Equations", text: "Then, rewrite the absolute value equation into two equations, $$3x-5=10$$ and $$3x-5=-10$$.", variabilization: {}}, {id: "other19c-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["other19c-h2"], title: "Solving Equation One", text: "$$3x-5=10$$, $$x=$$?", variabilization: {}}, {id: "other19c-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5/3"], dependencies: ["other19c-h2"], title: "Solving Equation Two", text: "$$3x-5=-10$$, $$x=$$?", variabilization: {}}, {id: "other19c-h5", type: "hint", dependencies: ["other19c-h3", "other19c-h4"], title: "Final Answer", text: "The answers to the first and second equations are the answer to the original absolute value equation.", variabilization: {}}, ]; export {hints};