var hints = [{id: "a9ad3f8applications29a-h1", type: "hint", dependencies: [], title: "Identify the Numbers", text: "The problem specifies there are two numbers.", variabilization: {}}, {id: "a9ad3f8applications29a-h2", type: "hint", dependencies: ["a9ad3f8applications29a-h1"], title: "Create Variables", text: "Name the two unknown numbers x and y to represent those quantities. Let $$x=one$$ number and $$y=second$$ number.", variabilization: {}}, {id: "a9ad3f8applications29a-h3", type: "hint", dependencies: ["a9ad3f8applications29a-h2"], title: "Translate Into System", text: "Since the sum of the two number is fifteen we can write $$x+y=15$$. Additionally one number is three less than the other so we can write $$x=y-3$$.", variabilization: {}}, {id: "a9ad3f8applications29a-h4", type: "hint", dependencies: ["a9ad3f8applications29a-h3"], title: "Solve the System", text: "Using substitution we can substitute $$x=y-3$$ into $$x+y=15$$ to solve for y. \\n $$x+y=15$$ \\n $$y-\\left(3\\right)+y=15$$ \\n $$\\left(2\\right) y-\\left(3\\right)=15$$ \\n $$\\left(2\\right) y=18$$", variabilization: {}}, {id: "a9ad3f8applications29a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["a9ad3f8applications29a-h4"], title: "Solving for y", text: "What is y?", variabilization: {}}, {id: "a9ad3f8applications29a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["a9ad3f8applications29a-h5"], title: "Solving for x", text: "Given $$y=9$$, plug the known value into one of the equations to solve for x. What is x?", variabilization: {}}, ]; export {hints};