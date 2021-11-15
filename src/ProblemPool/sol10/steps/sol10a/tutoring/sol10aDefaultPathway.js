var hints = [{id: "sol10a-h1", type: "hint", dependencies: [], title: "Eliminate a Variable", text: "The equations are already in standard form. To get opposite coefficients of y, multiply the first equation by 2. \\n (-3*x+y=-9)*2 \\n $$x-2y=-12$$", variabilization: {}}, {id: "sol10a-h2", type: "hint", dependencies: ["sol10a-h1"], title: "Simplify and Add", text: "Add the two equations. \\n $$-6x+2y=-18$$ \\n $$x-2y=-12$$", variabilization: {}}, {id: "sol10a-h3", type: "hint", dependencies: ["sol10a-h2"], title: "Solve for x", text: "y will be eliminated and then solve for x. \\n $$-5x=-30$$ \\n $$x=6$$", variabilization: {}}, {id: "sol10a-h4", type: "hint", dependencies: ["sol10a-h3"], title: "Substitute and Solve for y", text: "Substitute $$x=6$$ into one of the original equations and solve for y. \\n $$-3\\times6+y=-9$$ \\n $$-18+y=-9$$ \\n $$y=9$$", variabilization: {}}, {id: "sol10a-h5", type: "hint", dependencies: ["sol10a-h4"], title: "Solution as Ordered Pair", text: "Solution to the system of equations is (6,9).", variabilization: {}}, ]; export {hints};