var hints = [{id: "add2dfegeneral6a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["no"], dependencies: [], title: "Is there a greatest common factor?", text: "", choices: ["Yes", "No"], variabilization: {}}, {id: "add2dfegeneral6a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["trinomial"], dependencies: ["add2dfegeneral6a-h1"], title: "Is the polynomial a binomial, trinomial, or are there more than three terms?", text: "", choices: ["Binomial", "Trinomial", "Other"], variabilization: {}}, {id: "add2dfegeneral6a-h3", type: "hint", dependencies: ["add2dfegeneral6a-h2"], title: "Trinomial", text: "Since it's a trinomial, check to see whether the expression is in the form of $$x^2+bx+x$$ or $${ax}^2+bx+c$$", variabilization: {}}, {id: "add2dfegeneral6a-h4", type: "hint", dependencies: ["add2dfegeneral6a-h3"], title: "$${ax}^2+bx+c$$", text: "Since a and c are squares, check if it fits the trinomial square pattern", variabilization: {}}, {id: "add2dfegeneral6a-h5", type: "hint", dependencies: ["add2dfegeneral6a-h4"], title: "Trinomial square pattern", text: "The expression fits the square pattern $${\\left(a+b\\right)}^2=a^2+2ab+b^2$$", variabilization: {}}, {id: "add2dfegeneral6a-h6", type: "hint", dependencies: ["add2dfegeneral6a-h5"], title: "Check", text: "Is it factored completely? Do the factors multiply back to the original polynomial?", variabilization: {}}, ]; export {hints};