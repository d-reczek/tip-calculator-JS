function init() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = document.querySelector("input").value;
    console.log(inputValue);
  });
  userInput = "pulp fiction";
  async function searchMovies(userInput) {
    try {
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${userInput}`
      );
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
window.onload = init;
// http://www.omdbapi.com/?i=tt7830912&apikey=a8fcf47b
