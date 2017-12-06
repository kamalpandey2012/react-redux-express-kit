/*eslint-disable no-var*/
//set test environment
process.env.NODE_ENV = 'test';

//To run ES6 in testing environment
require('babel-register')();

//To disable features that mocha doesn't understand
require.extensions['.css'] = function(){return null;};
require.extensions['.jpg'] = function(){return null;};
require.extensions['.png'] = function(){return null;};

//import jsdom to emulate browser environment inside the test environment
var jsdom = require('jsdom').jsdom;

//properties we will require from jsdom
var exposedProperties = ['window', 'document', 'navigator'];

//setting properties to global object of node so that they will be available globally 
global.document = jsdom('');
global.window = document.defaultView;

//Get properties from default view if they do not exist on global then add them to global object
Object.keys(document.defaultView).forEach((property) =>{
    if (typeof global[property] === 'undefined'){
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

//set navigator property to global object
global.navigator = {
    userAgent: 'node.js'
};



