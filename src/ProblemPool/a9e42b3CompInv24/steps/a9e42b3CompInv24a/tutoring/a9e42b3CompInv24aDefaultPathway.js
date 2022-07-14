var hints = [{id: "a9e42b3CompInv24a-h1", type: "hint", dependencies: [], title: "Interchange the variables x and y", text: "Replace x with y and then y with x.", variabilization: {}}, {id: "a9e42b3CompInv24a-h2", type: "hint", dependencies: ["a9e42b3CompInv24a-h1"], title: "What's the equation after replacing x with y and y with x", text: "x $$=$$ $${\\left(6y-7\\right)}^{\\frac{1}{4}}$$", variabilization: {}}, {id: "a9e42b3CompInv24a-h3", type: "hint", dependencies: ["a9e42b3CompInv24a-h2"], title: "Solve for y", text: "Given x $$=$$ $${\\left(6y-7\\right)}^{\\frac{1}{4}}$$, solve for y. We cab rise both sides to the fourth power and get $$x^4=6y-7$$. Then we can isolate y by adding 7 both sides and dividing by 6 both sides which give y =(x**4 +7)/6. We can simplify it into $$y=\\frac{1}{6} x^4+\\frac{7}{6}$$ which is the final answer.", variabilization: {}}, ]; export {hints};