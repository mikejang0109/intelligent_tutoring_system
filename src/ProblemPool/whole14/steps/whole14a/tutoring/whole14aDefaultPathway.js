var hints = [{id: "whole14a-h1", type: "hint", dependencies: [], title: "Finding Two Factors Whose Product is the Given Number", text: "The first step is to find two factors whose product is the given number."}, {id: "whole14a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole14a-h1"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 2 and 40 factors of 80 that multiply together to make 80?", choices: ["Yes", "No"]}, {id: "whole14a-h3", type: "hint", dependencies: ["whole14a-h2"], title: "Prime Number Factors", text: "If a factor is prime, that means it can't be divided further. Thus, it is a prime factor of the number."}, {id: "whole14a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole14a-h3"], title: "Verifying if a Factor is Prime", text: "Is 2 prime?", choices: ["Yes", "No"]}, {id: "whole14a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["whole14a-h4"], title: "Verifying if a Factor is Prime", text: "Is 40 prime?", choices: ["Yes", "No"]}, {id: "whole14a-h6", type: "hint", dependencies: ["whole14a-h5"], title: "Proceeding With a Factor that is Not Prime", text: "The next step is to divide factors that are not prime into two more factors."}, {id: "whole14a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole14a-h6"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 2 and 20 factors of 40 that multiply together to make 40?", choices: ["Yes", "No"]}, {id: "whole14a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole14a-h7"], title: "Verifying if a Factor is Prime", text: "Is 2 prime?", choices: ["Yes", "No"]}, {id: "whole14a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["whole14a-h8"], title: "Verifying if a Factor is Prime", text: "Is 20 prime?", choices: ["Yes", "No"]}, {id: "whole14a-h10", type: "hint", dependencies: ["whole14a-h9"], title: "Proceeding With a Factor that is Not Prime", text: "Continue to divide factors that are not prime into two more factors."}, {id: "whole14a-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole14a-h10"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 2 and 10 factors of 20 that multiply together to make 20?", choices: ["Yes", "No"]}, {id: "whole14a-h12", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole14a-h11"], title: "Verifying if a Factor is Prime", text: "Is 2 prime?", choices: ["Yes", "No"]}, {id: "whole14a-h13", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["whole14a-h12"], title: "Finding Two Factors Whose Product is the Given Number", text: "Is 10 prime?", choices: ["Yes", "No"]}, {id: "whole14a-h14", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole14a-h13"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 2 and 5 factors of 10 that multiply together to make 10?", choices: ["Yes", "No"]}, {id: "whole14a-h15", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole14a-h14"], title: "Verifying if a Factor is Prime", text: "Is 2 prime?", choices: ["Yes", "No"]}, {id: "whole14a-h16", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole14a-h15"], title: "Verifying if a Factor is Prime", text: "Is 5 prime?", choices: ["Yes", "No"]}, {id: "whole14a-h17", type: "hint", dependencies: ["whole14a-h16"], title: "Final Step", text: "The final step is to write the composite number as the product of all the prime factors."}, {id: "whole14a-h18", type: "hint", dependencies: ["whole14a-h17"], title: "Answer", text: "The found prime factors of 80 were 2, 2, 2, 2, and 5. Thus $$\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(5\\right)=80$$ and $$\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(5\\right)$$ is the prime factorization of 80."}, ]; export {hints};