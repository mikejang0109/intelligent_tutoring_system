var hints = [{id: "Absolute5a-h1", type: "hint", dependencies: [], title: "Setting y to zero", text: "To find the x-intercept of a function, we start by setting the y value to 0, so we get the equation $$\\frac{1}{2} |x+\\left(4\\right)|-\\left(3\\right)=0$$."}, {id: "Absolute5a-h2", type: "hint", dependencies: ["Absolute5a-h1"], title: "Isolating the $$absoluate$$ value", text: "Then, we should isolate the part with $$absolute$$ value. We get the equation $$\\frac{1}{2} |x+\\left(4\\right)|=3$$. Multiply 2 to both sides, we get $$|x+\\left(4\\right)|=6$$."}, {id: "Absolute5a-h3", type: "hint", dependencies: ["Absolute5a-h2"], title: "Solving equation with $$absoluate$$ values", text: "We can break an equation with $$absolute$$ values down into two equations that we can solve independently. We notice that the $$absolute$$ value will be equal to 6 if the quantity inside the $$absolute$$ value is 6 or -6. Therefore, the two equations we get are $$x+\\left(4\\right)=6$$ and $$x+\\left(4\\right)=-\\left(6\\right)$$."}, {id: "Absolute5a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["Absolute5a-h3"], title: "Solving the first equation", text: "Solve the equation $$x+\\left(4\\right)=6$$. What is x?"}, {id: "Absolute5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-10"], dependencies: ["Absolute5a-h3"], title: "Solving the second equation", text: "Solve the equation $$x+\\left(4\\right)=-\\left(6\\right)$$. What is x?"}, ]; export {hints};