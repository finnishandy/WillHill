/**
 * Created by Finnishandy on 08/11/2015.
 */
var reverseArr = function(arr) {
    var reversed = []
    arr.forEach(function(val, idx) {
        reversed.unshift(val);
    });
    return reversed;
};

module.exports = reverseArr;
