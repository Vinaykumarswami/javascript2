// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "vinay",
    "full name": "vinay kumar swami",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "vinay@2020.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vinayswqami@2020.com"
// Object.freeze(JsUser)
JsUser.email = "vinayswami2020.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());