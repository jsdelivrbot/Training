// WINDOWS METHODS / OBJ / PROP

// console.log(123);

// ALERT
// alert('Hello World')

// prompt
// const input = prompt();
// alert(input);

// confirm
// if(confirm("You Sure?")){
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// PROPERTIES

let val;

// outer h + w
val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight;
val = window.innerWidth;

// Scroll points - animations as you scroll down
val = window.scrollY;
// horz scroll
val = window.scrollX;

// location
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
// works only if search params provided.
val = window.location.search;

// redirect
// window.location.href = 'http://google.com'

// reload
// window.location.reload();

// history
// window.history.go(2)

// val = window.history.length;

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);