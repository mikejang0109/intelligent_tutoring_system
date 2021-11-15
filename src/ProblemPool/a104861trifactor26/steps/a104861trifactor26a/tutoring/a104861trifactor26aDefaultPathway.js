var hints = [{id: "a104861trifactor26a-h1", type: "hint", dependencies: [], title: "Perfect Square", text: "This equation is a perfect square", variabilization: {}}, {id: "a104861trifactor26a-h2", type: "hint", dependencies: ["a104861trifactor26a-h1"], title: "Common Factor", text: "Take out the 4 to make $$4\\left(\\left(16\\right) x^2-\\left(24\\right) x+\\left(9\\right)\\right)$$", variabilization: {}}, {id: "a104861trifactor26a-h3", type: "hint", dependencies: ["a104861trifactor26a-h2"], title: "Factors", text: "In this equation $$z\\left({ax}^2+bx+c\\right)$$ the square root of a and c are 4 and -3 respectively.", variabilization: {}}, {id: "a104861trifactor26a-h4", type: "hint", dependencies: ["a104861trifactor26a-h3"], title: "Plug in", text: "Plug into the perfect square simplified form $${z\\left(nx+m\\right)}^2$$ where n is the square root of a and m is the square root of c", variabilization: {}}, ]; export {hints};