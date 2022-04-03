var hints = [{id: "a41316cmatrices24a-h1", type: "hint", dependencies: [], title: "Matrix Multiplication", text: "First, multiply both matrices by their scalars(3*D and 4*E).", variabilization: {}}, {id: "a41316cmatrices24a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\begin{bmatrix} -24 & 21 & -15 \\\\ 12 & 9 & 6 \\\\ 0 & 27 & 6 \\end{bmatrix}$$"], dependencies: ["a41316cmatrices24a-h1"], title: "Scalar Multiplication", text: "What is $$3D$$?", variabilization: {}}, {id: "a41316cmatrices24a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\begin{bmatrix} 16 & 20 & 12 \\\\ 28 & -24 & -20 \\\\ 4 & 0 & 36 \\end{bmatrix}$$"], dependencies: ["a41316cmatrices24a-h2"], title: "Scalar Multiplication", text: "What is $$4E$$?", variabilization: {}}, {id: "a41316cmatrices24a-h4", type: "hint", dependencies: ["a41316cmatrices24a-h3"], title: "Adding Matrices", text: "Next, add the two multiplied matrices together.", variabilization: {}}, {id: "a41316cmatrices24a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\begin{bmatrix} -8 & 41 & -3 \\\\ 40 & -15 & -14 \\\\ 4 & 27 & 42 \\end{bmatrix}$$"], dependencies: ["a41316cmatrices24a-h4"], title: "Confirming the Answer", text: "What is the result after adding the two multiplied matrices?", variabilization: {}}, ]; export {hints};