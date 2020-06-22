# OpenITS

An open source Intelligent Tutoring System using Bayesian Knowledge Tracing implemented in ReactJS and using Firebase for logging.

## Installation: 
The installation assumes that you already have git and npm installed. If you do not have either, please install those first.

```
git clone https://github.com/CAHLR/OpenITS
cd OpenITS
npm install
npm run generate
```
After compiling, the project will display in a new web browser tab at adress `localhost:3000`.

`npm run generate` is used to autogenerate index files (the preferred way of running locally)

(`npm start` can be used if no new problems/steps/pathways have been added.)

Create a file `/src/ProblemLogic/credentials.js`. This file need not have functional credentials unless logging is turned on (it is off by default) It must exist for the project to compile and be in the following format:

```javascript
const config = {};
export default config;
```

### Firebase Setup
OpenITS uses Firebase for data logging purposes.
1. Navigate to the Firebase [website](https://console.firebase.google.com/)
2. Add new project. Configure it as you wish (the options are not important for setup)
3. Click on Database and then create database. Start in test mode, leave the cloud location as is
4. Click `start collection` and name it `problemSubmissions`. Add a temporary first document for now.
5. Click on settings --> service accounts. Generate a new `Node.js` private key.
6. Put that private key in the below format in `/src/config/credentials.js`

```javascript
const config = {
  apiKey: "[apikey]",
  authDomain: "[projId].firebaseapp.com",
  databaseURL: "https://[projId].firebaseio.com",
  projectId: "[projId]",
  storageBucket: "[projId].appspot.com",
  messagingSenderId: "[messagingSenderId]",
  appId: "[appId]",
  measurementId: "[measurementId]"
};

export default config;
```
---

## Features:
1) Scaffolding/hint system - modularize the type of help 
2) Adaptive item selection - Pick items to master weakest skills (isolate skills to master individually)
3) Centralized skill model - `src/ProblemPool/skillMode.js` 
4) Data logging/collection - Based off of the Cognitive Tutor KDD dataset.
5) User login/registration - Cookie cache based

See the changelog for a more detailed feature list

## Technologies Used
* Frontend: ReactJS
	* Theme: Material UI
    * Database: Firebase (Cloud Firestore)
	* Deployment: TBD
* Offline Computation/Iteration:
	* Python (dAFM Machine Learning algorithm)



# Project Structure: 
Code for this project is located in the `src` directory. 

## src

- `App.css`: Top level style sheet, contains colors for headers/logo
- `App.js`: Top level script, generates cookie, firebase object. Sets up the context based on the userID
- `index.js`: Renders `App.js`

## BKT

- `BKTBrains.js`: Contains `update` function that implements the standard BKT update algorithm.

## ProblemLayout

- `HintSystem.js`: Expandable panel component to display all the hints.

- `HintTextbox.js`: Textbox for scaffold types of hints with answers.

- `Problem.js`: The "problem" component created in App.js. The component is initailized with a "problem" object as one of its props. It then creates a series of "ProblemCards" in `const parts` (currently keys for ProblemCard components are random values, should be UUIDs in the future). 

	The `answerMade` function is passed to each ProblemCard component and is called whenever an answer is submitted to a ProblemCard. This enables the Problem component to update the knowledge component variables after each answer and transition to the next problem after all answers are correct. 
	
- `ProblemCard.js`: This component displays an individual card, updates the input text field to display the result of an answer attempt, and calls the `Problem.js` 	`answerMade` function when the submit button is pressed.  

These two files heavily rely on Material-UI syntax (eg. all the `useStyles` and `classes` references). Check their website for more info on this syntax. 

- `problemCardStyles.js`: This file contains all the styles for `ProblemCard.js`


## ProblemLogic
- `checkAnswer.js`: Function to check answers. 3 different types of answers are supported: Algebraic, String, Numeric. Algebraic will simplify numeric expressions, numeric checks numeric equivalence, string requires answers to exactly match.

- `Platform.js`: Creates top "AppBar" and presents the first "problem" (everything under the app bar is part of the problem component). Also imports all of the problem files and stores them in `const problemIndex`. The function `nextProblem` is used to determine the next problem to be displayed. 

- `Firebase.js`: Class with methods to read/write to Firebase (Cloud Firestore).

- `renderText.js`: Method called to render text. Fills in dynamic text generation.


## ProblemPool [Configurable]
- Each problem is contained in its own folder. 
- Problems can contain steps which are contained in their own subfolder
- Steps can contain hints which are stored as pathways in the `tutoring` subfolder
- Files ending in `-index.js` and `problemPool.js` are autogenerated using indexGenerator.js

### Markdown Support
- All `\` must be escaped as `\\` because values are strings
- Wrap Latex in `$` for inline LaTeX
- Newlines can be created with `\n`, escaped as `\\n`

## Config [Configurable]
- `config.js`: Central place where options can be configured. Also includes function to get the treatment id given a userID, imports all appropriate treatments (Ex. BKTParam, HintPathway, Adaptive Problem selection heuristic)

- `./bktParams/bktParams.js`: Contains the mastery, transit, slip, and guess probabilities for each skill. Used in the BKT model.

- `./problemSelectHeuristics/problemSelectHeuristic.js`: This file contains a configurable heuristic for adaptive problem selection. The default heuristic iterates across the problems and chooses the one with the lowest average probability of mastery across all of its knowledge components, but this can be changed to any heuristic. 

- `skillModel.js`: This file contains all the problem to skill mappings. The format is as follows:
```javascript
    problemID1a: []
    problemID1b: []
    ...
    problemID1z: []
    
    problemID9a: []
    ...
    problemID9z: []
    ...
