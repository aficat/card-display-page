# card-display-page
A simple Next.JS app using Material UI framework. It displays a few items in a page using Material UI cards and also has an AppBar with a Side Navigation. Moreover, it displays the Material UI Table component. Deployed using gh-pages.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Version Control Log
All notable version control changes to this project will be documented in [CHANGELOG.md](https://github.com/aficat/vidtube/blob/master/CHANGELOG.md).
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

#### `npm run deploy`

Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

1. To publish it at https://myusername.github.io/my-app, run:

```
npm install --save gh-pages
```

2. Add the following scripts in your package.json:

```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "dev": "next -p 8080",
    "build": "next build",
    "start": "next start -p 8080"
```
The predeploy script will run automatically before deploy is run.

3. Deploy the site by running npm run deploy
Then run:

```
npm run deploy
```

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).