//ES6

class User{
    constructor(username,email,password){

 
    this.username=username;
    this.email=email;
    this.password=password;
    }
    encryptpassword(){
        return `${this.password}abc`
    }
     
    changeUsername(){
        return `${this.toUpppercase()}`;
    }

}

const chai=new User("chai","chaiuser@gmail.com","12334");
console.log(chai.encryptpassword());
console.log(chai.toUpppercase);

//behind the scene

function User1(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User1.prototype.encryptpassword=function(){
    return `${this.password}abc`
}
const tea=new User1("tea","teapawa@gmail.com","123");
console.log(tea.encryptpassword());
// console.log(tea.changeUsername());