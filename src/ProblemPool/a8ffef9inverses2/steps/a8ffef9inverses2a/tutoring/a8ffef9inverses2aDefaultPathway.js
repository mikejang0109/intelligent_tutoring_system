var hints = [{id: "a8ffef9inverses2a-h1", type: "hint", dependencies: [], title: "Transformation", text: "This is a transformation of the basic cubic toolkit function, and based on our knowledge of that function, we know it is one-to-one. Solve for the inverse by solving for x.", variabilization: {}}, {id: "a8ffef9inverses2a-h2", type: "hint", dependencies: ["a8ffef9inverses2a-h1"], title: "Finding the Inverse", text: "The general procedure for finding an inverse is to: \\n 1) Replace f(x) with y. \\n 2) Interchange x and y. \\n 3) Solve for y, and rename the function $$f^{-1\\left(x\\right)}$$", variabilization: {}}, {id: "a8ffef9inverses2a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$y=\\left(5\\right) x^3+\\left(1\\right)$$"], dependencies: ["a8ffef9inverses2a-h2"], title: "Replace f(x) with y", text: "What does the equation look like after replacing f(x) with y?", choices: ["$$y=\\left(5\\right) x^3+\\left(1\\right)$$", "$$x=\\left(5\\right) x^3+\\left(1\\right)$$", "$$x=\\left(5\\right) y^3+\\left(1\\right)$$"], variabilization: {}}, {id: "a8ffef9inverses2a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x=\\left(5\\right) y^3+\\left(1\\right)$$"], dependencies: ["a8ffef9inverses2a-h3"], title: "Interchange x and y", text: "What does the equation look like after interchanging x and y.", choices: ["$$y=\\left(5\\right) x^3+\\left(1\\right)$$", "$$x=\\left(5\\right) x^3+\\left(1\\right)$$", "$$x=\\left(5\\right) y^3+\\left(1\\right)$$"], variabilization: {}}, {id: "a8ffef9inverses2a-h5", type: "hint", dependencies: ["a8ffef9inverses2a-h4"], title: "Solve for y", text: "Make y the subject.", variabilization: {}}, {id: "a8ffef9inverses2a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(5\\right) y^3=x-1$$"], dependencies: ["a8ffef9inverses2a-h5"], title: "Solve for y", text: "Shift all terms that does not have y to the same side. What does the equation look like now?", choices: ["$$\\left(5\\right) y^3=x-1$$", "$$\\left(5\\right) x^3=y-1$$", "$$\\left(5\\right) y^3+\\left(1\\right)=x$$"], variabilization: {}}, {id: "a8ffef9inverses2a-h7", type: "hint", dependencies: ["a8ffef9inverses2a-h6"], title: "Solve for y", text: "Divide by 5 to remove the coefficient from the y term.", variabilization: {}}, {id: "a8ffef9inverses2a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\sqrt[3]{ \\frac{x-\\left(1\\right)}{5}}$$"], dependencies: ["a8ffef9inverses2a-h7"], title: "Solve for y", text: "Cube root y so that y is now the subject. What is the y equals to?", variabilization: {}}, {id: "a8ffef9inverses2a-h9", type: "hint", dependencies: ["a8ffef9inverses2a-h8"], title: "Rename the function $$f^{-1\\left(x\\right)}$$", text: "Replace the y with $$f^{-1\\left(x\\right)}$$.", variabilization: {}}, ]; export {hints};