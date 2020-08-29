const shareButton = document.querySelector(".share-button");
const shareDialog = document.querySelector(".share-dialog");
const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", (event) => {
  shareDialog.classList.remove("is-open");
});

shareButton.addEventListener("click", (event) => {
  if (navigator.share) {
    navigator
      .share({
        title: "MMMUT CGPA|SGPA CALCULATOR",
        url: "https://codersaty.github.io/cgpacalculator/",
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    shareDialog.classList.add("is-open");
  }
});
