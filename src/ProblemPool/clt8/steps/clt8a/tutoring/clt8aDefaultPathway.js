var hints = [{id: "clt8a-h1", type: "hint", dependencies: [], title: "", text: "Identify parts of the problem", variabilization: {}}, {id: "clt8a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["clt8a-h1"], title: "", text: "What is the mean $$μ$$?", subHints: [{id: "clt8a-h2-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: [], title: "", text: "Use the formula: μ $$=$$ $$\\frac{a+b}{2}$$ where a $$=$$ 1 and b $$=$$ 5", variabilization: {}}], variabilization: {}}, {id: "clt8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1.15"], dependencies: ["clt8a-h1"], title: "", text: "What is the standard deviation $$σ$$?", subHints: [{id: "clt8a-h3-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1.15"], dependencies: [], title: "", text: "Use the formula: σX $$=$$ $$\\sqrt{\\frac{{\\left(b-a\\right)}^2}{12}}$$ where a $$=$$ 1 and b $$=$$ 5", variabilization: {}}], variabilization: {}}, {id: "clt8a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["75"], dependencies: ["clt8a-h1"], title: "", text: "What is the sample size n?", variabilization: {}}, {id: "clt8a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.9"], dependencies: ["clt8a-h1"], title: "", text: "What is the percentile?", variabilization: {}}, {id: "clt8a-h6", type: "hint", dependencies: ["clt8a-h2", "clt8a-h3", "clt8a-h4", "clt8a-h5"], title: "", text: "Use invNorm in calculator", variabilization: {}}, {id: "clt8a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3.2"], dependencies: ["clt8a-h6"], title: "", text: "invNorm(percentile, mean, standard deviation/sqrt(n))", subHints: [{id: "clt8a-h7-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3.2"], dependencies: [], title: "", text: "invNorm(0.90,3,1.15/sqrt(75))", variabilization: {}}], variabilization: {}}, ]; export {hints};