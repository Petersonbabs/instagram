
const logoutBtn = document.getElementById("logout-btn")
const usernameEl = document.getElementById("username")
const feedsEl = document.getElementById("feeds")

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



// FETCH FEEDS
const getFeeds = () => {
    const feeds = JSON.parse(localStorage.getItem("feeds")) || []
    console.log(feeds);

    feedsEl.innerHTML = ""
    feeds.forEach(ele => {
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