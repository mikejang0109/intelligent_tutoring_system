var hints = [{id: "a35ba99cou6a-h1", type: "hint", dependencies: [], title: "Add the Number of Options", text: "We can add the number of red ace options to the number of club options to find the total number of options.", variabilization: {}}, {id: "a35ba99cou6a-h2", type: "hint", dependencies: ["a35ba99cou6a-h1"], title: "Number of Red Aces", text: "There are 2 red aces in a deck of cards: an ace of diamonds and an ace of hearts.", variabilization: {}}, {id: "a35ba99cou6a-h3", type: "hint", dependencies: ["a35ba99cou6a-h2"], title: "Number of Clubs", text: "There are 13 clubs in a deck of cards, from the ace of clubs to the king of clubs.", variabilization: {}}, {id: "a35ba99cou6a-h4", type: "hint", dependencies: ["a35ba99cou6a-h3"], title: "Add the Number of Options", text: "# of red ace options+# of club options \\n $$2+13=15$$", variabilization: {}}, {id: "a35ba99cou6a-h5", type: "hint", dependencies: ["a35ba99cou6a-h4"], title: "Total Ways", text: "There are 15 ways to pick a red ace or a club from a standard card playing deck.", variabilization: {}}, ]; export {hints};