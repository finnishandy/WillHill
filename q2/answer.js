/**
 * Created by Finnishandy on 08/11/2015.
 *
 Q2
 In the UK there are coins with the following denominations: 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), £2 (200p)
 We can make 3p using the following two distinct combinations: 1p + 1p + 1p
 1p + 2p
 Write a program that, when given an input Xp, outputs the number of distinct ways Xp can be produced using UK coins. You may expect the input to contain a single number for X on each line. Each type of coin may be used an arbitrary number of times.
 Example input:
 3
 1
 Example output:
 2 1
 ***/
var iterator = require('../src/line-iterator');
var lineIterator = new iterator(__dirname);

var COINS = [1, 2, 5, 10, 20, 50, 100, 200];

var distinct = 0;

var countDistinct = function(pennies, divisors) {
    var leng = divisors.length;
    var coin = pennies / divisors[leng - 1];
    if (coin >= 1){
        distinct++;
    }
    if (leng >  0)countDistinct(pennies % divisors[leng - 1], divisors.slice(0, leng - 1));
    return distinct;
};

lineIterator.iterate(function(penny) {
    var _penny = parseInt(penny);
    if (isNaN(_penny)) {
        console.log("not an integer.. exiting");
        process.exit(1);
    }
    console.log(countDistinct(penny, COINS));
    distinct = 0;
});