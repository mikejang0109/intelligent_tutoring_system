var hints = [{id: "a53b893whole4a-h1", type: "hint", dependencies: [], title: "Locate", text: "Locate the hundreds place in the number", variabilization: {}}, {id: "a53b893whole4a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["a53b893whole4a-h1"], title: "Value", text: "What is the value of the hundreds place?", variabilization: {}}, {id: "a53b893whole4a-h3", type: "hint", dependencies: ["a53b893whole4a-h2"], title: "Next Value", text: "Check the next value to the right of the indicated hundreds number.", variabilization: {}}, {id: "a53b893whole4a-h4", type: "hint", dependencies: ["a53b893whole4a-h3"], title: "Rule", text: "If the number to the right of the hundreds number is greater than or equal to 5 then add one to the hundreds place number and make everything after to 0s. If it is less than 5, then leave the hundreds place number the same and change everything after to 0s.", variabilization: {}}, ]; export {hints};