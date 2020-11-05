# Squad Management Tool

*Obs: In the last day of the project, the football-api account i was using got blocked for some reason,
 and i was unable to create a new account on the site, so in the last commit i changed the api to another free one,
 this one doesn't show a relationship between players and teams, so the value refering to the number of times
 a player is picked by a team is randomized*

## Preparing for development / deployment

Before developing or deploying the code, you need to install the dependencies using the command

### `npm install`

It will prepare all the dependencies necessary 

## Developing the code

To start the application for development, run the command: 

### `npm start`

And open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Deploying the code

To build the application for production use, run the command:

### `npm run build`

It builds the app for production to the `build` folder.

## Testing the code

To test the application, run the command 

### `npm run test`

**At the moment the application has only some a small number of tests**

## Documentation and Style guide

This project has a documentation with the main components, examples and what they receive as props

To start the documentation run the command

### `npm run styleguide`

and open [http://localhost:6060](http://localhost:6060).

To build the docmentation for production use, run the command 

### `npm run styleguide:build`

It builds the app for production to the `styleguide` folder.


## Libraries

This project was created using the lastest version of [React](https://reactjs.org/) and [React router](https://reactrouter.com/)

For general components and layout, this project uses [material-ui](https://material-ui.com/).

For styling this project uses a css-in-js theme solution also from [material-ui](https://material-ui.com/).

General api calls are handled by [Axios](https://github.com/axios/axios).

To control and validate forms, [react-hook-form](https://react-hook-form.com/) was used

Documentation was created using [React Styleguidist](https://react-styleguidist.js.org/) and [PropTypes](https://www.npmjs.com/package/prop-types)

Tests were created with [Jest](https://jestjs.io/) and [react-test-renderer](https://reactjs.org/docs/test-renderer.html)


**All libraries used here were selected based on general community acceptance, how well they would adapt to the current necessities and simplicity to write and read**

## API

The api used in this project is the v3 demo version from [API-Football](https://www.api-football.com/documentation-beta)

On this demo you can only fetch data, not add new data. So for saving a new team I mocked a online API with [Mocky](https://designer.mocky.io/design)


## Future implementations

Due to time limitations, i wasn't able to develop everything in the scope of this project, for future development the main libraries i would recommend are:

**[React DnD](https://react-dnd.github.io/react-dnd/about)** for the drag and drop funcionality

**[Jest](https://jestjs.io/en/)** for further testing the application

Although i would never further research to be sure i'd use this specific libraries
