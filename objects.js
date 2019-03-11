/*	====================
 *	OBJECTS LESSON
 *	====================
 *
 *	DESCRIPTION:
 *	Objects are a collection of properties and methods. An
 *	object is a great way to store information such as users
 *	or cars. There are multiple ways to create an object,
 *	one way is to create it using a variable, while another
 *	popular way is using classes.
 *
 *	Take a look!
 */

// Let's create a single object
var tenant = {
 	firstName: "John",
 	lastName: "Doe",
 	apartment: 283,
 	occupantsCount: 4;
 	occupants: [
 		{
 			firstName: "Jane",
 			lastName: "Doe"
 		},
 		{
 			firstName: "James",
 			lastName: "Doe"
 		},
 		{
 			firstName: "Jen",
 			lastName: "Doe"
 		}
 	],
 	evict: function() {
 		this = null;
 	},
 	addOccupant: function(firstName, lastName) {
 		this.occupants.add({firstName: firstName, lastName: lastName});
 		this.occupantsCount++;
	}
}


// But what if we want more tenants?
class Tenant {

 	constructor(firstName, lastName, apartment, occupants) {
 		this.firstName = firstName;
 		this.lastName = firstName;
 		this.apartment = apartment;
 		this.occupantsCount = occupants.length;
 		this.occupants = occupants;
 	}

 	evict() {
 		this = null;
 	}

 	addOccupant(firstName, lastName) {
 		this.occupants.add({firstName: firstName, lastName: lastName});
 		this.occupantsCount++;
 	}
}

// This is just test data
const occupantsArr = occupants: [{ firstName: "Jane", lastName: "Doe" }, { firstName: "James", lastName: "Doe" }, { firstName: "Jen", lastName: "Doe" }]

var tenantOne = new Tenant("John", "Doe", 123, occupantsArr);
var tenantTwo = new Tenant("John", "Smith", 124, occupantsArr);


