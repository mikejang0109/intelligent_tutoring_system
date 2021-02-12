var hints = [{id: "quad21a-h1", type: "hint", dependencies: [], title: "Pythagorean Theorem Definition", text: "The Pythagorean Theorem is given as $$a^2+b^2=c^2$$, where a and b refer to the legs of a right triangle adjacent to the 90 degree angle, and c refers to the hypotenuse."}, {id: "quad21a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["quad21a-h1"], title: "Calculating $$a^2$$", text: "What is $$a^2$$?"}, {id: "quad21a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["quad21a-h1"], title: "Calculating $$b^2$$", text: "What is $$b^2$$?"}, {id: "quad21a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["25"], dependencies: ["quad21a-h2", "quad21a-h3"], title: "Calculating $$c^2$$", text: "$$c^2$$ is equal to the sum of $$a^2+b^2$$. What is $$c^2$$?"}, {id: "quad21a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["quad21a-h4"], title: "Calculating c", text: "c is equal to $$\\sqrt{c^2}$$. What is c?"}, ]; export {hints};