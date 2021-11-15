var hints = [{id: "a0f69c4conic3a-h1", type: "hint", dependencies: [], title: "Polar Equation of Conic", text: "For a conic with a focus at the origin, if the directrix is $$x=p$$ or $$x=-p$$, where p is a positive real number, and the eccentricity is a positive real number e, the conic has a polar equation \\n r=(e*p)/(1+e*cos(\theta)) or r=(e*p)/(1-e*cos(\theta)) \\n For a conic with a focus at the origin, if the directrix is $$y=p$$ or $$y=-p$$, where p is a positive real number, and the eccentricity is a positive real number e, the conic has a polar equation \\n r=(e*p)/(1+e*sin(\theta)) or r=(e*p)/(1-e*sin(\theta))", variabilization: {}}, {id: "a0f69c4conic3a-h2", type: "hint", dependencies: ["a0f69c4conic3a-h1"], title: "Directrix", text: "The directrix is $$y=-p$$. Which trigonometric function is in the denominator?", variabilization: {}}, {id: "a0f69c4conic3a-h3", type: "hint", dependencies: ["a0f69c4conic3a-h2"], title: "Polar Equation", text: "Our polar equation takes the form r=(e*p)/(1-e*sin(\theta)) as identified by the directrix $$y=-p$$.", variabilization: {}}, {id: "a0f69c4conic3a-h4", type: "hint", dependencies: ["a0f69c4conic3a-h3"], title: "Numerator", text: "The numerator is the product of the eccentricity and the absolute of the directrix, |p|. What is the numerator?", variabilization: {}}, {id: "a0f69c4conic3a-h5", type: "hint", dependencies: ["a0f69c4conic3a-h4"], title: "Eccentricity", text: "The eccentricity is the magnitude of the coefficient of the trigonometric function in the denominator. Thus, what is the coefficient of the trigonometric function?", variabilization: {}}, {id: "a0f69c4conic3a-h6", type: "hint", dependencies: ["a0f69c4conic3a-h5"], title: "Polar Form", text: "Substitute the values that were found into the polar equation.", variabilization: {}}, ]; export {hints};