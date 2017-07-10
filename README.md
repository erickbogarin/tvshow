# Tvshow

- App hosted at https://maniacal-surprise.surge.sh/

## Features of this project
- Search movies
- Movie overview (description, score, popularity, release date)
- Pagination
- Unit tests

## Getting Started

### Prerequisites
- node: >= 6.0.0

### How do I get up & running?
- Clone this repo
- `npm install` or `yarn` to install all req'd dependencies
- `npm run start` to start the local server

### Deployment
- npm run deploy

## Code Overview

### Application Structure
- `app/index.html` - The entry point to our application. This file connects with React using an ID.
- `app/scripts` - This folder contains the javascript code as well it's the central location
for our WEB client interface.
- `app/styles`- There's included a configuration that assists in viewing & modifying SASS.
- `config/` - This folder contains the configuration for webpack

## Technology Stack
- React + Redux + Router
- Webpack
- Sass
- Jest, enzyme
