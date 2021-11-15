var hints = [{id: "slope27a-h1", type: "hint", dependencies: [], title: "Solve the first equation for y", text: "$$3x-4y=8$$ \\n $$-4y=-3x+8$$ \\n $$\\frac{\\left(-4y\\right)}{-4}=\\frac{\\left(-3x+8\\right)}{-4}$$ \\n $$y=\\frac{3}{4} x-2$$", variabilization: {}}, {id: "slope27a-h2", type: "hint", dependencies: ["slope27a-h1"], title: "Slope-Intercept Form of an Equation of Second Line", text: "Compare the second equation to the slope-intercept form of the equation. \\n $$y=m x+b$$ \\n $$y=\\frac{3}{4} x-2$$", variabilization: {}}, {id: "slope27a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{3}{4}$$"], dependencies: ["slope27a-h2"], title: "Identify the Slope of First Line", text: "What is m in the first equation?", variabilization: {}}, {id: "slope27a-h4", type: "hint", dependencies: ["slope27a-h3"], title: "Solve the second equation for y", text: "$$4x-3y=6$$ \\n $$-3y=-4x+6$$ \\n $$\\frac{\\left(-3y\\right)}{-3}=\\frac{\\left(-4x+6\\right)}{-3}$$ \\n $$y=\\frac{4}{3} x-2$$", variabilization: {}}, {id: "slope27a-h5", type: "hint", dependencies: ["slope27a-h4"], title: "Slope-Intercept Form of an Equation of Second Line", text: "Compare the second equation to the slope-intercept form of the equation. \\n $$y=m x+b$$ \\n $$y=\\frac{4}{3} x-2$$", variabilization: {}}, {id: "slope27a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{4}{3}$$"], dependencies: ["slope27a-h5"], title: "Identify the Slope of Second Line", text: "What is m in the second equation?", variabilization: {}}, {id: "slope27a-h7", type: "hint", dependencies: ["slope27a-h6"], title: "Perpendicular Lines", text: "Perpendicular lines have slopes that are negative reciprocals of each other. We check by multiplying the slopes and see if it equals -1.", variabilization: {}}, {id: "slope27a-h8", type: "hint", dependencies: ["slope27a-h3", "slope27a-h6", "slope27a-h7"], title: "Checking if perpendicular", text: "$$m_1 m_2$$ \\n $$\\frac{4\\frac{3}{4}}{3}=1$$", variabilization: {}}, {id: "slope27a-h9", type: "hint", dependencies: ["slope27a-h8"], title: "Perpendicular Lines", text: "The slopes are reciprocals of each other, but they have the same sign. Since they are not negative reciprocals, the lines are not perpendicular.", variabilization: {}}, ]; export {hints};