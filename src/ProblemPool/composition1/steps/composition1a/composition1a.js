import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./composition1a-index.js"; const step = {id: "composition1a", stepAnswer: ["$$f(x)=x^{\\frac{1}{3}}$$, $$g(x)=x-1$$"], problemType: "MultipleChoice", stepTitle: <div> <InlineMath math="h(x)={\left(x-\left(1\right)\right)}^{\frac{1}{3}}"/></div>, stepBody: "", choices: ["$$f(x)={\\left(\\-1\\right)}^{\\frac{1}{3}}$$, $$g(x)=x^{\\frac{1}{3}}$$", "$$f(x)=x^{\\frac{1}{3}}$$, $$g(x)={\\left(\\-1\\right)}^{\\frac{1}{3}}$$", "$$f(x)=x^{\\frac{1}{3}}$$, $$g(x)=x-1$$", "$$f(x)=x-1$$, $$g(x)=x^{\\frac{1}{3}}$$"], answerType: "string", hints: hints}; export {step};