# Project 4: Evaluate a News Article with Natural Language Processing 

## Overview

This project requires you to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. 

The goal of this project is to get get used to:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Instructions 
### Setting up the Project 
Fork the project Github repo, and then clone or download the zip file locally. Once you have the project locally, navigate to the project directory to install all dependencies. 
```
cd <project directory>
npm install
```
### Signup for an API key 
First, you will need to go [here](https://www.meaningcloud.com/developer/) and register for an account. Signing up will get you an API key.

At the root of the project, create a new file named `.env`. Inside the file, add the following line, replacing the stars with your personal API key. 

`API_KEY=**************************`

### Mode setup

After you've created your local copy and added your API key to the `.env` file, you're ready to start using it! 

### Production mode
To run the production server use these commands
```
npm run build-prod
npm run start

```
This will create a `dist` folder with the built code. The production server runs on `localhost:8081`

### Development mode
To start the developer server. Open two terminals and run these commands. 




Terminal one | Terminal two
------------ | -------------
npm run build-dev | npm run start
