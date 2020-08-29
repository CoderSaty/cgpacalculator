// code for nav bars
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
//code for navbars end

//for excel sheet feedback form

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxsst6V79vcOTqooF5MFkENLn9xwewxvmKJuNaEHXTSS1gja4yk/exec";
const form = document.forms["google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => happen())
    .catch((error) => console.error("Error!", error.message));
});
function happen() {
  const a = document.forms["google-sheet"];
  form.classList.add("visibility");
  const ab = document.querySelector(".form-message");
  ab.classList.remove("visibility");
}
//for excel sheet feedback form end

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

// for whatsapp

$(function () {
  $("#WAButton").floatingWhatsApp({
    phone: "+918429364914", //WhatsApp Business phone number International format-
    //Get it with Toky at https://toky.co/en/features/whatsapp.
    headerTitle: "Chat with me on WhatsApp!", //Popup Title
    popupMessage: "HI 🙏", //Popup Message
    showPopup: true, //Enables popup display
    buttonImage:
      '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    headerColor: "crimson", //Custom header color
    backgroundColor: "crimson", //Custom background button color
    position: "right",
  });
});
//for whatsapp end
//for faq page accordion

//for faq page accordion seperate
