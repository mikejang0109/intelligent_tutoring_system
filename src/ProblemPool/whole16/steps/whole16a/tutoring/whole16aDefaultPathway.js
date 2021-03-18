var hints = [{id: "whole16a-h1", type: "hint", dependencies: [], title: "Finding Two Factors Whose Product is the Given Number", text: "The first step is to find two factors whose product is the given number."}, {id: "whole16a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole16a-h1"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 2 and 63 factors of 60?", choices: ["Yes", "No"]}, {id: "whole16a-h3", type: "hint", dependencies: ["whole16a-h2"], title: "Prime Number Factors", text: "If a factor is prime, that means it can't be divided further. Thus, it is a prime factor of the number."}, {id: "whole16a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole16a-h3"], title: "Verifying if a Factor is Prime", text: "Is 2 prime?", choices: ["Yes", "No"]}, {id: "whole16a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["whole16a-h4"], title: "Verifying if a Factor is Prime", text: "Is 63 prime?", choices: ["Yes", "No"]}, {id: "whole16a-h6", type: "hint", dependencies: ["whole16a-h5"], title: "Proceeding With a Factor that is Not Prime", text: "The next step is to divide factors that are not prime into two more factors."}, {id: "whole16a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole16a-h6"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 7 and 9 factors of 63?", choices: ["Yes", "No"]}, {id: "whole16a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole16a-h7"], title: "Verifying if a Factor is Prime", text: "Is 7 prime?", choices: ["Yes", "No"]}, {id: "whole16a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["whole16a-h8"], title: "Verifying if a Factor is Prime", text: "Is 9 prime?", choices: ["Yes", "No"]}, {id: "whole16a-h10", type: "hint", dependencies: ["whole16a-h9"], title: "Proceeding With a Factor that is Not Prime", text: "Continue to divide factors that are not prime into two more factors."}, {id: "whole16a-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole16a-h10"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 3 and 3 factors of 9?", choices: ["Yes", "No"]}, {id: "whole16a-h12", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole16a-h11"], title: "Verifying if a Factor is Prime", text: "Is 3 prime?", choices: ["Yes", "No"]}, {id: "whole16a-h13", type: "hint", dependencies: ["whole16a-h12"], title: "Final Step", text: "The final step is to write the composite number as the product of all the prime factors."}, {id: "whole16a-h14", type: "hint", dependencies: ["whole16a-h13"], title: "Answer", text: "The found prime factors of 126 were 2, 7, 3, and 3. Thus $$\\left(2\\right) \\left(3\\right) \\left(3\\right) \\left(7\\right)=126$$, and $$\\left(2\\right) \\left(3\\right) \\left(3\\right) \\left(7\\right)$$ is the factorization of 126."}, ]; export {hints};