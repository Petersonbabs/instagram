
const logoutBtn = document.getElementById("logout-btn")
const usernameEl = document.getElementById("username")
const feedsEl = document.getElementById("feeds")
const postImgEl = document.getElementById("post-img")
const postCaptionEl = document.getElementById("post-caption")
const imgPreviewEl = document.getElementById("img-preview")
const postFormEl = document.getElementById("post-form")
let imageUrl

const checkLogin = () => {
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"))
  if (!token || !user) {
    window.location.href = "../../instagram/login.html"
  } else {
    usernameEl.textContent = `${user.firstName} ${user.lastName}`
  }
}
checkLogin()

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token")
  window.location.href = "../../instagram/login.html"
})

postImgEl.addEventListener("change", (e) => {
  const url = URL.createObjectURL(e.target.files[0])
  imgPreviewEl.src = url
  imageUrl = url
})



// FETCH FEEDS
const getFeeds = () => {
  const feeds = JSON.parse(localStorage.getItem("feeds")) || []
  console.log(feeds);

  feedsEl.innerHTML = ""
  feeds.reverse().forEach(ele => {
    feedsEl.innerHTML += `
             <div class="post">
        <div class="post-header">
          <img src="https://picsum.photos/500/400?random=1" alt="${ele.caption}" class="profile-pic">
          <span class="username">${ele.author}</span>
        </div>
        <img src="${ele.image}" alt="${ele.caption}" class="post-img">
        <div class="post-actions">
          ❤️ 120 likes
        </div>
        <div class="caption">
          <span class="username">${ele.author}</span> ${ele.caption}
        </div>
        <div class="time">${ele.date}</div>
      </div>
        `
  })
}

getFeeds()
const addNewPost = () => {
  const feeds = JSON.parse(localStorage.getItem("feeds")) || []
  if (!postCaptionEl.value) {
    alert("Capion is requiyw")
    return
  }
  if (!postImgEl.value) {
    alert("Image is requiyw")
    return
  }
  const user = JSON.parse(localStorage.getItem("user"))

  const post = {
    image: imageUrl,
    caption: postCaptionEl.value,
    author: `${user.firstName} ${user.lastName}`,
    date: Date.now()
  }
  feeds.push(post)
  localStorage.setItem("feeds", JSON.stringify(feeds))
  getFeeds()
  postCaptionEl.value = ""
  postImgEl.value = ""
}

postFormEl.addEventListener("submit", (e) => {
  e.preventDefault()
  addNewPost()
})