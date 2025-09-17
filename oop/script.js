// oop 
// 1. literal-object
// 2. Class
//    - Encapsulation: The bundling of data and the methods that operate on that data within a single unit (the object). This helps to protect data from external modification and promotes modularity. 
// - Inheritance
// - Abstraction: Hiding complex implementation details and exposing only the necessary functionalities through a simplified interface.
// - Polymorphism.

// this, method

// const user = {
//     name: "jola",
//     address: 'yeyeye',
//     login: function () {
//         console.log(`${this.name} is login in...`)
//         console.log(`${this.name} lives in ${this.address}`)
//     }
// }

// user.login()

class User {
    // constructor
    #age;
    #address;
    constructor(name, age, address) {
        this.name = name,
            this.#age = age,
            this.#address = address
    }

    greet() {
        console.log(`Welcome to dashboard ${this.name}`)
    }

    // methods
    login(hshh) {
        console.log(`${this.name} has logged in.`, hshh)
        this.greet()
    }

    logout() {
        console.log(`${this.name} has logged out.`)
    }
}

class Admin extends User {
    constructor(name, age, address, token, adminKey) {
        super(name, age, address),
            this.token = token,
            this.adminKey = adminKey
    }

    deleteUser(username) {
        console.log(`${this.name} has deleted ${username}`)
    }

    login() {
        alert("iuythj")
    }
}

const admin = new Admin("James", 89, "pslok", "90276tqgbjh", 90090)
// admin.deleteUser(user2.name)
admin.login()


// instances
const user = new User("Hammed", 56, "London")

const user2 = new User("Kenny", 90, "Oyo")
const user3 = new User("Lekan", 78, "Ogun state")
const user4 = new User("Peaui", 23, "Poland")

// user.login("lkjbns")
// user2.login()
// user.logout()

// console.log(user)
// console.log(user2)
// console.log(user3)
// console.log(user4)


