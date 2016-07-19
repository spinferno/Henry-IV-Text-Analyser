Henry IV Text Analyser
=====

This web application aims to represent the emotions from the Shakespeare play Henry IV.
Key features intended of this web application are:

* Line-by-line Emotion analysis of the play, fetched from data from Watson API
* An intuitive user interface which makes the emotion data accessible and friendly to use.
* graphing of emotions matching each line of the play.

Requirements
----------
* Node
* ExpressJS web application framework
* Webpack
* React (Redux, Chartjs)
* Sass CSS preprocessor

Building
----------
### Node / Expressjs

```sh
npm install
npm run dev
```
Expressjs should then serve the app to http://localhost:3000/

When deploying to production, please update the NODE_ENV variable in package.json from DEV to PROD

