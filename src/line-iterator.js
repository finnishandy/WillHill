/**
 * Created by Finnishandy on 08/11/2015.
 */
var fs = require('fs');
var filename = process.argv[2];

if (!filename) {
    console.log('usage: >node .q1/answer.js filename');
    process.exit(1);
}
var iterator = function(dirname) {
    this.dirname = dirname
};

iterator.prototype.iterate = function(func) {
    fs.readFile(this.dirname + "/" + filename, {encoding: 'utf-8'}, function (err, data) {
        if (!err) {
            var lines = data.split(/\n/);
            lines.forEach(function (line) {
                func.call(undefined, line.split(/\s+/));
            });
        } else {
            console.log("error reading file: " + err);
        }

    });
};

module.exports = iterator;