```

- `credentials.js`: File which contains the credentials to authenticate to Firebase. (Note: this file is ignored in the gitignore by default to prevent API key leaks.)

- `algebraCheck.js`: Config file for algebraic answer checks

---

## Listeners

### Mouse Logging
* Size of screen is the size of the scrollable browser canvas

### Adding Listeners
1. Install the React component for the listener. 
2. Wrap the Platform component with the listener. The listener must take a prop that is a function to log data that it receives. 
3. In `/ProblemLogic/Firebase.js` add a new function to log the new type of data. Create a new collection for this listener logs.
4. Configure buffer size and granularity of logging



# Problem Pool

## Adding a problem to the Problem Pool
1. Create a folder in `/src/ProblemPool/` for that problem (Ex. `circle1`)
2. Create a js file for that problem id (Ex. `circle1.js`)
3. Create a folder called `figures` if the problem has figures
4. Create a subfolder for each problem step (Ex. `circle1a`, `circle1b`)
5. In each subfolder, create a js file for that problem step id (Ex. `circle1a.js`)
6. Create a subfolder within the subfolder called `tutoring`
7. Place each hint pathway within the folder (Ex. `circle1aDefaultPathway.js`)
8. In `/src/config/skillModel.js`, tag each problem with the appropriate skills
9. If the skill does not already exist in `bktParams`, add its BKT parameters in the appropriate `config/bktParams` files

### Types of problems
* `TextBox` : Box for student to enter answer. 3 different types of answers are supported: Algebraic, String, Numeric. Algebraic will simplify numeric expressions, numeric checks numeric equivalence, string requires answers to exactly match.
* `MultipleChoice`: List choices as `choices: ["Choice A", "Choice B"]`, must have `answerType: "string"`

### Example Directory Structure
```
ProblemPool
│   problemPool.js (Autogenerated)
└───circle1
│   │   circle1.js
│   │   circle1-index.js (Autogenerated)
│   └───steps
│       └───circle1a
│       │   │   circle1a.js
│       │   │   circle1a-index.js (Autogenerated)
│       │   └───tutoring
│       │       │   circle1aDefaultPathway.js
│       │          
│       └───circle1b
│           │   circle1b.js
│           │   circle1b-index.js (Autogenerated)
│           └───tutoring
│               │   circle1bDefaultPathway.js
│   
└───slope1
    │   ...
```

### Example Problem File
```js
import steps from './circle1-index.js'

const problem = {
  id: 'circle1',
  title: "Buying a Big Rug",
  body: "Bob wants to surprise Alice by buying a new rug for their living room. Their living room is 28 feet wide and 20 feet long. To further surprise Alice, Bob wants to buy the biggest circular rug that will fit.",
  steps: steps
};
export { problem };
```

### Example Step File
```js
import hints from './circle1a-index.js';

const step = {
  id: 'circle1a',
  stepTitle: "1. Maximum Radius",
  stepBody: "What is the maximum radius of a circular rug that will fit in the room?",
  stepAnswer: ["10"],
  problemType: "TextBox",
  answerType: "numeric",
  hints: hints
}

export { step };
```

### Example Hint Pathway File
```js
var hints = [
    {
      id: 'circle1a-h1',
      title: "Size of the room",
      text: "Consider the shape of the room and the limitations this has on the radius of the rug.",
      type: "hint",
      dependencies: []
    },
    {
      id: 'circle1a-h2',
      title: "Constricting dimension",
      text: "The length (20ft) creates limitations on the size of the circle. What is the maximum diameter that the circle can be?",
      hintAnswer: ["20"],
      problemType: "TextBox",
      answerType: "numeric",
      type: "scaffold",
      dependencies: [0]
    },
    {
      id: 'circle1a-h3',
      title: "Solution",
      text: "Recall that the radius is half the diameter, so $r = \\frac{d}{2} = 10$",
      type: "solution",
      dependencies: [1]
    }
]

export {hints};
```

### Using HTML/React Objects as body text for LaTeX
```js
import hints from './pythag1a-index.js';
import React from 'react';
import { InlineMath } from 'react-katex';

const step = {
  id: 'pythag1a',
  stepTitle: "1. Vertical Component",
  stepBody: <div>
    What is the net force <InlineMath math={"\\sum F_y "} />, in the vertical direction?
  </div>,
  stepAnswer: ["0.10"],
  problemType: "TextBox",
  answerType: "algebra",
  hints: hints
}

export { step };
```

### Using OpenITS custom markdown parser for images and LaTeX
```js
import steps from './pythag1-index.js'

const problem = {
  id: 'pythag1', //Substeps will be in the form problem.id + 'a' and so on
  title: "Car Forces",
  body: "A %CAR% experiences three horizontal forces of -3.10N, 1.70N and -4.00N. It also experiences three vertical forces of -4.30N, 0.20N and 4.20N. \\n Round all answers to the hundredths place. \\n##triangle.png## ",
  steps: steps
};
export { problem };
```

## Creating Lesson Plans
* Create a lesson plan by making a new item in `config/lessonPlans.js`
* Each lesson plan has learning objectives which you can also list the target mastery level
* Lesson plans can have multiple learning objectives (for cumulative review)
* Users select a lesson upon visiting the site

```js
{
  id: "lesson1",
  name: "Lesson 1",
  topics: "Pythagorean Theorem",
  allowRecycle: true,
  learningObjectives: {
    pythagorean: 0.95
  }
}
```