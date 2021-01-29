var hints = [{id: "uni9a-h1", type: "hint", dependencies: [], title: "Identify", text: "Identify what you are solving for."}, {id: "uni9a-h2", type: "hint", dependencies: ["uni9a-h1"], title: "What Are You Solving For", text: "You are solving for the time it takes the two drivers to become 330 miles apart."}, {id: "uni9a-h3", type: "hint", dependencies: ["uni9a-h2"], title: "Make a Variable", text: "Create a variable to represent the time that it takes the drivers to become 330 miles apart. Let the variable be x."}, {id: "uni9a-h4", type: "hint", dependencies: ["uni9a-h3"], title: "Translate to Equation", text: "Translate the situation into an equation using variable you named. Remeber that the time two drivers drived are the same, but the directions are different, and the distance equals speed*time."}, {id: "uni9a-h5", type: "hint", dependencies: ["uni9a-h4"], title: "The Equation", text: "Multiply the speed of the drivers by the time to get that $$\\left(72\\right) x+\\left(76\\right) x=330$$ (since they are moving away from each other)."}, {id: "uni9a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2.23"], dependencies: ["uni9a-h5"], title: "Solving the Equation", text: "After solving the equation, what do you get for x? (don't forget the rounding)", subHints: [{id: "uni9a-h6-s1", type: "hint", dependencies: [], title: "Solving the Equation", text: "To solve the equation $$\\left(72\\right) x+\\left(76\\right) x=330$$ we follow these steps: 72x+76x=330-->148x=330-->x=2.23."}]}, ]; export {hints};