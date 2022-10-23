# Rock, Paper Scissors Game

The Rock, Paper, Scissors Game was created to allow British children of primary school age (between 5 and 10 years) to exercise their fine motor skills by interacting with a computer game. It is also a fun way for them to experience how games can also be a matter of chance and not always just skill. I choose a typical children's game of rock, paper scissors, which many primary school aged children in England have played before to demonstrate this. Children will also learn a bit about what the properties of rock, paper and scissors can do in combination with one another. This game allows a player to play against the computer.


![Responsive Mockup](LINK IT HERE)

## Features 

### Existing Features


- __Heading__

![](vscode-remote://tinakargbo-rockpapersci-uzeowd38vua.ws-eu72.gitpod.io/workspace/Rock-Paper-Scissors-Project/assets/images/Header.png)

  - The heading "Rock, Paper, Scissors Game" is large and bold. This is to make it easy for children to read. The heading is also written in the Comic Neue font-type, which is child-friendly. This font type is not highly stylised, making it easier and clearer to read.

- __Game Area__

![](vscode-remote://tinakargbo-rockpapersci-uzeowd38vua.ws-eu72.gitpod.io/workspace/Rock-Paper-Scissors-Project/assets/images/Rock-paper-scissors-homepage.png)

  - This game area has a "Please Choose!" sub-heading, signalling to children that they should choose one of the buttons below the "Please Choose!" subheading. Underneath underneath this sits the three buttons for rock, paper and scissors in a horizontol row. Additionally he Reset button sits next to the three buttons. Children can choose one of the first three buttons ("Rock, "Paper" or "Scissors") in order to play a round against the computer. Each button has a small icon of the object that it signals beside the words "Rock", "Paper" and "Scissors" in order to show children who cannot read so well which button that they are pressing. 

The reset button can be pressed at anytime throughout the game to take the player back to the game's homepage. There the scores will go back to 0 for both the computer and the player. This allows players to start the game again at any time that they would like to.

- __Score Area__

![](vscode-remote://tinakargbo-rockpapersci-uzeowd38vua.ws-eu72.gitpod.io/workspace/Rock-Paper-Scissors-Project/assets/images/Score-area.png)

![](vscode-remote://tinakargbo-rockpapersci-uzeowd38vua.ws-eu72.gitpod.io/workspace/Rock-Paper-Scissors-Project/assets/images/Tie.png)

![](vscode-remote://tinakargbo-rockpapersci-uzeowd38vua.ws-eu72.gitpod.io/workspace/Rock-Paper-Scissors-Project/assets/images/Player-wins.png)

![](vscode-remote://tinakargbo-rockpapersci-uzeowd38vua.ws-eu72.gitpod.io/workspace/Rock-Paper-Scissors-Project/assets/images/Computer-wins.png)


  -  The score area is primarily for the player to know their score as against the computer's score. In this area, there is a section to the left with a yellow background showing "Your Score", which is the score of the player. To the right sits a section with a blue background showing the "Computer Score". Again it has pictures of the three images of hands representing a rock, a piece of paper and a pair of scissors. These colors are in blue and yellow because they are primary colours. These are colours that many children of primary school going age would be familiar with and know the names of. Primary colours are also child friendly because children like and see bright primary colours more clearly than dark and muted colours. These colours are familiar to the children and offers the warmth of familiarity for them without too much distraction from learning how to play a new game.

  When the player selects a button of one of the objects (rock, paper or scissors), the computer also randomly generates an object to play aginst the player. An image of the selected player object and the randomly selected computer object show up on screen. If the player wins that round then a "Player Wins!" message shows on screen and the player gets 1 point. If the computer wins that round then a "Computer Wins!" message shows on screen and the computer gets 1 point. If the computer and player both select the same object by chance, then a "Tie!" message shows on screen and both the player and computer get 1 point each. With every round played the socres are increased of the player, the computer or both player and computer where appropriate.


_ Footer Area _

![](vscode-remote://tinakargbo-rockpapersci-uzeowd38vua.ws-eu72.gitpod.io/workspace/Rock-Paper-Scissors-Project/assets/images/Footer.png)

The footer holds the rules of the game. The rules of the game allow children to know what object (rock, paper or scissors) can be used in combination with the other objects to win a round of the game. This has a slightly educational moment, which allows children to imagine what the objects can do in compbination with one another. The footer background colour is in red, which is a bright primary colour just like the colours above in the score section. A primary colour was again used for the footer for the same reasons that primary colours were used in the score area (see score area section above).  

### Features Left to Implement

- I would add a feature for players to play one another and not only to play against the computer.

## Testing 

![](vscode-remote://tinakargbo-rockpapersci-uzeowd38vua.ws-eu72.gitpod.io/workspace/Rock-Paper-Scissors-Project/assets/images/Rock-paper-scissors-Lighthouse-test.png)

I confirmed that the accessibility score and fonts and colours are easy to see and read by running it though Lighthouse in dev tools.

I confirmed that the webpage is responsive from 320px and above by testing this using dev tools.


### Validator Testing 

- HTML
    - No errors were returned when passing the HTML code through the official W3C validator.

- CSS
    - No errors were found when passing the CSS code through the official (Jigsaw) validator.
    
- JavaScript
    - No errors were found when passing the javascript code through the official Jshint validator.

      - The following metrics were returned: 
      - There are 6 functions in this file.
      - Function with the largest signature take 2 arguments, while the median is 0.
      - Largest function has 33 statements in it, while the median is 5.
      - The most complex function has a cyclomatic complexity value of 13 while the median is 1.

### Unfixed Bugs

There were no unfixed bugs in the code, since there were no bugs found.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

### Content 

- The structure of and idea for the page and game was inspired by the Code Institute's Rock, Paper, Scissors "Portfolio Project Scope" video. Please see the link here: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/ 

- The information about why primary colours are attractive for children can be found on this website, "Sciencing". Please see the link here: https://sciencing.com/do-bright-colors-appeal-kids-5476948.html

### Media

- The images of the rock, paper, Scissors hands used in the game area was taken from the website: https://www.vectorstock.com/royalty-free-vector/rock-paper-scissors-hand-gesture-vector-25169740 

- The icons on the Rock, Paper, Scissors buttons were taken from the font awesome website here: https://kit.fontawesome.com/bfe584297d.js 

## Other General Project Advice

