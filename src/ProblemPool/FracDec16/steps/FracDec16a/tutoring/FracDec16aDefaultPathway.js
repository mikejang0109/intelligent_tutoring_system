var hints = [{id: "FracDec16a-h1", type: "hint", dependencies: [], title: "Isolate the term with x", text: "The first step is to move all the constant terms to one side."}, {id: "FracDec16a-h2", type: "hint", dependencies: ["FracDec16a-h1"], title: "Adding and Subtracting Fractions", text: "In order to add or subtract fractions, the fractions must have the same denominator."}, {id: "FracDec16a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["FracDec16a-h2"], title: "Finding an equivalent fraction for $$\\frac{1}{2}$$", text: "What number should I multiply to the numerator and denominator of $$\\frac{1}{2}$$ so that the equivalent fraction will have a denominator of 4?"}, {id: "FracDec16a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3/4"], dependencies: ["FracDec16a-h3"], title: "Adding and Subtracting Fractions", text: "What is (1/4)+(2/4)?", subHints: [{id: "FracDec16a-h4-s1", type: "hint", dependencies: [], title: "Adding and Subtracting Fractions", text: "When $$\\frac{adding}{subtracting}$$ fractions, the denominator stays the same."}]}, {id: "FracDec16a-h5", type: "hint", dependencies: ["FracDec16a-h4"], title: "Solving for x", text: "The next step is to multiply both sides by the reciprocal of the coefficient of x"}, {id: "FracDec16a-h6", type: "hint", dependencies: ["FracDec16a-h5"], title: "Definition of reciprocal", text: "The reciprocal of the fraction $$\\frac{a}{b}$$ is the fraction $$\\frac{b}{a}$$ such that $$\\frac{a}{b} \\frac{b}{a}=1$$"}, {id: "FracDec16a-h7", type: "hint", dependencies: ["FracDec16a-h6"], title: "Multiplying fractions", text: "When multiplying fractions, multiply the numerators together and the denominators together."}, ]; export {hints};