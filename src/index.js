document.addEventListener("DOMContentLoaded", main);

function main() {
  displayRamens();
  addSubmitListener();
}

const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((ramens) => {
      const ramenMenu = document.getElementById("ramen-menu");
      ramens.forEach((ramen) => {
        const ramenImage = document.createElement("img");
        ramenImage.src = ramen.image;
        ramenImage.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(ramenImage);
      });
    });
};

const handleClick = (ramen) => {
  const detailImage = document.querySelector(".detail-image");
  const name = document.querySelector(".name");
  const restaurant = document.querySelector(".restaurant");
  const ratingDisplay = document.getElementById("rating-display");
  const commentDisplay = document.getElementById("comment-display");

  detailImage.src = ramen.image;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
};

const addSubmitListener = () => {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newName = document.getElementById("new-name").value;
    const newRestaurant = document.getElementById("new-restaurant").value;
    const newImage = document.getElementById("new-image").value;
    const newRating = document.getElementById("new-rating").value;
    const newComment = document.getElementById("new-comment").value;

    const newRamen = {
      newName,
      newRestaurant,
      newImage,
      newRating,
      newComment,
    };

    const ramenMenu = document.getElementById("ramen-menu");
    const ramenImage = document.createElement("img");
    ramenImage.src = newRamen.image;
    ramenImage.addEventListener("click", () => handleClick(newRamen));
    ramenMenu.appendChild(ramenImage);

    handleClick(newRamen);

    form.reset();
  });
};
