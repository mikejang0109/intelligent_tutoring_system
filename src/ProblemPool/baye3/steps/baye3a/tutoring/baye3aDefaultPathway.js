var hints = [{id: "baye3a-h1", type: "hint", dependencies: [], title: "Bayes' Theorem", text: "The probability of event A given event B may be computed by means of the following formula: P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)", variabilization: {}}, {id: "baye3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.010"], dependencies: ["baye3a-h1"], title: "P(Allergy)", text: "What is the probability that any given person is allergic to cats? Round your answer to 3 decimal places", subHints: [{id: "baye3a-h2-s1", type: "hint", dependencies: [], title: "P(Allergy)", text: "Only 1% of the population is allergic to cats, so the probability that any given person is allergic to cats is 0.010", variabilization: {}}], variabilization: {}}, {id: "baye3a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.800"], dependencies: ["baye3a-h2"], title: "P(Yes$$\mid$$Allergy)", text: "What is the probability of test saying \"Yes\", given that the person getting tested is allergic to cats? Round your answer to 3 decimal places", subHints: [{id: "baye3a-h3-s1", type: "hint", dependencies: [], title: "P(Yes$$\mid$$Allergy)", text: "For people that really do have the allergy, the test says \"Yes\" 80% of the time. Thus the probability of test saying \"Yes\", given that the person getting tested is allergic to cats is 0.800", variabilization: {}}], variabilization: {}}, {id: "baye3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.107"], dependencies: ["baye3a-h3"], title: "P(Yes)", text: "What is the probability that the test say \"Yes\" to anyone? Round your answer to 3 decimal places", subHints: [{id: "baye3a-h4-s1", type: "hint", dependencies: [], title: "P(Yes)", text: "There are two situations where the test says \"YES\": the person is allergic and the test says \"Yes\" and the person is not allergic and the test says \"Yes\". We add those two probabilities together to get P(Yes)", variabilization: {}}, {id: "baye3a-h4-s2", type: "hint", dependencies: ["baye3a-h4-s1"], title: "P(Yes and Allergic)", text: "1% have the allergy, and the test says \"Yes\" to 80% of them. Thus the probability that the test says \"Yes\" and they are allergic is $$0.01\\times0.8=0.008$$", variabilization: {}}, {id: "baye3a-h4-s3", type: "hint", dependencies: ["baye3a-h4-s2"], title: "P(Yes and Not Allergic)", text: "99% do not have the allergy and the test says \"Yes\" to 10% of them. Thus the probability that the test says \"Yes\" and they are not allergic is $$0.99\\times0.1=0.099$$", variabilization: {}}, {id: "baye3a-h4-s4", type: "hint", dependencies: ["baye3a-h4-s3"], title: "P(Yes)", text: "$$P(Yes)=0.008+0.099=0.107$$", variabilization: {}}], variabilization: {}}, {id: "baye3a-h5", type: "hint", dependencies: ["baye3a-h4"], title: "P(Allergic$$\mid$$Yes)", text: "Using Bayes' Theorem, calculate P(Allergic$$\mid$$Yes) using P(Allergic), P(Yes$$\mid$$Allergic), and P(Yes)", variabilization: {}}, {id: "baye3a-h6", type: "hint", dependencies: ["baye3a-h5"], title: "P(Allergic$$\mid$$Yes)", text: "P(Allergic$$\mid$$Yes)=P(Allergic)P(Yes$$\mid$$Allergic)/P(Yes)=0.01*0.8/0.107=0.007", variabilization: {}}, ]; export {hints};