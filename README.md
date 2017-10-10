# SSUI-Homework-4
This project is a starter example of what to do for SSUI HW4. See the finished result at http://marybethkery.com/SSUI-Homework-4/

## Part 1: Setting up a React project
1. ### Install Node.js
    * React is a library that generally needs to be hosted on a server. So let's get started with our first server-side Javascript development. In order to develop Javascript on the server side, we're going to need a Javascript runtime. We'll use Node.js. Don't worry if this sounds like gibberish, we'll be introducing server side development next lecture, and you don't need to actually understand it to get started.
    * Download Node.js from it's main site: https://nodejs.org/en/download/
2. ### Create a new GitHub Repository
    * like last time, please add me `mkery` as a collaborator so that later I can grade your code
    * like last time, clone your new repo using `git clone <address of your repo>`
3. ### Install React
    * Node.js comes with its own package manager NPM. Check out NPM's webpage when you get a chance, there's millions of handy packages you're free to use: https://www.npmjs.com/. For now, we're just going to install React.
    * In your github repository folder for this assignment, call `npm install -g create-react-app` from your terminal
    * When that's finished, call `create-react-app my-app` (replace `my-app` with whatever you'd like to name your app)
    * In your terminal, call `cd my-app` (or whatever you named `my-app`)
    * In your terminal, call `npm start` With this command, your beginning React project should open up in your browser.
 
## Part 2: Development Fun!
See the assignment instructions https://github.com/mkery/SSUI-Homework-4/blob/master/Assignment%204%20-%20SSUI.pdf

## Part 3: Deploying your project
Okay, so far, you have been testing your React project locally on your machine. Problem: you's like future employers, friends, me your grader, to see your awesome app, but you do not have a server. So, once again we will be using Github pages to host our completed app.
1. Same as last time, go to your github repo on the GitHub website, go to settings, and create a Github Page for this app.
2. Now, go to your code, and locate the `package.json` file in your React app. A `package.json` file is a stardard thing that appears in all Node.js apps, and it's pretty much meta data about how to run your app, and different dependencies your app has.
3. add a new field `"homepage": "https://<github-username>.github.io/<project-repo>"` to your `package.json` file (replace the dummy github web address with the web address of the GitHub Pages page where you will be hosting your app).
4. Now, type in your terminal `npm run build` and wait whilst React prepares a production version of your app.
5. In the terminal, type: `npm install --save-dev gh-pages`. This is a NPM package for GitHub Pages, so that we can control how GitHub Pages renders our content. Thanks Github <3!
6. Once that's installed, add another line to your app's `package.json` file: `"deploy" : "npm run build&&gh-pages -d build"`. What this does is create a new command to build the app, and also run the github pages tool.
7. Run in terminal: `npm run deploy`
8. Okay! Almost there. Go back online to your Github repo, and head back to the Settings page. Look at the Github Pages box, and change the `Source` option to the branch `gh-pages`.
9. :tada: Now check your github pages url for this repo. Your react app should be up and running! :tada:
   
