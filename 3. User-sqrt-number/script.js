const user = prompt("What is your Name?");
alert('Your name is ' + user);

const num = +prompt("Enter your number!");
let answer = +prompt("Try to square it! Your answer?");

while (answer !== Math.pow(num, 2)) {
    answer = +prompt("Wrong! Try again! Your answer?");
}
alert('You are RIGHT!  ' + num + ' x ' + num + ' = ' + answer);
