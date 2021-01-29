var hints = [{id: "whole10a-h1", type: "hint", dependencies: [], title: "Finding Two Factors Whose Product is the Given Number", text: "The first step is to find two factors whose product is the given number."}, {id: "whole10a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole10a-h1"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 24 and 2 factors of 48 that multiply together to make 48?", choices: ["Yes", "No"]}, {id: "whole10a-h3", type: "hint", dependencies: ["whole10a-h2"], title: "Prime Number Factors", text: "If a factor is prime, that means it can't be divided further. Thus, it is a prime factor of the number."}, {id: "whole10a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole10a-h3"], title: "Verifying if a Factor is Prime", text: "Is 2 prime?", choices: ["Yes", "No"]}, {id: "whole10a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["whole10a-h3"], title: "Verifying if a Factor is Prime", text: "Is 24 prime?", choices: ["Yes", "No"]}, {id: "whole10a-h6", type: "hint", dependencies: ["whole10a-h4", "whole10a-h5"], title: "Proceeding With a Factor that is Not Prime", text: "The next step is to divide factors that are not prime into two more factors."}, {id: "whole10a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole10a-h6"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 4 and 6 factors of 24 that multiply together to make 24?", choices: ["Yes", "No"]}, {id: "whole10a-h8", type: "hint", dependencies: ["whole10a-h7"], title: "Proceeding With a Factor that is Not Prime", text: "Continue to divide factors that are not prime into two more factors."}, {id: "whole10a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole10a-h8"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 2 and 2 factors of 4 that multiply together to make 4?", choices: ["Yes", "No"]}, {id: "whole10a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole10a-h9"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 2 and 3 factors of 6 that multiply together to make 6?", choices: ["Yes", "No"]}, {id: "whole10a-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole10a-h10"], title: "Verifying if a Factor is Prime", text: "Are both 2 and 3 prime?", choices: ["Yes", "No"]}, {id: "whole10a-h12", type: "hint", dependencies: ["whole10a-h11"], title: "Final Step", text: "The final step is to write the composite number as the product of all the prime factors."}, {id: "whole10a-h13", type: "hint", dependencies: ["whole10a-h12"], title: "Answer", text: "The found prime factors of 48 were 2, 2, 2, 2, and 3. Thus $$\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(3\\right)=48$$ and $$\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(3\\right)$$ is the prime factorization of 48."}, ]; export {hints};