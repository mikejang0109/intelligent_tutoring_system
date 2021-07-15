var hints = [{id: "ab6a46ageo3a-h1", type: "hint", dependencies: [], title: "Explicit Formula for a Geometric Sequence \\n", text: "Plug in the given variables into the explicit formula of a geometric sequence: $$a_n=a_1 r^{n-\\left(1\\right)}$$.", variabilization: {}}, {id: "ab6a46ageo3a-h2", type: "hint", dependencies: ["ab6a46ageo3a-h1"], title: "Initializing $$a_1$$", text: "Since the first term is 2, $$a_1=2$$.", variabilization: {}}, {id: "ab6a46ageo3a-h3", type: "hint", dependencies: ["ab6a46ageo3a-h1"], title: "Initializing r", text: "Since the common ratio is 3, $$r=3$$.", variabilization: {}}, {id: "ab6a46ageo3a-h4", type: "hint", dependencies: ["ab6a46ageo3a-h2", "ab6a46ageo3a-h3"], title: "Explicit Formula for a Geometric Sequence \\n", text: "Plug in the given variables into formula to obtain $$a_n=\\left(2\\right) {\\left(3\\right)}^{n-\\left(1\\right)}$$.", variabilization: {}}, {id: "ab6a46ageo3a-h5", type: "hint", dependencies: ["ab6a46ageo3a-h4"], title: "Find $$a_5$$", text: "Since we want to find the 5th term, $$n=5$$. Substitute 5 into $$a_n=\\left(2\\right) {\\left(3\\right)}^{n-\\left(1\\right)}$$.", variabilization: {}}, {id: "ab6a46ageo3a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["162"], dependencies: ["ab6a46ageo3a-h5"], title: "Find $$a_5$$", text: "What is $$a_5=\\left(2\\right) {\\left(3\\right)}^{\\left(5\\right)-\\left(1\\right)}$$?", variabilization: {}}, {id: "ab6a46ageo3a-h7", type: "hint", dependencies: ["ab6a46ageo3a-h6"], title: "Fifth Term", text: "The fifth term is 162.", variabilization: {}}, ]; export {hints};