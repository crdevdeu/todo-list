## todo-list

A simple todo list app written in React.

### Quick start

```bash
$ npm install
$ npm start
```

Then go to http://localhost:8080/

### Development

#### React components

React components should live in `src/modules`

The basic directory structure is

```
/src
  /modules
    /App
      component.js
      index.js
```

##### Files

**index.js**

Defines the API for the component. It exports
everything which other modules need to access.

```js
export { Component as App } from './component';
```

**component.js**

Contains the React component.

Rules:
- Default to stateless components.
- Isolate business logic in pure functional utils.
- The export is a React component so should be in PascalCase i.e. `Component`.

```js
import React from 'react';

/**
 * The top level App component.
 * @returns {Object}
 */
export const Component = props => (
  ...
);

Component.displayName = 'App';
```

### Contributing

Initialise the project as a git repository and push to your favourite git host.

Open one or more PRs into the remote master branch of your project. Share the remote repository with your contact at Lodgify.

A PR will not be approved if any of the following commands fail
  - `npm run lint`
  - `npm run build`
