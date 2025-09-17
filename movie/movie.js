const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzhmNWEzZGY0NWQ4NWU1OTcyNjFmODAzMDQyZGQ4YyIsIm5iZiI6MTcwNzM0NTg1OC43MDQsInN1YiI6IjY1YzQwN2MyMTVjNjM2MDE4NDRjZGRjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TUs5yIWWi4mzfhG7_0KPdAveiZJxNKPpi8uUaI1bFgc"
const baseUrl = "https://api.themoviedb.org/3"
const moviesEl = document.getElementById("discover-movies")
const options = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

const getDiscoverMovies = async () => {
    console.log("Fetching movies..")
    try {
        const res = await fetch(`${baseUrl}/discover/movie`, options)
        const data = await res.json()
        console.log(data)
        data.results.forEach((movie) => {
            moviesEl.innerHTML += `
                <a href="./movieDetail.html?id=${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w300/${movie.backdrop_path}" />
                    <h3>${movie.original_title}</h3>
                    <p>${movie.release_date}</p>
                </a>
            `
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

getDiscoverMovies()

