import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./LinEqua27a-index.js"; const step = {id: "LinEqua27a", stepAnswer: ["parallel"], problemType: "MultipleChoice", stepTitle: "State whether the two lines are parallel, perpendicular, or neither", stepBody: <div> <InlineMath math="2y-x=10"/> and <InlineMath math="2y=x+4"/>.</div>, choices: ["parallel", "perpendicular", "neither"], answerType: "string", hints: hints}; export {step};