var hints = [{id: "MoApp6b-h1", type: "hint", dependencies: [], title: "Identify known quantities", text: "The known quantities are 5 and 0.1."}, {id: "MoApp6b-h2", type: "hint", dependencies: ["MoApp6b-h1"], title: "Determine unknown quantities", text: "The unknown quantity is the talk-time, which has been made x."}, {id: "MoApp6b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.1x"], dependencies: ["MoApp6b-h2"], title: "Fees charged for calls", text: "What is the fees charged for calls when calling x minutes for a month?"}, {id: "MoApp6b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.1x+5"], dependencies: ["MoApp6b-h3"], title: "Total cost of this plan", text: "What is the total cost of a monthly fee and fees charged for calls?"}, ]; export {hints};