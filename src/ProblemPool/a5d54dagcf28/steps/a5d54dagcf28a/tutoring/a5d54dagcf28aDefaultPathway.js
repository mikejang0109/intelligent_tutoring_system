var hints = [{id: "a5d54dagcf28a-h1", type: "hint", dependencies: [], title: "Greatest Common Factor", text: "The first step is to rearrange our equation to have terms with common elements grouped together.", variabilization: {}}, {id: "a5d54dagcf28a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$r^2-r-3r+3$$"], dependencies: ["a5d54dagcf28a-h1"], title: "Greatest Common Factor", text: "What will our equation look like if we rearrange it to have common elements grouped together?", variabilization: {}}, {id: "a5d54dagcf28a-h3", type: "hint", dependencies: ["a5d54dagcf28a-h2"], title: "Greatest Common Factor", text: "The next step is to factor out the GCF from the first two groups of the equation.", variabilization: {}}, {id: "a5d54dagcf28a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$r \\left(r-1\\right)-3\\left(r-1\\right)$$"], dependencies: ["a5d54dagcf28a-h3"], title: "Greatest Common Factor", text: "What will our equation look like if we factor out the first two groups?", variabilization: {}}, {id: "a5d54dagcf28a-h5", type: "hint", dependencies: ["a5d54dagcf28a-h4"], title: "Greatest Common Factor", text: "The next step is to combine our two groups into one by finding the greatest common factor.", variabilization: {}}, {id: "a5d54dagcf28a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(r-1\\right) \\left(r-3\\right)$$"], dependencies: ["a5d54dagcf28a-h5"], title: "Greatest Common Factor", text: "What does our final equation look like once we factor out the item?", variabilization: {}}, ]; export {hints};