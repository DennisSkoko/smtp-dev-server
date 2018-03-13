# SMTP Dev Server

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple SMTP server that stores all receiving mails to a MySQLite database.

## Requirements
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

## Installation
To install the dependencies, just execute `npm install`

## Configuration
To configure the application you can create a `.env` file
where you can set global environment variables within the application.
Following values can be set (format: KEY=VALUE):

- **NODE_ENV** - If the application will be executed in development or production mode. (Default: *development*)
- **LOG_LEVEL** - The minimum log level the logger will output. (Default: *info*)

## How to run
To start the server then execute `npm start`.
If you are developing you can execute `npm run start:w` instead.
Then the process will watch the files and restart whenever you edit a file.

## Testing
To test the application then execute `npm test`.
