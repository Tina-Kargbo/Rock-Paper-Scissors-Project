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

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

### Content 

- The structure of and idea for the page and game came from the Code Institute's Rock, Paper, Scissors "Portfolio Project Scope" video. Please see the link here: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/ 

- The information concerning the importance of primary colours for children can be found on this website, "Sciencing". Please see the link here: https://sciencing.com/do-bright-colors-appeal-kids-5476948.html

### Media

- The images of the rock, paper, Scissors hands used in the game area was taken from the website: https://www.vectorstock.com/royalty-free-vector/rock-paper-scissors-hand-gesture-vector-25169740 

- The icons on the Rock, Paper, Scissors buttons were taken from the font awesome website here: https://kit.fontawesome.com/bfe584297d.js 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 