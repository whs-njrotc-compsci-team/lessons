/*	====================
 *	SWITCHES LESSON
 *	====================
 *
 *	DESCRIPTION:
 *	The switch statement is used in JavaScript to select one
 *	of many blocks of code to excute depending on a conditon.
 *	This is fairly similar to an if-else statement. You may
 *	now be thinking to youyrself, "Why use a switch if you
 *	can use an if-else statement?" Well, the answer to your
 *	question is complexity. Once your code gets more complex,
 *	a switch is much easier to maintain and read compared to
 *	an if-else statement.
 *
 *	Take a look!
 */

// Let's make a volume switch
var volume = 8;

switch (volume) {
	case 0 :
		console.log("The speakers are muted!");
		break;
	case 1 :
		console.log("The speakers are at 10% volume!");
		break;
	case 2 :
		console.log("The speakers are at 20% volume!");
		break;
	case 3 :
		console.log("The speakers are at 30% volume!");
		break;
	case 4 :
		console.log("The speakers are at 40% volume!");
		break;
	case 5 :
		console.log("The speakers are at half volume!");
		break;
	case 6 :
		console.log("The speakers are at 60% volume!");
		break;
	case 7 :
		console.log("The speakers are at 70% volume!");
		break;
	case 8 :
		console.log("The speakers are at 80% volume!");
		break;
	case 9 :
		console.log("The speakers are at 90% volume!");
		break;
	case 10 :
		console.log("The speakers are at max volume!");
		break;
	default :
		console.log("The volume doesn't seem right...");
		break;
}

// This code will output: "The speakers are at 80% volume!"
// This is because the volume variable is set to 8 so it
// will look what to do if the condtition happens to be 8.

