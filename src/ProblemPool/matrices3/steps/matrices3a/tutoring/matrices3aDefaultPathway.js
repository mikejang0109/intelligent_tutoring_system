var hints = [{id: "matrices3a-h1", type: "hint", dependencies: [], title: "Adding and Subtracting Matrices", text: "Given matrices A and B of like dimensions, addition and subtraction of A and B will produce matrix C or matrix D of the same dimension.\\nA+B=C such that a_{i,j}+b_{i,j}=c_{i,j}\\nA-B=D such that a_{i,j}-b_{i,j}=d_{i,j}", variabilization: {}}, {id: "matrices3a-h2", type: "hint", dependencies: ["matrices3a-h1"], title: "Adding Corresponding Entries", text: "Since the dimension of the matrices are the same, we perform matrix addition $$A+B=C$$ such that a_{i,j}+b_{i,j}=c_{i,j}.", variabilization: {}}, {id: "matrices3a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["matrices3a-h2"], title: "Adding Corresponding Entries", text: "We will start by adding the top left entry of C, c_{1,1}, and D, d_{1,1}. What is c_{1,1}+d_{1,1}?", variabilization: {}}, {id: "matrices3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["14"], dependencies: ["matrices3a-h3"], title: "Adding Corresponding Entries", text: "We will next add the top right entry of C, c_{1,2}, and D, d_{1,2}. What is c_{1,2}+d_{1,2}?", variabilization: {}}, {id: "matrices3a-h5", type: "hint", dependencies: ["matrices3a-h4"], title: "Adding Corresponding Entries", text: "Repeat the same process for each corresponding entries to compute the addition of the two matrices.", variabilization: {}}, ]; export {hints};