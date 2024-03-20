 let myDate=new Date();
 console.log(myDate);

 let myDate1=new Date();
 console.log(myDate1.toString());
 console.log(myDate1.toDateString());
 console.log(myDate1.toISOString());
 console.log(myDate1.toJSON());
 console.log(myDate1.toLocaleDateString());
 console.log(myDate1.toLocaleTimeString());

 myDate1.toLocaleString('default' ,{
weekday: "long"

 });
 // Get the timezone offset in minutes
const timezoneOffset = new Date().getTimezoneOffset();

// Convert the offset to hours and minutes
const hours = Math.floor(Math.abs(timezoneOffset) / 60);
const minutes = Math.abs(timezoneOffset) % 60;

// Determine if the offset is ahead or behind UTC
const sign = timezoneOffset > 0 ? '-' : '+';

// Output the timezone
console.log(`UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);

