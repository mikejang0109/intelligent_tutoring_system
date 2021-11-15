var hints = [{id: "SubAdd27e-h1", type: "hint", dependencies: [], title: "Rearrangement", text: "Rearrange the terms, using the distributive law of multiplication and the commutative property of addition. Combine like terms.", variabilization: {}}, {id: "SubAdd27e-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$u+12=4.9$$"], dependencies: ["SubAdd27e-h1"], title: "Simplification", text: "Simplify the equation of each side.", variabilization: {}}, {id: "SubAdd27e-h3", type: "hint", dependencies: ["SubAdd27e-h2"], title: "Isolation", text: "Isolate the variable.", variabilization: {}}, {id: "SubAdd27e-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$u=-7.1$$"], dependencies: ["SubAdd27e-h3"], title: "Isolation", text: "Isolate u.", variabilization: {}}, {id: "SubAdd27e-h5", type: "hint", dependencies: ["SubAdd27e-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "SubAdd27e-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["SubAdd27e-h5"], title: "Verification", text: "Check whether $$8\\left(-7.1+1.5\\right)-7\\left(-7.1\\right)$$ equals 4.9.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};