// 
// API => Application Programming Interface
// CRUD OPERATION
// Create Read Update Delete
const baseUrl = "https://fakestoreapi.com"


// METHODS: POST GET PATCH/PUT DELETE
// HEADERS: Add additional information about a request or response=> "Content-Type", "Accept": "application/json"
// BODY

// TRY, CATCH, FINALLY BLOCKS


const product = {
    id: 76,
    title: "Diamond Jewelry",
    description: "This is a nice jewelry",
    price: 8.6,
    category: "fashion",
    image: "https://noblemart.com.ng/my_content/webp-express/webp-images/uploads/2023/10/Complete-Set-Jewelry-that-has-earrings-necklace-bracelet-and-ring-200x208.jpg.webp"
}
const addProduct = async () => {
    try {
        const formData = new FormData()
        formData.append("image", "/sksj")

        const response = await fetch(`${baseUrl}/products`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json", // multipart/form-data,
                "Accept": "application/json"
            }
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

// addProduct()


const updateProduct = async (id) => {
    console.log(`Updating product: ${id}..`)
    try {
        const response = await fetch(`${baseUrl}/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

// updateProduct(3)

const deleteProduct = async (id) => {
    console.log("Deleting...")
    try {
        const response = await fetch(`${baseUrl}/products/${id}`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

// deleteProduct(3)

const addTocart = async () => {
    const token = localStorage.getItem("token")
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        body: JSON.stringify({ username: 'emilys', password: 'emilyspass' }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    })
    const data = await response.json()
    console.log(data.accessToken)
    // window.location.href = "./api.html"
}
login()
