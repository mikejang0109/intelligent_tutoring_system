var hints = [{id: "LinEqua23a-h1", type: "hint", dependencies: [], title: "Writing in slope-intercept form", text: "We begin using the point-slope formula with the slope m and the point."}, {id: "LinEqua23a-h2", type: "hint", dependencies: ["LinEqua23a-h1"], title: "The point-slope formula", text: "Given one point and the slope, the point-slope formula will lead to the equation of a line: $$y-y_1=m \\left(x-x_1\\right)$$."}, {id: "LinEqua23a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y-1/3=-1/3(x-1)"], dependencies: ["LinEqua23a-h2"], title: "Substitute", text: "Write the point-slope formula."}, {id: "LinEqua23a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y-1/3=(-1/3)x+1/3"], dependencies: ["LinEqua23a-h3"], title: "Parentheses", text: "Using the distributive property."}, {id: "LinEqua23a-h5", type: "hint", dependencies: ["LinEqua23a-h4"], title: "Eliminating denominators", text: "We should multiply through by 3, as no fractions are permitted in standard form."}, {id: "LinEqua23a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3y-1=-x+1"], dependencies: ["LinEqua23a-h5"], title: "Multiplication", text: "What is the result of $$3\\left(y-\\frac{1}{3}\\right)=\\operatorname{3}\\left(\\frac{-1}{3} x+\\frac{1}{3}\\right)$$?"}, {id: "LinEqua23a-h7", type: "hint", dependencies: ["LinEqua23a-h6"], title: "Moving terms", text: "Both variables should be moved to the left aside of the equal sign and the constants should be moved to the right."}, {id: "LinEqua23a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x+3y=2"], dependencies: ["LinEqua23a-h7"], title: "Writing in standard form", text: "Write the equation in standard form after moving terms."}, ]; export {hints};