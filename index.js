//https://meme-api.herokuapp.com/gimme

const button = document.getElementById("btn");
const image = document.getElementById("img");
const error = document.getElementById("error");

const myfunc = () => {
  let subReddit = "/" + document.getElementById("subRedditName").value;
  console.log("subreddit is " + subReddit);
  const response = fetch(`https://meme-api.herokuapp.com/gimme${subReddit}`, {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        error.hidden = true;
        setTimeout(() => (image.hidden = false), 100);

        return res.json();
      } else {
        error.hidden = false;
        image.hidden = true;
        error.innerHTML = "There's no such subreddit";
      }
    })
    .then((data) => {
      console.log(data);
      image.setAttribute("src", data.url);
    })
    .catch((err) => {
      console.log(err);
    });
};

button.addEventListener("click", myfunc);
