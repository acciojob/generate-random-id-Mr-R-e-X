const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function makeid(l) {
  // write your code here
  if (l === 0) {
    return "";
  }
  let randomChar = characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
  return randomChar + makeid(l - 1);
}

// Do not change the code below. 
const l = prompt("Enter a number.");
alert(makeid(l));
