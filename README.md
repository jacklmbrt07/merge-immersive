# [Merge Immersive](http://www.mergeimmersive.com/)

## Created by "The A-Team": Dominique Hosea, Jack Lambert, Johnathan Blackburn

### August 2020

<!-- Link to the project via heroku -->

Students of our GA Cohort need a more direct way to communicate with each other, and reveal each others portfolios.

The project idea came about by a similar topic and concept from Dominique's project 2, "Career Connect".

Merge Immersive operates in a similar fashion to most social media websites but on a smaller scale. On the home page, you will see students profiles on cards, and their profile informaton upon clicking them. Within profiles, you can see their github portfolio,

## Technologies Used

This application was developed with a full MERN stack. and written in JavaScript. Styling done with Bootstrap and CSS.

M - MongoDB to store data  
E - Express, a back-end framework  
R - React, a client side framework  
N - NodeJS - to run back end service

other dependencies used:

- Morgan - HTTP request logger middleware for node.js
- Axios - Promise based HTTP client for the browser and node.js
- Bcrypt - A library to hash passwords
- Mongoose - for MongoDB validation
- React-Bootstrap - a React library for building pre-styled components
- Passport - Authentication middleware for NodeJs

## Getting Started

To get started with this website, use the SIGN UP link to bring to the sign up page. This site is designed with GA students in mind. On the Sign Up page you will be prompted for an email address and name, and other information about your cohort.

In the top right corner is a dropdown menu where a user can edit their profile information.
Users can see each others profiles on a feed, which displays information they may have deemed willing to share with other classmates. For example, github projects, linked in information, their location, hobbies, etc.
Click this link here to [Merge Immersive](http://www.mergeimmersive.com/)

![](public/trello.png)

This project was created with heavy planning by our team, Daily meetings were helf, and meeting minutes were documented. see below for our trello board.
[Link to our Trello Board](https://trello.com/b/yJeu0NwC)

## Unsolved Problems

Including an iframe was a difficult challenge, that was partially solved. the poroblem is that the iframe could not request data from a specific user.
the Edit form page lead to many problems upon figuring out the best way to be interactive.
Inlluding github data into a User's profile has been attempeted but yet to be solved.
Light and Dark mode button was attempted but unsolved.

## Future Enhancements

- Main issue we could not face was including a linked in API request, in order to show job data, this would be a useful feature.
- Including a vetting process to make sure users are associated with GA
- a profile strength progress bar
- Users can comment or like on other people's features
