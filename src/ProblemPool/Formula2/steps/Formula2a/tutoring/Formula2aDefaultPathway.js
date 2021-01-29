var hints = [{id: "Formula2a-h1", type: "hint", dependencies: [], title: "Identify the Unknown", text: "We are looking for the total distance traveled and we can name it \"d\""}, {id: "Formula2a-h2", type: "hint", dependencies: ["Formula2a-h1"], title: "Translate", text: "We can use the formula $$distance=rate time$$ -->d=rt"}, {id: "Formula2a-h3", type: "hint", dependencies: ["Formula2a-h2"], title: "Substitute", text: "Since we are given that the rate is 60 mph and the time is 5.5 hours, we can substitute $$r=60$$ $$t=5.5$$ and get d=(60)*(5.5)."}, {id: "Formula2a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["330"], dependencies: ["Formula2a-h3"], title: "Solve", text: "Solve $$\\left(60\\right) \\left(5.5\\right)$$ to find the distance in miles. What is the distance?"}, ]; export {hints};