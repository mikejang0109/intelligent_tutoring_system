var hints = [{id: "uni8a-h1", type: "hint", dependencies: [], title: "Identify", text: "Identify what you are solving for."}, {id: "uni8a-h2", type: "hint", dependencies: ["uni8a-h1"], title: "What Are You Solving For", text: "You are solving for the time it takes the two drivers to become 429 miles apart."}, {id: "uni8a-h3", type: "hint", dependencies: ["uni8a-h2"], title: "Make a Variable", text: "Create a variable to represent the time that it takes the drivers to become 429 miles apart. Let the variable be x."}, {id: "uni8a-h4", type: "hint", dependencies: ["uni8a-h3"], title: "Translate to Equation", text: "Translate the situation into an equation using variable you named. Remeber that the time two drivers drived are the same, but the directions are different, and the distance equals speed*time."}, {id: "uni8a-h5", type: "hint", dependencies: ["uni8a-h4"], title: "The Equation", text: "Multiply the speed of the drivers by the time to get that $$\\left(75\\right) x+\\left(68\\right) x=429$$ (since they are moving away from each other)."}, {id: "uni8a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["uni8a-h5"], title: "Solving the Equation", text: "After solving the equation, what do you get for x?", subHints: [{id: "uni8a-h6-s1", type: "hint", dependencies: [], title: "Solving the Equation", text: "To solve the equation $$\\left(75\\right) x+\\left(68\\right) x=429$$ we follow these steps: 75x+68x=429-->143x=429-->x=3."}]}, ]; export {hints};