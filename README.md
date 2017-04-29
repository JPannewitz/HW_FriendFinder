# HW_FriendFinder
Homework Assignment Week 13


## Live Link 
 - https://friend-finder-jpannewitz.herokuapp.com/

## Description on how to use the app
This friend finder app allows the user to get matched to his or her next best friend based on answers to a short survey. P.S. Your next BFF is a Disney princess.

## Requirements

- The survey should have 10 questions. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
- Server.js file should require the basic npm packages we've used in class: express, body-parser and path.
- htmlRoutes.js file should include two routes:
A GET Route to /survey which should display the survey page.
A default USE route that leads to home.html which displays the home page.
- apiRoutes.js file should contain two routes:
A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
- Save the data in your app as an array of objects. 
- Determine the user's most compatible friend using the following as a guide:
Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference. The closest match will be the user with the least amount of difference.
- Once you've found the current user's most compatible friend, display the result as a modal pop-up.


## Technologies Used

- HTML, Bootstrap & CSS for the layout
- Javascript/JQuery to dynamically update HTML
- Node.js
- Modules: express, body-parser, path

## Code Explaination
- Used HTML/ bootstrap template 
- JQuery on-click events for Submit button
- Node.js to access Friends data API

-------------