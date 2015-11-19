/**
 * Created by Finnishandy on 08/11/2015.
 ******
 Q4
 Given two integers x and y, we can calculate all combinations of x and y when given an upper and lower bound for their values.
 For example, using 2 and 4 as the lower and upper bounds for x and y gives us the following pairs of x and y:
 {2,2} {2,3} {2,4} {3,2} {3,3} {3,4} {4,2} {4,3} {4,4} .
 For each of these pairs, we can calculate   .
 2  =4,2  =8,2  =16,3  =9,3  =27, 3  =81,4  =16,4  =64,4  =256
 Removing duplicate values, we get:
 4, 8, 9, 16, 27, 64, 81, 256
 This is 8 distinct terms.
 Write a program that, when given two integer bounds as input, outputs the number of distinct values of   .
 You may expect each pair of bounds on a single line, separated by a space. The input may contain multiple lines.
 Example input:
 2 4
 Example output
 8
 ****/
var iterator = require('../src/line-iterator');
var lineIterator = new iterator(__dirname);


var filename = process.argv[2];
var combArray = [];
var results = {};

var findCombs = function(bounds, pivot) {
    var _pivot = pivot || parseInt(bounds[0]);
    for (var i = bounds[0]; i <= bounds[1]; i++) {
        combArray.push([_pivot, parseInt(i)]);
    }
    _pivot++;
    return (_pivot > bounds[1]) ? combArray : findCombs(bounds, _pivot)
};


lineIterator.iterate(function(line) {
    combArray = [];
    var combos = findCombs(line);
    combos.forEach(function(obj){
        results[Math.pow(obj[0], obj[1])] = "foo";
    });
    console.log(Object.keys(results).length);
});