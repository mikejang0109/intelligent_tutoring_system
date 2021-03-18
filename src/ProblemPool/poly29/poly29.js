import React from 'react'; import { InlineMath } from 'react-katex';import steps from "./poly29-index.js"; const problem = {id: "poly29", title: "Real-World Polynomials", body: <div> A developer wants to purchase a plot of land to build a house. The area of the plot can be described by the following expression: <InlineMath math="\left(\left(4\right) x+\left(1\right)\right) \left(\left(8\right) x-\left(3\right)\right)"/> where x is measured in meters. Multiply the binomials to find the area of the plot in standard form. </div>, steps: steps, }; export { problem };