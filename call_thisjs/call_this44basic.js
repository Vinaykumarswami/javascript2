function SetUserName(username){
    //complex db calls
    this.username=username;
}

function createUser(username,email,password){
    // SetUserName(username);
    SetUserName.call(this,username);
    
    this.email=email;
    this.password=password;
}
const vina=new createUser("vina","vinayswami2020@gmail.com","123");
console.log(vina);