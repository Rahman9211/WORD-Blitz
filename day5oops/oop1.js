const user = {
    username: "rahman",
    id: 1,

    greet: function () {
        console.log(`hello ${this.username}`);
    }
};
user.greet();

// Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
 // function is prototype and object 
//new keyword          array
            function User(username, isloggedid) {
                this.username = username;
                this.isloggedid = isloggedid;
            }

            const firstUser = new User("ajay", true); 
            console.log(firstUser); 

            const secondUser = new User("ajsxadaday", true); 
            console.log(secondUser); 


    function User(name,age) {
        this.name =name;
        this.age =age;
        
    }
    User.prototype.greet = function () {
        console.log(`hello ${this.name} my age ${this.age}year.`);
    }
    const user1 =new User("rahman",20)
    const user2 =new User("khan",30)

    user1.greet()
    user2.greet()


// function multiply(num) {
//     return num*7;
// }
// console.log(multiply(5));




