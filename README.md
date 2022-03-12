[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# [Expense-Tracker application](https://mrylraihan.github.io/expense-frontend/)

This Project was built using a React frontend utilizing a Express and node.js backend for its api calls and mongoose/ mongoDB for its data storage. if you want to check out my code here are the links for my [FrontEnd](https://github.com/mrylraihan/expense-frontend) and [BackEnd](https://github.com/mrylraihan/expense-backend).

## Installation Guide
### Backend
1. [Download](https://github.com/mrylraihan/expense-backend) the Express backend application.
1. Unzip the file in your directory.
1. Once opened run npm install to install all dependencies.
1. Then run nodemon to make sure the server can run.
1. your should see this ```listening on port 4741``` in your terminal
1. Congrats your backend is running  
---
### Frontend
1. [Download](https://github.com/mrylraihan/expense-frontend) the React Frontend application.
1. Unzip the file in your directory.
1. Once opened run npm install to install all dependencies.
2. Then run npm start to make sure your app can start up.
3. your should see this ```Compiled successfully!``` in your terminal
1. Congrats your Frontend is running  

## Deployment

For Deployment we used github [pages](https://pages.github.com/) for the React portion and also used [heroku](https://heroku.com/) and atlas/[MongoDb](https://www.mongodb.com/cloud-2) for hosting the backend.

## About The Expense Tracker Application

the expense tracker is suppose to allow users to keep track of there monthly spending,
the bar will fill up to a 100% depending on the highest expense you have and everything else in comparison to it, this will give you a visual of your monthly spending and expense to help plan or spread out monthly expense better. For a cleaner expense the user will be able to filter expenses by years but can all so see that have the option to see all expenses.

## Instructions

### MVP User Stories

1. As an unregistered user, I would like to sign up with username, email and password.
1. As a registered user, I would like to sign in with email and password.
1. As a signed in user, I would like to change password.
1. As a signed in user, I would like to sign out.
1. As a signed in user, I would like to add a expense to expense list and will reflect on chart.
1. As a signed in user, I would like to update a expenses.
1. As a signed in user, I would like to delete a expenses.
1. As a signed in user, I would like to see all my expense or filter by year.
1. As a signed in user, only have access to view there own expenses.


### Included Routes

This application comes with a handful of front-end routes that display
different components for user actions.

| Endpoint         | Component | Must Be Signed In? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/change-password` | `ChangePassword`  | Yes |
| `/sign-out`        | `SignOut`   | Yes |
| `/expenses`       | `ExpenseCreate`    | Yes |
| `/expenses`       | `GetAllExpenses`    | Yes |
| `/expenses/:id`       | `ModifyExpense`    | Yes |
| `/expenses/:id` | `UpdateExpense`  | Yes |
| `/expenses/:id`        | `GetOneExpense`   | Yes |

There is no HTTP verb listed because these are all front-end routes handled by
React. Some of these routes should not be available unless a user is signed in,
so they will redirect to the `/` page if not signed in.

## ERD and UserStory Setup
images

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
