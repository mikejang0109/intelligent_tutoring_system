var hints = [{id: "uni15a-h1", type: "hint", dependencies: [], title: "Identify", text: "Identify what you are solving for."}, {id: "uni15a-h2", type: "hint", dependencies: ["uni15a-h1"], title: "What Are You Solving For", text: "You are solving for the Phuong's speed on the flat street."}, {id: "uni15a-h3", type: "hint", dependencies: ["uni15a-h2"], title: "Make a Variable", text: "Create a variable to represent his speed on a flat street. Let the variable be x."}, {id: "uni15a-h4", type: "hint", dependencies: ["uni15a-h3"], title: "Time Elapsed", text: "Determine how much time each part of the journey took using subtraction."}, {id: "uni15a-h5", type: "hint", dependencies: ["uni15a-h4"], title: "Time Elapsed Answer", text: "10:00 PM to 11:15 PM is 1.25 hours. 11:15 PM to 11:45 PM is 0.5 hours long. So, he spent 1.25 hours biking on a flat street and 0.5 hours biking uphill."}, {id: "uni15a-h6", type: "hint", dependencies: ["uni15a-h5"], title: "Translate to Equation", text: "Translate the situation into an equation using the variable. Remember that $$distance=speed time$$."}, {id: "uni15a-h7", type: "hint", dependencies: ["uni15a-h6"], title: "The Equation", text: "Multiply the speeds by the time it takes for each respective part of the journey to get the equation $$\\left(1.25\\right) x+\\left(0.5\\right) \\left(0.6\\right) x=31$$ (this is the overall distance)."}, {id: "uni15a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["20"], dependencies: ["uni15a-h7"], title: "Solving the Equation", text: "After solving the equation, what do you get for x?", subHints: [{id: "uni15a-h8-s1", type: "hint", dependencies: [], title: "Solving the Equation", text: "To solve the equation $$\\left(1.25\\right) x+\\left(0.5\\right) \\left(0.6\\right) x=31$$ we follow these steps: 1.25x+0.3x=31-->1.55x=31-->x=20."}]}, ]; export {hints};