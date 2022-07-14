var hints = [{id: "a81d715SolRadical9a-h1", type: "hint", dependencies: [], title: "Isolate the Radical", text: "Isolate the radical on one side of the equation. We can add 10 on both sides get $$\\sqrt{6v-2}=10$$ which has radicals isolated on one side.", variabilization: {}}, {id: "a81d715SolRadical9a-h2", type: "hint", dependencies: ["a81d715SolRadical9a-h1"], title: "Raise Both Sides Of the Equation To The Power Of The Index", text: "$${\\sqrt{6v-2}}^2={10}^2$$ After squaring both sides, we get $$6v-2=100$$.", variabilization: {}}, {id: "a81d715SolRadical9a-h3", type: "hint", dependencies: ["a81d715SolRadical9a-h2"], title: "Check For Remaining Radicals", text: "Are there any more radicals? No. We can proceed to the next step.", variabilization: {}}, {id: "a81d715SolRadical9a-h4", type: "hint", dependencies: ["a81d715SolRadical9a-h3"], title: "Solve For Equation", text: "Solve for the equation $$6v-2=100$$.", variabilization: {}}, {id: "a81d715SolRadical9a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["17"], dependencies: ["a81d715SolRadical9a-h4"], title: "Solve For Equation", text: "What is the value of v for $$6v-2=100$$?", variabilization: {}}, ]; export {hints};