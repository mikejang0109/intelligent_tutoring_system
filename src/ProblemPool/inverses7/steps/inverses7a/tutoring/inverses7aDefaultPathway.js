var hints = [{id: "inverses7a-h1", type: "hint", dependencies: [], title: "Finding the Inverse", text: "The general process for finding an inverse is as follow: \\n Given a polynomial function, restrict the domain of a function that is not one-to-one and then find the inverse. \\n 1) Restrict the domain by determining a domain on which the original function is one-to-one. \\n 2) Replace f(x) with y. \\n 3) Interchange x and y. \\n 4) Solve for y, and rename the function or pair of function $$f^{-1\\left(x\\right)}$$. \\n 5) Revise the formula for $$f^{-1\\left(x\\right)}$$ by ensuring that the outputs of the inverse function correspond to the restricted domain of the original function. \\n However, note that in real-world applications, we do not swap the variables when finding inverses. Instead, we change which variable is considered to be the independent variable.", variabilization: {}}, {id: "inverses7a-h2", type: "hint", dependencies: ["inverses7a-h1"], title: "Domain", text: "Notice that in this question, r and V would not be meaningful when they are less than 0. Thus, the domain and range for them are from zero to $$\\infty$$.", variabilization: {}}, {id: "inverses7a-h3", type: "hint", dependencies: ["inverses7a-h2"], title: "Solve for r", text: "Make r the subject of the equation, $$V=\\frac{2}{3} p r^3$$.", variabilization: {}}, {id: "inverses7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{3V}{2p}$$"], dependencies: ["inverses7a-h3"], title: "Solve for r", text: "Divide the coefficient of $$r^3$$. What is $$r^3$$ equals to?", variabilization: {}}, {id: "inverses7a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\sqrt{3, \\frac{3V}{2p}}$$"], dependencies: ["inverses7a-h4"], title: "Solve for r", text: "Cube root both side to obtain r. What is r?", variabilization: {}}, {id: "inverses7a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3.63"], dependencies: ["inverses7a-h5"], title: "Evaluate r", text: "Substitute $$V=100$$ and $$p=3.14$$ and solve for r. Leave your answer in 3 significant figures.", variabilization: {}}, ]; export {hints};