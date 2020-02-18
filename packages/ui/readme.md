# @keldor-ds/ui

Reusable React components that powers BestDay frond end applications.

## Install

`yarn add @bestday/ui`

## Usage

```
import HotelSearchBox from '@keldor-ds/ui/HotelSearchBox';

const App = () => (
    <HotelSearchBox /> 
);
```

## Build

`$ yarn build` command will run both `$ yarn build:types` and `$ yarn build:js` 
creating types and transpiling source code

## Release
If you want to test and use `@keldor-ds/ui` locally:

`$ yarn release:local`.

<sub><sup>*Note: We assume your local private npm repo is running at http://localhost:4873*</sub></sup>

Then, you can later install it: 
`$ yarn add @keldor-ds/ui@1.0.0 --registry http://<local_npm_registry>`.



## Storybook
`@keldor-ds/ui` includes an instance of storybook. To run it, type:

`$ yarn storybook`
