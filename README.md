based off: https://medium.com/recraftrelic/building-a-react-component-as-a-npm-module-18308d4ccde9


from 'dummy-react-npm-module-master'


$ npm run build


$ pwd


copy result (REACT_MODULE_PATH e.g. /Users/ahmedgadir/GitHub/creating-ag-grid-react-npm-package/dummy-react-npm-module-master)


cd into root


cd into dummy app

( you might have to run $ yarn remove dummy-react-npm-module)


$ yarn add REACT_MODULE_PATH


$ npm start





after making changes to the dummy-module
cd into dummy-react-npm-module-master
delete compiled index.js file
$ npm run build
cd into root
cd into dummy-app
$ yarn remove dummy-react-npm-module
$ yarn add REACT_MODULE_PATH
$ npm start

