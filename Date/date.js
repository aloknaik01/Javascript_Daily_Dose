//What is Date in JavaScript?
//The Date object in JavaScript is used to work with dates and times. It provides methods to get and set the date, time, year, month, etc.

// Creating Date Objects
//.1 No Arguments - Current Date & Time

//Syntax
//const d = new Date();
/*
Description:
Creates a Date object with the current date and time.
*/

//Example:
const now = new Date();
console.log(now); // e.g., 2025-07-21T09:48:00.849Z

//2 With Date String

/*
Syntax:
const d = new Date(dateString);
*/

/*
Description:
Parses the dateString and creates a date. The string can be in various formats.
*/

const d1 = new Date("October 13, 2014 11:13:00");
const d2 = new Date("2022-03-25");

//3 With Year, Month, ... (up to 7 arguments)
/*
Syntax:
const d = new Date(year, month, day, hour, minute, second, millisecond);
*/

/*
Description:
Sets a specific date and time. Month is 0-based (0 for January, 11 for December).
*/

//const d = new Date(2018, 11, 24, 10, 33, 30, 0); // December 24, 2018, 10:33:30 am

//4 With Milliseconds

/*
Syntax:
const d = new Date(milliseconds);
*/

/*
Description:
Creates a Date for the given milliseconds since January 1, 1970 (Epoch time).
*/

const d3 = new Date(86400000); // Jan 2, 1970

//5 Static Date Methods
//Date.now(): Returns current timestamp (ms since Epoch)

const ms = Date.now();
//Date.parse(dateString): Parses a date string and returns ms since Epoch

const ms1 = Date.parse("March 21, 2012");
//Date.UTC(y, m, ...) : Returns ms for a UTC date
const ms2 = Date.UTC(2012, 2, 21);

//2. Date Formats
/*
Short Format: "03/25/2015" (MM/DD/YYYY)
Long Format: "March 25 2015" or "25 March 2015"
ISO Format: "2015-03-25T12:00:00Z" is preferred for consistency
Time Only: "12:30:00"
*/

//Warning: Formats like "YYYY/MM/DD" or "DD-MM-YYYY" can be inconsistent across browsers.

//3. Getting Date Components

/*
Method	             Description	                       Example
getDate()	         Day of the month (1-31)	           d.getDate()
getDay()	         Day of the week (0=Sun, 6=Sat)   	   d.getDay()
getMonth()	         Month (0=Jan, 11=Dec)	               d.getMonth()
getFullYear()      	 Full year (4 digits)	               d.getFullYear()
getHours()	         Hours (0–23)	                       d.getHours()
getMinutes()	     Minutes (0–59)	                       d.getMinutes()
getSeconds()	     Seconds (0–59)	                       d.getSeconds()
getMilliseconds()	 Milliseconds (0–999)	               d.getMilliseconds()
getTime()	ms since Jan 1, 1970	                       d.getTime()
getTimezoneOffset()	 Difference with UTC in minutes	       d.getTimezoneOffset()
*/
const d = new Date("2025-07-21T18:45:00"); // Monday, July 21, 2025, 6:45 PM IST

console.log(d.getFullYear()); // Year: 2025
console.log(d.getMonth()); // Month: 6 (July; months are 0-based)
console.log(d.getDate()); // Day of the month: 21
console.log(d.getDay()); // Day of week: 1 (Monday; 0=Sunday)
console.log(d.getHours()); // Hours: 18 (6 PM)
console.log(d.getMinutes()); // Minutes: 45
console.log(d.getSeconds()); // Seconds: 0
console.log(d.getMilliseconds()); // Milliseconds: 0
console.log(d.getTime()); // Milliseconds since Jan 1, 1970 (epoch time)
console.log(d.getTimezoneOffset()); // Minutes offset from UTC; -330 for IST

//4. Setting Date Components

/*
Method	             Description	             Example
getDate()	         Day of the month (1-31)	    d.getDate()
getDay()	         Day of the week (0=Sun,        6=Sat)	d.getDay()
getMonth()         	 Month (0=Jan, 11=Dec)	        d.getMonth()
getFullYear()	     Full year (4 digits)	        d.getFullYear()
getHours()	         Hours (0–23)	                d.getHours()
getMinutes()	     Minutes (0–59)	                d.getMinutes()
getSeconds()	     Seconds (0–59)	                d.getSeconds()
getMilliseconds()	 Milliseconds (0–999)	        d.getMilliseconds()
getTime()	         ms since Jan 1, 1970	        d.getTime()
getTimezoneOffset()	 Difference with UTC in minutes	d.getTimezoneOffset()
*/

//4. Setting Date Components
// Set Year
d.setFullYear(2030);
console.log(d.toString()); // Sets year to 2030
console.log(d.getFullYear()); // Year: 2030

