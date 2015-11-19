/**
 * Created by Finnishandy on 08/11/2015.
 */
var iterator = require('../src/line-iterator');
var lineIterator = new iterator(__dirname);
var reverse = require('../src/reverse');


lineIterator.iterate(function(line) {
    console.log(reverse(line));
});

