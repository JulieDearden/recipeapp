Recipe Finder Presentation
Introduction
Hello and welcome to my project. I decided to do a recipe finder and I used the mealdb API to fetch the recipes. My background is that 10 years ago I was building websites in Dreamweaver so I was okay with the HTML/CSS but am still getting my head around the react/javascript. I watched a few videos on youtube and started building with help from the videos from the sessions. I used tech forums and also chat GPT.

How it works is that it picks out recipes from words in the titles of the recipes (show demonstration). You can type in chicken and you get chicken recipes. You can also type in pie or soup and it will find all recipes containing those words. The recipes scroll up and if you make an error you get the error message/not found. 

Examples of problem solving
Whilst building the Recipe Finder it gave me chance to play around with tailwind, the bg, padding and margins etc. and the overall visuals of the webpage.

Ingredients list
The ingredients list wasn’t inline with the photo and Instructions list. I resolved this by setting the image to list-inside. 
They were also disappearing when I made the page smaller so I used flex flex-wrap items-center and wrapped them in a div with the photo.

Background
Background from Freepik wasn’t showing and then it sat above the webpage when on GuestLayout. When the page was scrolled the background disappeared. I tried different ways of solving this to no avail then sorted it by accident. Moved the div and created the fragment <> </> jsx syntax as showing as an error and was suggested in Dev Tools.

Photos
Couldn’t decide whether to set them as a percentage or an actual size as they were large. I set them as a size in pixels but discovered that some of the photos looked distorted. They are now set as a percentage.

Footer
The footer disappeared and I sorted this with help from a forum (stack overflow) by changing the app file.


Things to do now
The about and contact pages work and need some content. 

If I shrink the page - all works okay but if you go too small the text background disappears. I have not had chance to look at that yet!

Also if you type in the error page the text changes to that word so people may think that it isn’t in the recipes but if you click submit it could be there. Need to make it so that the words don’t change.


Resources
API - https://www.API themealdb.com/api.php
Youtube 
Stack overflow forum
Geeks for Geeks forum
Chat GPT
