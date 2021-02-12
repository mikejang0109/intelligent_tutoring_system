var hints = [{id: "complex14a-h1", type: "hint", dependencies: [], title: "FOIL", text: "The first step is to FOIL the expressions."}, {id: "complex14a-h2", type: "hint", dependencies: ["complex14a-h1"], title: "FOIL - First", text: "Let's multiply the first terms in both expressions."}, {id: "complex14a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["complex14a-h2"], title: "FOIL - First", text: "What is $$-\\left(1\\right) -\\left(2\\right)$$?"}, {id: "complex14a-h4", type: "hint", dependencies: ["complex14a-h1"], title: "FOIL - Outside", text: "Now, multiply the outside terms in both expressions."}, {id: "complex14a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3i"], dependencies: ["complex14a-h4"], title: "FOIL - Outside", text: "What is $$-\\left(1\\right) \\left(3\\right) i$$?"}, {id: "complex14a-h6", type: "hint", dependencies: ["complex14a-h1"], title: "FOIL - Inside", text: "Next, multiply the inside terms in both expressions."}, {id: "complex14a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-4i"], dependencies: ["complex14a-h6"], title: "FOIL - Inside", text: "What is $$\\left(2\\right) i -\\left(2\\right)$$?"}, {id: "complex14a-h8", type: "hint", dependencies: ["complex14a-h1"], title: "FOIL - Last", text: "Finally, we can multiply the last terms in both expressions."}, {id: "complex14a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6"], dependencies: ["complex14a-h8"], title: "FOIL - Last", text: "What is $$\\left(2\\right) i \\left(3\\right) i$$?", subHints: [{id: "complex14a-h9-s1", type: "hint", dependencies: [], title: "FOIL - Last", text: "Because i is the square root of -1, when we multiply (3i)(2i), the i is squared and becomes -1. So, (3i)(2i) becomes (6)(-1), or -6."}]}, {id: "complex14a-h10", type: "hint", dependencies: ["complex14a-h3", "complex14a-h5", "complex14a-h7", "complex14a-h9"], title: "Combining Like Terms", text: "Here, we can combine the like terms. Add the constants, 2 and -6 together, and add the terms with i together."}, {id: "complex14a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-4"], dependencies: ["complex14a-h10"], title: "Combining Like Terms", text: "What is (2-6)?"}, {id: "complex14a-h12", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-7i"], dependencies: ["complex14a-h10"], title: "Combining Like Terms", text: "What is (-3i-4i)?"}, {id: "complex14a-h13", type: "hint", dependencies: ["complex14a-h11", "complex14a-h12"], title: "Standard Form", text: "Our last step is to write the expression in $$a+bi$$ form: -4-7i."}, ]; export {hints};