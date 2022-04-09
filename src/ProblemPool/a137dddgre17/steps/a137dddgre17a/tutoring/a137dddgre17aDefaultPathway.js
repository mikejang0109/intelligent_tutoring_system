var hints = [{id: "a137dddgre17a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes and write the variables with exponents in expanded form. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "a137dddgre17a-h2", type: "hint", dependencies: ["a137dddgre17a-h1"], title: "Factor First Expression", text: "$$12m^2 n^3=3\\times2\\times2 m m n n n$$", variabilization: {}}, {id: "a137dddgre17a-h3", type: "hint", dependencies: ["a137dddgre17a-h2"], title: "Factor Second Expression", text: "$$30m^5 n^3=5\\times3\\times2 m m m m m n n n$$", variabilization: {}}, {id: "a137dddgre17a-h4", type: "hint", dependencies: ["a137dddgre17a-h2", "a137dddgre17a-h3"], title: "Identify Common Factors in each Column", text: "$$12m^2 n^3=3\\times2\\times2 m m n n n$$ $$30m^5 n^3=5\\times3\\times2 m m m m m n n n$$ 3, 2, m, m, n, n, and n are shared by both expressions.", variabilization: {}}, {id: "a137dddgre17a-h5", type: "hint", dependencies: ["a137dddgre17a-h4"], title: "Multiply Common Factors", text: "Bring down the 3, 2, m, m, n, n, and n, and then multiply. $$GCF=3\\times2 m m n n n$$", variabilization: {}}, {id: "a137dddgre17a-h6", type: "hint", dependencies: ["a137dddgre17a-h5"], title: "Multiply Common Factors", text: "$$GCF=6m^2 n^3$$", variabilization: {}}, ]; export {hints};