/*  ====================
 *  VARIABLES LESSON
 *  ====================
 *
 *  DESCRIPTION:
 *  Similarly to math, variables are used to store values. What
 *  this does is make your code easier to manage, which is called
 *  an abstraction. There are many different types of variables.
 *
 *  Take a look!
 */

// Strings
// These are used to hold words, sentences, letters, or anything
// your heart desires!
var stringExample = "Hi, I am a string!";

// Integers
// These are used to hold whole numbers.
var integerExample = 12;

// Floats
// These are used to hold numbers with a decimal, sometimes called
// a double.
var floatExample = 5.9;

// Booleans
// These are used to hold logical values(true and false).
var booleansExample = true;

// Null
// These are litrally just nothing... not zero, just empty...
var nullExample = null;

// Undefined
// These are even more nothing, there's nothing assigned.
var undefinedExample;

// Objetcs
// Sometimes called classes, these are basiclly just a blueprint
var objectExample = { // This example will be for a car
    make: "Fafawi",
    model: "rich guy",
    color: "red",
    year: 2018,
    miles: 12789,
    owners: 1,
    price: 10450.00,
    forSale: true,
    buy: function() {
        this.owners++;
        this.forSale = false;
    }
}
