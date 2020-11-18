# TWIST Web Project

## Update 11/18/2020

If you have downloaded/cloned a branch onto your computer and want to work on the files locally, here are a few things to take note of:

1. Make sure node.js is installed onto your computer
2. Open a terminal/command prompt/powershell in the project folder
3. Run 'npm install'

This will install all dependencies for the project including express, pug, and a handy package called nodemon. After you install the dependencies, you can simply type 'nodemon' into whatever type of terminal window you have opened in the project folder and it will host the website on port 3000. Just type 'localhost:3000' into the search bar of your web browser and you will be able to see the rendered webpage. This also updates automatically as you make changes to the code. Whenever you would like to quit, simple press CTRL + C in the terminal window you have opened.  
  
If you have any questions, feel free to ask me.  
-Bailey Underwood

## Original

This Github repository will contain all of the files necessary to build/run the TWIST website including both the database and the user interface.

The repository has a few different branches for building and testing:

- main
- database
- website

Feel free to add more branches to the repository as you see fit. For example, if you need a branch to test a new feature or design but don't want to mess with code in a given branch, you can easily add a branch off of another then create a pull request when done to bring it back to the original branch.

**DO NOT DIRECTLY COMMIT TO MAIN**  
This can cause problems with code that has been verified to work. The main branch is for the final product and should be *mostly* bug free.  
The code changes will only be brought into main once it is verified to work with or rather doesn't break the code already in the main branch.  
Any changes you make to the database must first be put into the database branch, any changes you make to the HTML must be put into the website branch, etc.  
And again, feel free to add branches to test out code on your own so you don't have to worry about other people's changes messing something up.

This README file will be replaced with an overview of the project when we submit the final build.
