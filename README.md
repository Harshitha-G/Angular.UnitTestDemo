[![Build Status](https://travis-ci.org/stephenzeng/Angular.UnitTestDemo.svg)](https://travis-ci.org/stephenzeng/Angular.UnitTestDemo)

Angular.UnitTestDemo
====================

A small demo project for AngularJS client side unit test by using jasmine, karma, PhantomJS and integrated with Travis-ci.

#### Prerequisites
Download and install Node.js from http://nodejs.org.<br>
In command line window go to the project folder, then run the below commands to install the npm packages:

```
npm install -g karma-cli
npm install -g phantomjs
npm install karma-phantomjs-launcher –save-dev
```

#### Run the tests
Execute the belwo command in command line under the project folder:

```
karma start karma.conf.js
```