var hints = [{id: "cond6b-h1", type: "hint", dependencies: [], title: "Sample Spaces", text: "Let F1 denote the event \"first card is a face,\" F2 denote the event \"second card is a face,\" N1 denote the event \"first card is a nonface,\" and N2 denote the event \"second card is a nonface.\""}, {id: "cond6b-h2", type: "hint", dependencies: ["cond6b-h1"], title: "P(One Face Card)", text: "The event \"exactly one card is a face card\" corresponds to either drawing a face card first, then a nonface card, or drawing a nonface card first, then a face card. So, the probability of drawing exactly one face card is P(F1$$\cap$$N2)+P(N1$$\cap$$F2)"}, {id: "cond6b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40/221"], dependencies: ["cond6b-h2"], title: "P(F1$$\cap$$N2)", text: "What is the probability that the first card is a face card AND the second card is a nonface card? Enter your answer as a fraction", subHints: [{id: "cond6b-h3-s1", type: "hint", dependencies: [], title: "P(F1$$\cap$$N2)", text: "P(F1$$\cap$$N2)=P(N2$$\\mid$$F1)*P(F1)"}, {id: "cond6b-h3-s2", type: "hint", dependencies: ["cond6b-h3-s1"], title: "P(F1)", text: "When the first card is drawn, 12 cards are face cards out of the 52 possible cards chosen. Therefore, the probability of drawing a face card is $$\\frac{12}{52}$$"}, {id: "cond6b-h3-s3", type: "hint", dependencies: ["cond6b-h3-s2"], title: "P(N2$$\\mid$$F1)", text: "When the second card is drawn, 40 cards are nonface cards out of the 51 possible cards chosen. Therefore, the probability of drawing a nonface card is $$\\frac{40}{51}$$"}, {id: "cond6b-h3-s4", type: "hint", dependencies: ["cond6b-h3-s3"], title: "P(F1$$\cap$$N2)", text: "P(F1$$\cap$$N2)=P(N2$$\\mid$$F1)*P(F1)=(40/51)*(12/52)=480/2652=40/221"}]}, {id: "cond6b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40/221"], dependencies: ["cond6b-h2"], title: "P(N1$$\cap$$F2)", text: "What is the probability that the first card is a nonface card AND the second card is a face card? Enter your answer as a fraction", subHints: [{id: "cond6b-h4-s1", type: "hint", dependencies: [], title: "P(N1$$\cap$$F2)", text: "P(N1$$\cap$$F2)=P(F2$$\\mid$$N1)*P(N1)"}, {id: "cond6b-h4-s2", type: "hint", dependencies: ["cond6b-h4-s1"], title: "P(N1)", text: "When the first card is drawn, 40 cards are nonface cards out of the 52 possible cards chosen. Therefore, the probability of drawing a nonface card is $$\\frac{40}{52}$$"}, {id: "cond6b-h4-s3", type: "hint", dependencies: ["cond6b-h4-s2"], title: "P(F2$$\\mid$$N1)", text: "When the second card is drawn, 12 cards are face cards out of the 51 possible cards chosen. Therefore, the probability of drawing a face card is $$\\frac{12}{51}$$"}, {id: "cond6b-h4-s4", type: "hint", dependencies: ["cond6b-h4-s3"], title: "P(N1$$\cap$$F2)", text: "P(N1$$\cap$$F2)=P(F2$$\\mid$$N1)*P(N1)=(12/51)*(40/52)=480/2652=40/221"}]}, {id: "cond6b-h5", type: "hint", dependencies: ["cond6b-h3", "cond6b-h4"], title: "P(One Face Card)", text: "P(F1$$\cap$$N2)+P(N1$$\cap$$F2)=(40/221)+(40/221)=80/221"}, ]; export {hints};