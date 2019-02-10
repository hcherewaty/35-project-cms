![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## CMS

### Author: Heather Cherewaty

#### Collaborated with:  Becca Lee, Hannah Ingham, and Brent Woodward

### Links and Resources
[![Build Status](https://www.travis-ci.com/hcherewaty/35-project-cms.svg?branch=master)](https://www.travis-ci.com/hcherewaty/35-project-cms)

* [repo](https://github.com/hcherewaty/35-project-cms)
* [front-end](https://d1x4e9e2dcnr90.cloudfront.net/)
* [travis](https://www.travis-ci.com/hcherewaty/35-project-cms)


### Modules
#### `modulename.js`
##### Exported Values and Methods

#### `index.js`
Renders the `CMS` component, sets up browser router, and connects to redux store, providing it to all components.  `index.js` App component rendered via `root` on `index.html`.

#### `cms.js`
Renders the `Models`, `Record`, and `Records` components, sets up `Browser Router`, and connects to redux store; providing it to all components.  Also, renders additional markup.

#### `models.js`
Renders `models` from data returned from API call.  Handles `onClick` events when choosing a model.

#### `records.js`
Information is rendered after model condition is satifised in `When` component. 
Renders `records` data from API call after a `model` is choosen. Handles `onClick` events for getting specific record data and for deleting a record from DB.  

#### `record.js`
Information is rendered after schema/model condition is satifised in `When` component. Renders `record` data within `Form` component for chosen record. Handles `onSubmit` events when a chosen record is updated or added to DB.  Also, gets records and schemas for models.

#### `actions.js`
Receives actions to dispatch from redux store.  Dispatches action and payload to reducers in `reducers.js`.

#### `reducers.js`
Receives dispatched actions from `actions.js`. Updates state from `actions` payload to redux store.

#### `store/index.js`
Redux store configuration, `thunk` middleware applied.  Imports `reducers` for store use.

### Setup
#### `.env` requirements
API url defined in ENV.

#### Running the app 
Click on front-end link listed under Links and Resources. This will display web app deployed to AWS.

#### Running the app Locally
* `npm i` to install package dependencies
* `npm start` will navigate to the front-end page in your browser. 
* Choose a model.
  * Choose a record.
  * Update, delete, or post a new record.


#### Tests
* To run tests use the command `npm test` or `npm test <filename>` to test individual test files:  `actions.test.js`, `components.test.js`, `reducers.test.js`.
* Assertions made: 
    * `componenets.test.js`: Do the components exist, do they render what is expected?
    * `actions.test.js`:  Are actions dispatched? 
    * `reducers.test.js`: Is initial state available, do reducers provide state change?

#### UML
![UML](uml.jpg)
![Data Flow](dataflow.jpg)
