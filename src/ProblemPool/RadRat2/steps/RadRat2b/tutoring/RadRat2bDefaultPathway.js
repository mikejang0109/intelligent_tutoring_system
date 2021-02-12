var hints = [{id: "RadRat2b-h1", type: "hint", dependencies: [], title: "Inner Radical", text: "You can start of by simplifying the inner radical."}, {id: "RadRat2b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["RadRat2b-h1"], title: "Principal Square Root", text: "What is $$\\sqrt{81}$$?", subHints: [{id: "RadRat2b-h2-s1", type: "hint", dependencies: [], title: "Principal Square Root", text: "The principal square root of a is the nonnegative number that, when multiplied by itself, equals a. It is written as a radical expression, with a symbol called a radical over the term called the radicand: $$\\sqrt{a}$$."}]}, {id: "RadRat2b-s2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["RadRat2b-h2-s1"], title: "Principal Square Root", text: "What number multiplied by itself equals 81?"}, {id: "RadRat2b-h3", type: "hint", dependencies: ["RadRat2b-h2"], title: "Inner Radical", text: "Simlify the expression: $$\\sqrt{\\sqrt{81}}=\\sqrt{9}$$"}, {id: "RadRat2b-h4", type: "hint", dependencies: ["RadRat2b-h3"], title: "Principal Square Root", text: "The principal square root of a is the nonnegative number that, when multiplied by itself, equals a. It is written as a radical expression, with a symbol called a radical over the term called the radicand: $$\\sqrt{a}$$."}, {id: "RadRat2b-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["RadRat2b-h4"], title: "Principal Square Root", text: "What number multiplied by itself equals 9?"}, ]; export {hints};