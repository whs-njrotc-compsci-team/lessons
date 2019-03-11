/*  ====================
 *  FUNCTIONS LESSON
 *  ====================
 *
 *  DESCRIPTION:
 *	What would you do if you had some code that you wanted
 *	to run multiple times? How could you do this without
 *	copying and pasting your code over and over again? That's
 *  right, functions.
 *
 *  Take a look!
 */

// Let's make a function that says hello
function hello() {
	console.log("Hello!");
}

// Now let's give it a parameter, we want it to say hello
// to somebody
function helloPerson(name) {
	console.log("Hello " + name + "!");
}

// What would be do if no name is provided?
function helloThree(name = "") {
	if (name != "") {
		console.log("Hello " + name + "!");
	} else {
		console.log("Hello!");
	}
}

// Let's test out functions
hello(); // Hello!

helloPerson("John Doe"); // Hello John Doe!

helloThree(); // Hello!