var hints = [{id: "probsolve27a-h1", type: "hint", dependencies: [], title: "Define variables", text: "Give the first unknown number a variable (like x) and set the second number interms of x"}, {id: "probsolve27a-h2", type: "hint", dependencies: ["probsolve27a-h1"], title: "Setting an equation", text: "Based on the question if x is the first number then $$\\left(3\\right) x+\\left(3\\right)$$ would be the second number. Now create an equation representing the sum of the two numbers which equals -5"}, {id: "probsolve27a-h3", type: "hint", dependencies: ["probsolve27a-h2"], title: "Seperating constants", text: "The equation equals $$x+\\left(3\\right) x+\\left(3\\right)=-\\left(5\\right)$$. Now we will seperate the constant numbers to one side. Remeber if you subtract from one side you are also subtracting from the other side"}, {id: "probsolve27a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-8"], dependencies: ["probsolve27a-h3"], title: "Seperating constants", text: "what is -5-3"}, {id: "probsolve27a-h5", type: "hint", dependencies: ["probsolve27a-h4"], title: "Seperating variable", text: "The equation equals $$x+\\left(3\\right) x+\\left(3\\right)=-\\left(5\\right)$$. Now we will seperate the variables to one side. Remeber if you subtract from one side you are also subtracting from the other side"}, {id: "probsolve27a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4x"], dependencies: ["probsolve27a-h5"], title: "Seperating variable", text: "what is $$\\left(3\\right) x+\\left(1\\right) x$$"}, {id: "probsolve27a-h7", type: "hint", dependencies: ["probsolve27a-h6"], title: "Find x", text: "Now that we have seperated x and constants your equations should be $$\\left(4\\right) x=-\\left(8\\right)$$. Now find what is the value of x by dividing both sides by 4"}, {id: "probsolve27a-h8", type: "hint", dependencies: ["probsolve27a-h7"], title: "Number 2", text: "Now that you have found the first number which is x, plug that number back into the equation for the second number to get the value for the second number"}, ]; export {hints};