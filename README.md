# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Brian Velecela**

Time spent: **15** hours spent in total

Link to project: https://natural-auspicious-pull.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
      - https://www.rapidtables.com/web/css/css-color.html  
      - https://www.the-art-of-web.com/javascript/creating-sounds/
      - https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
      - https://www.programiz.com/javascript/continue-statement

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
    One challenge I encounter in creating this project was adding one of the bonus features, the timer. One thing, I couldn't figure out 
    was when and where to implement this timer. In the instructions, it states to build a spot for the timer. So inside the HTML file
    I created a < p > in between the description and the start/stop button. Givning it an id of "timer". What I was thinking for this 
    bonus feature is setting a timer to see how fast it take for you to complete the entire game. But as I was imagining the game in my head,
    it didn't make any funner or changeller the game. After couple of hours, so seeing similar game, the timer would be better to have it 
    everytime a new sequnce comes. We will make a function saying what the timer will do. I was stuck here, didn't know how to start
    this function. The sources provided in the project, given me a clear idea of how to implent this. Another thing, I was considering is 
    resetting everytime, we press on stop button and when pattern is guessed right. I set three variable, a timer, a count and a reset. These
    variable will help the timer function well. Inside the function, I made sure to check two things, one to check if the timer has
    reach its limit, which in this case is 20 sec, or check if the game is reset. We will clear timer. We also check if game is not reset then it 
    stop and deliver a message. The countDown() is called inside the playsequence(), so that every pattern, timer will reset and restart
    the 20 sec back again.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    After completing this project, I was wondering if web development contains the features to implement a website like apple. For example,
    the apple website has all these pop ups, a 3D visual of the new phone etc. Are these features done through the script.js? or are these features 
    taken from other sources and be used in your script.js? Another question I had is once your website is completed, how does a website 
    go on live for the world to use? Is there a process that need to be taken before going live?  In this project, I notice when calling a 
    global variable or any variable, it doesn't seem to recognize that the variable is being called. For example, in c++, when we have a variable (int number),
    and inside a function we decide to use that variable, the only difference is once I enter on the keyword "nu", it automatically pops the int number that we declared before,
    and all I have to do is press TAB and it will complete my code. It's faster and less time wasted in writing variable name. Is this only happens on this plateform or
    java script is performed like that? 
    

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    
    If I had the few hours to work on this project, I would like to first make the website look more appealing to the user's eye. I would make the background
    have a multiply colors, where the background changes color every 5 sec. Another is laying out every component in the web to be more pleasing to the eye. I would have
    the title to be centered, the description also be centered, along of the start/stop button. A feature I may want to add to the start/stop 
    button is having the button to be green at Start and have the color red on Stop. Another feature is to have another button, where it will control the 
    amount of buttons inside the gameButtonArea, which means adding and removing button off the screen. I would like to expand the length of the game, where
    each correct pattern will be faster and longer for the user to know. With this feature added, it will also be a good idea to have a score board, where
    you can see or track how fast you were able to complete the game. Another cool feature, is to have the user record its own sounds and apply their sounds 
    to the button dispalyed. I would include a setting page, to modify the screen, maybe have dark/light mode, creating a profile with your name and score baord for 
    others to see. 
    

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.