# Arrays

JavaScript Array is used to store multiple elements in a single variable. It can hold various data types, including numbers, strings, objects, and even other arrays. It is often used when we want to store a list of elements and access them by a single variable.

Syntax:

const arr = ["Item1", "Item2", "Item3", ...];

// Create and initialize an array 
let courses = ["HTML", "CSS", "JavaScript", "React"]; 

// Display the array items 
console.log(courses); 

// Create a new empty array 
let newArray = []; 

// forEach loop to push elements 
// into new array 
courses.forEach(function (course) { 
	newArray.push(course); 
}); 

// Display the new array of items 
console.log(newArray); 

JavaScript Array Constructor

In JavaScript, a constructor gets called when an object is created using the new keyword.

JavaScript Array Properties

A JavaScript property is a member of an object that associates a key with a value.
Instance Property:

An instance property is a property that has a new copy for every new instance of the class.

JavaScript Array Methods

JavaScript methods are actions that can be performed on objects.
Static Method:

If the method is called using the array class itself then it is called a static method.

Instance Method:

If the method is called on an instance of a array then it is called an instance method.

Instance Methods
	

Descriptions
	

Examples
at() 	Returns the element of that index 	
Try
concat() 	Merge two or more arrays together. 	
Try
copyWithin() 	Copies part of an array to the same array itself and returns. 	
Try
entries() 	Fetch all the entries of the same data structure. 	
Try
every() 	checks that whether all the elements of the array satisfy the given condition. 	
Try
fill() 	Fill the array with a given static value. 	
Try
filter() 	Builds a new array containing elements that satisfy a function’s test. 	
Try
find() 	Get the value of the first element in the array that satisfies the provided condition. 	
Try
findIndex() 	Return the first index of the element in a given array that satisfies the provided testing function. 	
Try
flat() 	Flatten an array, to reduce the nesting of an array. 	
Try
flatMap() 	This is used to flatten the input array element into a new array. 	
Try
forEach() 	It is provided a function once for each element of the array. 	
Try
includes() 	If an array contains the certain value, it returns true. 	
Try
indexOf() 	Return the first index at which a given element may be found, or -1 if it does not exist. 	
Try
join() 	Join the elements of an array into a string. 	
Try
keys() 	Return a new array iterator which contains the keys for each index in the given input array. 	
Try
lastIndexOf() 	Return the last index at which a given element may be found, or -1 if it does not exist. 	
Try
map() 	Calls the argument function once for each element of the given array in order. 	
Try
pop() 	Remove the last element of the array and also returns the removed element. 	
Try
push() 	Push one or more values into the array. 	
Try
reduce() 	Reduce the array to a single value and executes a provided function for each value of the array. 	
Try
reduceRight() 	Convert elements of the given array from right to left to a single value. 	
Try
reverse() 	This is used for the in-place reversal of the array. 	
Try
shift() 	Removes the first element of the array thus reducing the size of the original array by 1. 	
Try
slice() 	Returns a new array containing a portion of the array on which it is implemented. 	
Try
some() 	Each array element’s callback function is run once. 	
Try
sort() 	Sort an array in place in a given order according to the compare() function. 	
Try
splice() 	Modify the contents of an array by removing the existing elements. 	
Try
toLocaleString() 	Convert the elements of the given array to string. 	
Try
toString() 	Return the string representation of the array elements. 	
Try
unshift() 	Add one or more elements to the beginning of the given array. 	
Try
values() 	Return a new array Iterator object that contains the values for each index in the array.