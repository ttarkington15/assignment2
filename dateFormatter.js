

var dateFormatter ={
    getShortTime: function(date){
        debugger;
        var hour = date.getHours();
        var mins = date.getMinutes();
        var amPm = (hour > 11) ? "pm" : "am";
            // (? = if) (: = else)  (if hour>11 is true, amPm=pm, else amPm=am
        return hour + ":" + mins + " " + amPm;
    },
    getLongTime: function(date){
        var hour = date.getHours();
        var mins = date.getMinutes();
        var sec = date.getSeconds();
        var amPm = (hour > 11) ? "pm" : "am";
        return hour + ":" + mins + ":" + sec + " " + amPm;
        /*return this.getShortTime(date) + sec*/
    },
    getShortDate: function(date){
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();
        return month + "/" + day + "/" + year;
    },
    getLongDate: function(date){
        var month = new Array ();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
        var fullMonth = month[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();
        return fullMonth + " " + day + "," + year;
    },
    getShortDateTime: function(date){
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();
        var hour = date.getHours();
        var min = date.getMinutes();
        var amPm = (hour > 11) ? "pm" : "am";
        return month + "/" + day + "/" + year + " " + hour + ":" + min + " " + amPm;
    },
    getLongDateTime: function(date){
        var month = new Array ();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
        var fullMonth = month[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();
        var hour = date.getHours();
        var mins = date.getMinutes();
        var amPm = (hour > 11) ? "pm" : "am";
        return fullMonth + " " + day + "," + year + " " + hour + ":" + mins + " " + amPm;
    },
    getExtendedDateTime: function(date){
        var day = new Array ();
            day[0] = "Sunday";
            day[1] = "Monday";
            day[2] = "Tuesday";
            day[3] = "Wednesday";
            day[4] = "Thursday";
            day[5] = "Friday";
            day[6] = "Saturday";
        var weekday = day[date.getDay()];
        var month = new Array ();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
        var fullMonth = month[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();
        var hour = date.getHours();
        var mins = date.getMinutes();
        var amPm = (hour > 11) ? "pm" : "am";
        return weekday + "," + fullMonth + " " + day + "," + year + " " + hour + ":" + mins + " " + amPm;
    },
};
var date = new Date();
console.log(dateFormatter.getShortTime(date));
console.log(dateFormatter.getLongTime(date));
console.log(dateFormatter.getShortDate(date));
console.log(dateFormatter.getLongDate(date));
console.log(dateFormatter.getShortDateTime(date));
console.log(dateFormatter.getLongDateTime(date));
console.log(dateFormatter.getExtendedDateTime(date));

