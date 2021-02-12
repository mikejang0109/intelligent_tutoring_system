var hints = [{id: "abs1a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute 0 for f(x)."}, {id: "abs1a-h2", type: "hint", dependencies: ["abs1a-h1"], title: "Isolate", text: "Isolate the $$absolute$$ value on one side of the equation."}, {id: "abs1a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$-\\left(1\\right)=|x-\\left(3\\right)|$$"], dependencies: ["abs1a-h2"], title: "Isolate", text: "What do we get after the isolation?", choices: ["$$1=|x-\\left(3\\right)|$$", "$$-\\left(1\\right)=|x-\\left(3\\right)|$$", "$$0=|x-\\left(3\\right)|$$"]}, {id: "abs1a-h4", type: "hint", dependencies: ["abs1a-h3"], title: "Absolute Value", text: "$$|x-\\left(3\\right)|$$ is always non-negative, so we cannot find x-intercepts in this case."}, ]; export {hints};