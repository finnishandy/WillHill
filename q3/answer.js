/**
 * Created by Finnishandy on 08/11/2015.
 ****
 Q3
 Write a program that, when given two months, outputs the number of months in between that contain five Sundays.
 This is inclusive, for example given an input of “September 2013 December 2013”, your program should consider September, October, November and December 2013.
 The dates will be provided as two pairs of months and years separated by spaces, per line, and the input may contain multiple lines.
 Example input:
 September 2013 December 2013
 Example output:
 2
****/
var MONTHS = {"JANUARY": 0, "FEBRUARY": 1, "MARCH" : 2,"APRIL": 3, "MAY": 4, "JUNE": 5, "JULY": 6, "AUGUST": 7, "SEPTEMBER": 8, "OCTOBER": 9, "NOVEMBER": 10, "DECEMBER": 11};

var iterator = require('../src/line-iterator');
var lineIterator = new iterator(__dirname);
var fiveSundayMonths = 0;


// ok this is too big of a function, but running short on energy to refactor
var countFiveSundayMonths = function(startDate, endDate) {
    var firstSunday =   (startDate.getDay() > 0) ? 6 - startDate.getDay() : 0;
    var days = new Date(startDate.getYear(), startDate.getMonth(), 0).getDate();
    if (((days - firstSunday) / 7) > 4) {fiveSundayMonths++}
    startDate.setMonth(startDate.getMonth() + 1);
    var s =  startDate.getTime();
    var e = endDate.getTime();
    if ( s >= e) {
        return fiveSundayMonths;
    } else {
        return countFiveSundayMonths(startDate, endDate);
    }
};


lineIterator.iterate(function(dates) {
    fiveSundayMonths = 0;
    var first = new Date( parseInt(dates[1]), MONTHS[dates[0].toUpperCase()], 1);
    var second = new Date( parseInt(dates[3]), MONTHS[dates[2].toUpperCase()], 1);
    var _sundays = (first.getTime() > second.getTime()) ? countFiveSundayMonths(second, first) : countFiveSundayMonths(first, second);
    console.log( _sundays );
});


