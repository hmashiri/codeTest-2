// //#####################################################################################

function getTimeAndDay() {	
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ap = "AM";
    var weekday = []; //  <<< setting up an empty array

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var getCurrentDay = weekday[now.getDay()];

    if (hour > 11) { ap = "PM"; }
    if (hour > 12) { hour = hour - 12; }
    if (hour == 0) { hour = 12; }
    if (hour < 10) { hour = "0" + hour; }
    if (minute < 10) { minute = "0" + minute; }
    if (second < 10) { second = "0" + second; }

    var dayAndTime = "Today is " + getCurrentDay + '. ' + 'The current time is ' +
        hour + ':' + minute + ':' + second + ' ' + ap + '.';

    document.write(dayAndTime);
}

// //#####################################################################################


function animateString(id)   
{  
    var element = document.getElementById(id);  
    var textNode = element.childNodes[0]; // assuming no other children  
    var text = textNode.data;  
  
	setInterval(function ()   
	{  
	 text = text[text.length - 1] + text.substring(0, text.length - 1);  
	  textNode.data = text;  
	}, 100);  

}  

//####################################################################################

var array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

function highToLow(a,b){
	return (b - a)
}
document.write(array.sort(highToLow));
console.log(array.sort(highToLow)); 

//###########################################################################################
