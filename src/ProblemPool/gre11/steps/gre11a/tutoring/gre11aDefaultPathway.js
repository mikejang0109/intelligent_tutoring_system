var hints = [{id: "gre11a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes and write the variables with exponents in expanded form. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "gre11a-h2", type: "hint", dependencies: ["gre11a-h1"], title: "Factor First Expression", text: "$$\\left(3\\right) x=\\left(3\\right) x$$", variabilization: {}}, {id: "gre11a-h3", type: "hint", dependencies: ["gre11a-h2"], title: "Factor Second Expression", text: "$$\\left(10\\right) x^2=\\left(5\\right) \\left(2\\right) x x$$", variabilization: {}}, {id: "gre11a-h4", type: "hint", dependencies: ["gre11a-h2", "gre11a-h3"], title: "Identify Common Factors in each Column", text: "$$\\left(3\\right) x=\\left(3\\right) x$$ $$\\left(10\\right) x^2=\\left(5\\right) \\left(2\\right) x x$$ x are shared by both expressions.", variabilization: {}}, {id: "gre11a-h5", type: "hint", dependencies: ["gre11a-h4"], title: "Multiply Common Factors", text: "$$GCF=x$$", variabilization: {}}, ]; export {hints};