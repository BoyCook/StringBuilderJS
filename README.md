[![Build Status](https://travis-ci.org/BoyCook/StringBuilderJS.png?branch=master)](https://travis-ci.org/BoyCook/StringBuilderJS)
[![Coverage Status](https://coveralls.io/repos/BoyCook/StringBuilderJS/badge.png)](https://coveralls.io/r/BoyCook/StringBuilderJS)
[![Dependency Status](https://gemnasium.com/BoyCook/CDaaS.png)](https://gemnasium.com/BoyCook/StringBuilderJS)

[![NPM](https://nodei.co/npm/string-builder.png?downloads=true)](https://nodei.co/npm/string-builder) 

## Description
A String Builder implementation in JavaScript for node.js

## Usage

For using String based storage

    var builder = new StringBuilder();
    builder.append('Some text');
    builder.toString('Some text');

For using Array based storage

    var builder = new StringBuilder(true);
    builder.append('Some text');
    builder.toString('Some text');

## Performance
See the timings.js for an idea. String concatenation performs better over Array join

    node test/timings.js

## Including in node.js app

You can include the module from GitHub directly by adding the following to your `package.json` and then doing `npm install`

    "dependencies": {
        "string-builder": "https://github.com/BoyCook/StringBuilderJS/tarball/master"
    }

## Building
* `make test` runs the tests
* `make test-cov` runs the tests with coverage