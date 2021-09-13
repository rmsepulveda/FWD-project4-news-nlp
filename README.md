# Project 4: Evaluate a News Article with Natural Language Processing 

## Overview

This project is part of Udacity's Front End Development Nanodegree. From the course: 
> This project requires you to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. 

The goal of this project is to get get used to:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

In addition to being able to analyze news articles and blogs through URLs, in my project users can also enter their own text to analyze. 

## Instructions 
### Setting up the Project :computer:
Fork the project Github repo, and then clone or download the zip file locally. Once you have the project locally, navigate to the project directory to install all dependencies. 

```
cd <project directory>
npm install
```

### Signup for an API key :key:
First, you will need to go [here](https://www.meaningcloud.com/developer/) and register for an account. Signing up will get you an API key.

At the root of the project, create a new file named `.env`. Inside the file, add the following line, replacing the stars with your personal API key. 

`API_KEY=**************************`

### After setup :fire:

After you've created your local copy and added your API key to the `.env` file, you're ready to start using it! 

Use the following command to start the developer server. This should open a new window in your browser with the app running on `localhost:8080`
```
npm run build-dev
```
To run the production server (with express), run these commands
```
npm run build-prod
npm run start
```
This will create a `dist` folder with the built code. The production server runs on `localhost:8081`

Now the app should be all set and ready to use. You can enter your own text into the form to analyze it, or enter a URL to an article of blog post instead. 

For more information on the results of the text analysis, check out the [MeaningCloud API documentation](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response).
