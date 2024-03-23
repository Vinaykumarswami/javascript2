class User{
    constructor(username)
    {
        this.username=username;
    }
    logMe(){
      console.log(`UserNmae is ${this.username}`);
    }
    static  CreatedId(){
        return '123';
    }
}

const vinay=new User("vinay");
console.log(User.CreatedId());

class Teacher extends User{
    constructor(username,email)
    {
        super(username);
        this.email=email;
    }
}

const phone=new Teacher("phone","phone32@gmail.com");
console.log(phone);