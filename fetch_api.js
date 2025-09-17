// API = Application Programming Interface
// FETCH = Used to get data from an API
// asynchronous / synchronous

// baseUrl / endpoint
// parameter

const productsEl = document.getElementById("products")
const baseUrl = "https://fakestoreapi.com"

// setTimeOut
// seInterval
// clearInterval
// clearTimeout

async function getProducts() {
    console.log("Getting products...")
    try {
        const response = await fetch(`${baseUrl}/products`, {})
        const data = await response.json()
        productsEl.innerHTML = ""
        data.forEach((ele) => {
            productsEl.innerHTML += `
            <div class="product">
                <img src="${ele.image}" width="200" />
                <h3>${ele.title}</h3> 
                <p>$${ele.price}</p>
                <a class="view-btn" href="./singleProduct.html?id=${ele.id}">View Product</a>
            </div>
        `
        })
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

getProducts()

async function getSingleProduct() {
    // axios, 
    const response = await fetch(`${baseUrl}/products/14`)
    const data = await response.json()
    console.log(data)
}
// getSingleProduct()

// const getProducts = () => {
//     products.forEach((ele, index) => {
//         productsEl.innerHTML += `
//             <div>
//                 <h2>${ele.name}</h2>
//                 <p>$${ele.price}</p>
//             </div>
//         `
//     })
// }

// getProducts()