// Set Month (0 = January, so 8 is September)
d.setMonth(8);
console.log(d.toString()); // Sets month to September
console.log(d.getMonth()); // Month: 8 (September)

// Set Date (i.e., day of the month)
d.setDate(10);
console.log(d.toString()); // 10th day of current month
console.log(d.getDate()); // Day of the month: 10

// Set Hours (in 24-hr format)
d.setHours(14);
console.log(d.toString()); // Sets hours to 2:00 PM
console.log(d.getHours()); // Hours: 14

// Set Minutes
d.setMinutes(30);
console.log(d.toString()); // Sets minutes to 30
console.log(d.getMinutes()); // Minutes: 30

// Set Seconds
d.setSeconds(45);
console.log(d.toString()); // Sets seconds to 45
console.log(d.getSeconds()); // Seconds: 45

// Set Milliseconds
d.setMilliseconds(250);
console.log(d.toString()); // Sets milliseconds to 250
console.log(d.getMilliseconds()); // Milliseconds: 250

// Set full time using timestamp (epoch ms)
const epochTime = Date.parse("2024-12-25T09:30:00");
d.setTime(epochTime);
console.log(d.toString()); // Now set to Dec 25, 2024, 9:30 AM
console.log(d.getTime()); // Milliseconds since Jan 1, 1970

// Bonus: Chaining multiple setters
d.setFullYear(2022);
d.setMonth(0);
d.setDate(1);
d.setHours(0, 0, 0, 0);
console.log(d.toString()); // Jan 1, 2022, 00:00:00

//5. Formatting Dates
/*
Method	                  Description	                                  Example
toString()	              Returns date as human-readable string	          d.toString()
toDateString()	          Date portion as string	                      d.toDateString()
toTimeString()	          Time portion as string	                      d.toTimeString()
toISOString()	          String in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ) d.toISOString()
toLocaleString()	      Returns date/time as string in local format	  d.toLocaleString()
toLocaleDateString()	  Date portion as localized string	              d.toLocaleDateString()
toLocaleTimeString()	  Time portion as localized string	              d.toLocaleTimeString()
toUTCString()	          Date as string in UTC time	                  d.toUTCString()
toJSON()	              Used for JSON serialization	                  d.toJSON()
valueOf()	              Returns ms value as primitive	                  d.valueOf()
*/

//1. toString()
console.log(d.toString());
// Output: "Mon Jul 21 2025 21:00:45 GMT+0530 (India Standard Time)"
//  Returns full date and time as human-readable string (local time).

//2. toDateString()
console.log(d.toDateString());
// Output: "Mon Jul 21 2025"
//Returns only date part (without time).

//3. toTimeString()
console.log(d.toTimeString());
// Output: "21:00:45 GMT+0530 (India Standard Time)"
// Returns only time part (with time zone info).

//4. toISOString()
//console.log(d.toISOString());
// Output: "2025-07-21T15:30:45.123Z"
// Displays date/time in ISO 8601 format (universally recommended).

//Used in APIs, JSON, XML, databases.

//5. toUTCString()

//console.log(d.toUTCString());
// Output: "Mon, 21 Jul 2025 15:30:45 GMT"
//Returns UTC string in RFC format (used in HTTP headers).

//6. toJSON()
console.log(d.toJSON());
// Output: "2025-07-21T15:30:45.123Z"
//Same as toISOString() — used when converting Date to JSON.

//7. valueOf() (Timestamp)

console.log(d.valueOf());
// Output: 1753111845123
// Returns time in milliseconds since Jan 1, 1970.

//Useful for math/comparisons.

//8. toLocaleString()

console.log(d.toLocaleString());
// Output (India): "21/07/2025, 9:00:45 pm"

console.log(d.toLocaleString("en-US"));
// Output (US): "7/21/2025, 9:00:45 PM"
// Localized full date + time.

// Accepts language and formatting options.

//9. toLocaleDateString()

console.log(d.toLocaleDateString());
// Output (default): "21/07/2025"

console.log(d.toLocaleDateString("en-US"));
// Output: "7/21/2025"

console.log(d.toLocaleDateString("fr-FR"));
// Output: "21/07/2025"
//  Localized date only.

//10. toLocaleTimeString()
javascript;
console.log(d.toLocaleTimeString());
// Output (India): "9:00:45 pm"

console.log(
  d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
);
// Output: "9:00 PM"
//Localized time only.

const day = String(d.getDate()).padStart(2, "0"); // "21"
const month = String(d.getMonth() + 1).padStart(2, "0"); // "07"
const year = d.getFullYear(); // 2025
const time = d.toTimeString().slice(0, 8); // "21:00:45"

console.log(`${day}-${month}-${year} ${time}`);
// Output: "21-07-2025 21:00:45"
