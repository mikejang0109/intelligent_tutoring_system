var hints = [{id: "FunNota9a-h1", type: "hint", dependencies: [], title: "Find input value", text: "When we know an output value and want to determine the input values that would produce that output value, we set the output equal to the function's formula and solve for the input.", variabilization: {}}, {id: "FunNota9a-h2", type: "hint", dependencies: ["FunNota9a-h1"], title: "Substitution", text: "Substitute $$h(p)=3$$ into the original $$h(p)=p^2+\\left(2\\right) p$$, and we get the equation $$3=p^2+\\left(2\\right) p$$, which we are going to solve next.", variabilization: {}}, {id: "FunNota9a-h3", type: "hint", dependencies: ["FunNota9a-h2"], title: "Factorization", text: "To solve $$3=p^2+\\left(2\\right) p$$, we can start by moving 3 to the other side: $$p^2+\\left(2\\right) p-\\left(3\\right)=0$$. We can now factor the expression into $$\\left(p+\\left(3\\right)\\right) \\left(p-\\left(1\\right)\\right)=0$$.", variabilization: {}}, {id: "FunNota9a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["-3,1"], dependencies: ["FunNota9a-h3"], title: "Solving Equations", text: "Solve the equation $$\\left(p+\\left(3\\right)\\right) \\left(p-\\left(1\\right)\\right)=0$$. What is p?", choices: ["-3,1", "-1,3", "-2,2", "No solution"], variabilization: {}}, ]; export {hints};