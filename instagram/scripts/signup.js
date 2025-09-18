const baseUrl = "https://dummyjson.com"
const emailEl = document.getElementById("email")
const signupFormEl = document.getElementById("signup-form")
const firstNameEl = document.getElementById("firstName")
const lastNameEl = document.getElementById("lastName")
const passwordEl = document.getElementById("password")
const test = document.getElementById("test")
const errorMessage = document.getElementById("error-message")
const signupBtnEl = document.getElementById("signup-btn")

const users = JSON.parse(localStorage.getItem("users")) || []


export class USer {
    constructor(email, firstName, lastName, password) {
        this.email = email,
            this.firstName = firstName,
            this.password = password,
            this.lastName = lastName
    }

    // SIGNUP
    async signup() {
        // check if email already exists
        const users = JSON.parse(localStorage.getItem("users")) || []
        console.log(users);

        const userExist = users.find((ele) => ele.email == this.email)
        if (userExist) {
            errorMessage.textContent = "Email already exists"
            return
        }
        const user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        }

        signupBtnEl.textContent = "Processing..."
        signupBtnEl.disabled = true

        try {
            const res = await fetch(`${baseUrl}/users/add`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json()
            if (res.ok) {
                users.push(user)
                localStorage.setItem("users", JSON.stringify(users))
                alert("Welcome to Instagram. Redirecting...")
                window.location.href = "../../instagram/login.html"
            }
        } catch (error) {
            console.log(error)
        } finally {
            signupBtnEl.textContent = "Sign up"
            signupBtnEl.disabled = false
        }
    }
}


const handleSignup = () => {
    errorMessage.textContent = ""
    if (!emailEl.value) { // "", null, undefined, 0
        errorMessage.textContent = 'Email is required'
        return
    }
    if (!firstNameEl.value) { // "", null, undefined, 0
        errorMessage.textContent = 'First name is required'
        return
    }
    if (!lastNameEl.value) { // "", null, undefined, 0
        errorMessage.textContent = 'Last name is required'
        return
    }
    if (!passwordEl.value) { // "", null, undefined, 0
        errorMessage.textContent = 'Password is required'
        return
    }
    new USer(emailEl.value, firstNameEl.value, lastNameEl.value, passwordEl.value).signup()
}

// const display = (num) => {
//     // event object
//     console.log(num.target);

// }

// test.addEventListener("click", display)

// // display()

signupFormEl.addEventListener("submit", (e) => {
    e.preventDefault()
    handleSignup()
})