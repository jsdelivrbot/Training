let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00')
birthday = new Date('September 10 1981 11:25:00')
birthday = new Date('9/11/1980 11:25:00')

val = today;
val = birthday.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// since jan 1 1970
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(typeof val);
console.log(val);
console.log(birthday);