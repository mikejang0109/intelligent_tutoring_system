var hints = [{id: "a1b4294cond3a-h1", type: "hint", dependencies: [], title: "Conditional Probability Formula", text: "The conditional probability of A given B may be computed by means of the following formula: P(A$$\mid$$B)=P(A$$\cap$$B)/P(B)", variabilization: {}}, {id: "a1b4294cond3a-h2", type: "hint", dependencies: ["a1b4294cond3a-h1"], title: "Sample Spaces", text: "Let D denote the event \"patient has the disease,\" let N denote the event \"patient does not have the disease,\" and let P denote the event \"patient tests positive.\" Then P(D$$\mid$$P)=P(D$$\cap$$P)/P(P)", variabilization: {}}, {id: "a1b4294cond3a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.099"], dependencies: ["a1b4294cond3a-h2"], title: "P(D$$\cap$$P)", text: "Find the probability that a randomly selected patient has the disease AND tests positive. Round your answer to three decimal places", subHints: [{id: "a1b4294cond3a-h3-s1", type: "hint", dependencies: [], title: "P(D$$\cap$$P)", text: "Since 10% percent of patients have the disease and 99% percent of those patients test positive, we multiply those probabilities: $$P(D$$\\cap$$P)=\\left(0.1\\right) \\left(0.99\\right)=0.099$$", variabilization: {}}], variabilization: {}}, {id: "a1b4294cond3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.144"], dependencies: ["a1b4294cond3a-h2"], title: "P(P)", text: "Find the probability that a random patient tests positive. Round your answer to three decimal places", subHints: [{id: "a1b4294cond3a-h4-s1", type: "hint", dependencies: [], title: "P(P)", text: "There are two situations where patients can test positive: patient has the disease and tests positive and patient does not have the disease and tests positive. We add those two probabilities together to get P(P). That is, P(P)=P(D$$\cap$$P)+P(N$$\cap$$P)", variabilization: {}}, {id: "a1b4294cond3a-h4-s2", type: "hint", dependencies: ["a1b4294cond3a-h4-s1"], title: "P(N$$\cap$$P)", text: "Since 90% percent of patients do not have the disease and 5% percent of those patients test positive, we multiply those probabilities: $$P(N$$\\cap$$P)=\\left(0.9\\right) \\left(0.05\\right)=0.045$$", variabilization: {}}, {id: "a1b4294cond3a-h4-s3", type: "hint", dependencies: ["a1b4294cond3a-h4-s2"], title: "P(P)", text: "P(P)=P(D$$\cap$$P)+P(N$$\cap$$P)=0.099+0.045=0.144. Therefore the probability of a random patient testing positive is 0.144", variabilization: {}}], variabilization: {}}, {id: "a1b4294cond3a-h5", type: "hint", dependencies: ["a1b4294cond3a-h3", "a1b4294cond3a-h4"], title: "P(D$$\mid$$P)", text: "Using the conditional probability formula, calculate P(D$$\mid$$P) using P(D$$\cap$$P) and P(P).", variabilization: {}}, {id: "a1b4294cond3a-h6", type: "hint", dependencies: ["a1b4294cond3a-h5"], title: "P(D$$\mid$$P)", text: "P(D$$\mid$$P)=P(D$$\cap$$P)/P(P)=0.099/0.144=0.6875", variabilization: {}}, ]; export {hints};