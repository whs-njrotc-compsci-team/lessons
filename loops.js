/*  ====================
 *  LOOPS LESSON
 *  ====================
 *
 *  DESCRIPTION:
 *	What would you do if you want to repeat code but not
 *	have to copy and paste your code over and over again?
 *	That's right, you would use a loop. A loop will repeat
 *	your code over and over again as long as it meets a
 *	condition. A loop can either run the same code, or a
 *	slightly modified version. There are many types of loops.
 *
 *  Take a look!
 */

// While loop
// A while loop is used when the programmer has no idea when
// the loop will stop, they look like this
while(true) {
	console.log("This code will run forever!");
}

var i = 0;
while(i <= 10) {
	i++;
	console.log("This code will run until `i` equals 10!");
}


// For loop
// A for loop is used when the programmer has an idea of when
// the loop will end, this is commonly used for arrays. They
// look like this:
for (var i = 0; i >= 10; i++) {
	console.log("This code will run 10 times")
}