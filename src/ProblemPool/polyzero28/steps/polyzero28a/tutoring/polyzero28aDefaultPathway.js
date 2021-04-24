var hints = [{id: "polyzero28a-h1", type: "hint", dependencies: [], title: "What terms contribute to the possible rational zeros?", text: "The only possible rational zeros of f(x) are the quotients of the factors of the constant term, 1, and the factors of the leading coefficient, 2.", variabilization: {}}, {id: "polyzero28a-h2", type: "hint", dependencies: ["polyzero28a-h1"], title: "What are the factors of the constant term, 1? From here on, these factors will be denoted as p, factors of the constant term.", text: "", variabilization: {}}, {id: "polyzero28a-s1", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["-1, 1"], dependencies: [], title: "What are the factors of the constant term, 1? (List them in ascending order as such: -2, -1, 1, ...)", text: "There are 2 in total. Consider that there are negative factors as well.", variabilization: {}}, {id: "polyzero28a-h3", type: "hint", dependencies: ["polyzero28a-h1"], title: "What are the factors of the leading coefficient, 2? From here on, these factors will be denoted as q, factors of the leading coefficient.", text: "", variabilization: {}}, {id: "polyzero28a-s1", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["-2, -1, 1, 2"], dependencies: [], title: "What are the factors of the leading coefficient, 2? (List them in ascending order as such: -2, -1, 1, ...)", text: "There are 4 in total. Consider that there are negative factors as well.", variabilization: {}}, {id: "polyzero28a-h4", type: "hint", dependencies: ["polyzero28a-h1"], title: "What are the different combination of rational zeros?", text: "Consider that a rational zero is of the form $$\\frac{p}{q}$$ where p are factors of the constant term and q are factors of the leading coefficient. It would help to list out all your p and q to write out the different combination.", variabilization: {}}, {id: "polyzero28a-h5", type: "hint", dependencies: ["polyzero28a-h4"], title: "What are the possible rational zeros with $$p=+-\\left(1\\right)$$?", text: "Recall what are the factors of 2, q, that you've previously found.", variabilization: {}}, {id: "polyzero28a-h6", type: "hint", dependencies: ["polyzero28a-h5"], title: "The combination of all q with p=+- 1 are $$+-\\left(\\frac{1}{1}\\right)$$, $$+-\\left(\\frac{1}{2}\\right)$$", text: "", variabilization: {}}, {id: "polyzero28a-h7", type: "hint", dependencies: ["polyzero28a-h4"], title: "Determine if the possible zeros are actual zeros by substituting these values for x in f(x).", text: "If the result of f(k) is non-zero, then there is a remainder and k is not a zero of f(x).", variabilization: {}}, {id: "polyzero28a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["polyzero28a-h7"], title: "What is the remainder of f(-1)?", text: "Substitute $$x=-1$$ into $$f(x)=\\left(2\\right) x^3+x^2-\\left(4\\right) x+\\left(1\\right)$$. The remainder is the result.", variabilization: {}}, {id: "polyzero28a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["polyzero28a-h7"], title: "What is the remainder of f(1)?", text: "Substitute $$x=1$$ into $$f(x)=\\left(2\\right) x^3+x^2-\\left(4\\right) x+\\left(1\\right)$$. The remainder is the result.", variabilization: {}}, {id: "polyzero28a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["polyzero28a-h7"], title: "What is the remainder of $$f{\\left(\\frac{\\left(-1\\right)}{2}\\right)}$$?", text: "Substitute $$x=\\frac{-\\left(1\\right)}{2}$$ into $$f(x)=\\left(2\\right) x^3+x^2-\\left(4\\right) x+\\left(1\\right)$$. The remainder is the result.", variabilization: {}}, {id: "polyzero28a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1/2"], dependencies: ["polyzero28a-h7"], title: "What is the remainder of $$f \\frac{1}{2}$$?", text: "Substitute $$x=\\frac{1}{2}$$ into $$f(x)=\\left(2\\right) x^3+x^2-\\left(4\\right) x+\\left(1\\right)$$. The remainder is the result.", variabilization: {}}, ]; export {hints};