/*	====================
 *	ARRAYS LESSON
 *	====================
 *
 *	DESCRIPTION:
 *	Arrays are used in programming to store a collection of
 *	data. Arrays are objects. You can access data by calling
 *	the array and including the index in squad brackets. One
 *	important concept is that you always count from zero in
 *	programming. So zero is actually one and one is actually
 *	zero.
 *
 *	Take a look!
 */

// Let's create an array to hold different animals
var animals = ["Lion", "Zebra", "Elephant", "Duck", "Dog"];

// Let's get the 3rd element in the array
console.log(animals[2]); // "Elephant"

// You can also update elements in a array
animals[1] = "Cat"; 
// ["Lion", "Cat", "Elephant", "Duck", "Dog"]

// Because arrays are objects, there are methods you can use
// Let's get the number of elements in the array
console.log(animals.length); // 5

// Adding an element
animals.push("Bird");
// ["Lion", "Cat", "Elephant", "Duck", "Dog", "Bird"]

// Removing an element
animals.splice(0, 1);
// The first param is where to start removing elements and
// the second param is how many to remove. In this case,
// starting from index: 0, remove 1 element.
// ["Cat", "Elephant", "Duck", "Dog", "Bird"]

animals.pop();
// Pop will remove the last element in the array
// ["Cat", "Elephant", "Duck", "Dog"]
