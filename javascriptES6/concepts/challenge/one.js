class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.admin = false;
    }
    
    isAdmin() {
        return this.admin;
    }
}

class Admin extends User {
    constructor(){
        super();

        this.admin = true;
    }

}

const user = new User('abcd@gmail.com', 'pass123');
const adm = new Admin('abcd@gmail.com', 'pass123');

console.log(user.isAdmin());
console.log(adm.isAdmin());