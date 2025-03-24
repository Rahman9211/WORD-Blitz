// // function User(username, isLoggedIn, count) {
// //     this.username = username;
// //     this.isLoggedIn = isLoggedIn;
// //     this.count = count;
// // }

// // // Adding a method to User prototype
// // User.prototype.printMe = function() {
// //     console.log(`Hello ${this.username}`);
// // };

// // // Example usage:
// // const user1 = new User("Rehman", true, 5);
// // user1.printMe(); // ✅ Output: Hello Rehman



// // ////////////////////////////
// String.prototype.truelength =function(){
//     console.log(this.trim().length);
//     console.log(this.length);
    
// };

// // Prototype Method Extension


// const userProfile="         hello world!           ";
// userProfile.truelength();

// const userData ={
//     username: "rahman",
//     id: "01",
//     mailId:"rahman@google.com"
// }
// console.log(typeof userData);

// //  Overriding Prototype 

Array.prototype.push = function (item) {
    console.log(`Adding ${item} to the array`);
    return [].push.call(this, item);
};

const numbers = [1, 2, 3];
numbers.push(4); // Output: "Adding 4 to the array"
console.log(numbers); // Output: [1, 2, 3, 4]
