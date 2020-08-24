var gbranch = "1";
var gsem = "1";
//var sem = document.querySelector(".choose-semester");
//sem.addEventListener("click", showsem);
//var branch = document.querySelector(".choose-branch");
//sem.addEventListener("click", showbranch);
var calculate = document.querySelector(".hit");
calculate.addEventListener("click", result);
function showbranch(e) {
  gbranch = e;
  console.log(gsem, gbranch);
  showpanel(gsem, gbranch);
}
function showsem(e) {
  gsem = e;
  console.log(gsem, gbranch);
  showpanel(gsem, gbranch);
}
function showpanel(sem, gbranch) {
  var a;
  if (gbranch === "1") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "cse1";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "cse1";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "cse1";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "cse1";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "cse1";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "cse1";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "cse2";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "cse2";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "cse2";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "cse2";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "cse2";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "cse2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "cse3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "cse3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "cse3";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "cse3";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "cse3";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "cse3";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "cse4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "cse4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "cse4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "cse4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "cse4";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "cse4";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "cse5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "cse5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "cse5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "cse5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "cse5";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "cse5";
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "cse6";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "cse6";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "cse6";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "cse6";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "cse6";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "cse6";
        break;
      case "7":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "cse7";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "cse7";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "cse7";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "cse7";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "cse7";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "cse7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "cse8";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "cse8";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "cse8";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "cse8";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "cse8";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "cse8";

        break;
    }
  }
  if (gbranch === "3") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ece1";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ece1";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ece1";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ece1";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ece1";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ece1";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ece2";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ece2";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ece2";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ece2";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ece2";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ece2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ece3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ece3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ece3";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ece3";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ece3";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ece3";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ece4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ece4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ece4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ece4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ece4";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ece4";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ece5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ece5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ece5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ece5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ece5";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ece5";
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ece6";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ece6";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ece6";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ece6";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ece6";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ece6";
        break;
      case "7":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ece7";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ece7";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ece7";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ece7";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ece7";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ece7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ece8";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ece8";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ece8";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ece8";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ece8";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ece8";

        break;
    }
  }
  if (gbranch === "4") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "che1";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "che1";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "che1";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "che1";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "che1";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "che1";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "che2";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "che2";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "che2";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "che2";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "che2";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "che2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "che3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "che3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "che3";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "che3";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "che3";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "che3";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "che4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "che4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "che4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "che4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "che4";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "che4";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "che5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "che5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "che5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "che5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "che5";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "che5";
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "che6";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "che6";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "che6";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "che6";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "che6";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "che6";
        break;
      case "7":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "che7";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "che7";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "che7";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "che7";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "che7";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "che7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "che8";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "che8";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "che8";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "che8";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "che8";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "che8";

        break;
    }
  }
  if (gbranch === "5") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ce1";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ce1";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ce1";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ce1";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ce1";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ce1";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ce2";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ce2";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ce2";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ce2";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ce2";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ce2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ce3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ce3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ce3";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ce3";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ce3";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ce3";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ce4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ce4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ce4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ce4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ce4";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ce4";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ce5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ce5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ce5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ce5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ce5";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ce5";
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ce6";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ce6";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ce6";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ce6";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ce6";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ce6";
        break;
      case "7":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ce7";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ce7";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ce7";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ce7";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ce7";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ce7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ce8";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ce8";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ce8";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ce8";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ce8";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ce8";

        break;
    }
  }
  if (gbranch === "6") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "it1";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "it1";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "it1";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "it1";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "it1";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "it1";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "it2";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "it2";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "it2";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "it2";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "it2";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "it2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "it3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "it3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "it3";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "it3";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "it3";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "it3";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "it4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "it4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "it4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "it4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "it4";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "it4";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "it5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "it5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "it5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "it5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "it5";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "it5";
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "it6";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "it6";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "it6";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "it6";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "it6";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "it6";
        break;
      case "7":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "it7";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "it7";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "it7";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "it7";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "it7";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "it7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "it8";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "it8";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "it8";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "it8";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "it8";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "it8";

        break;
    }
  }
  if (gbranch === "7") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "me1";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "me1";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "me1";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "me1";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "me1";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "me1";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "me2";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "me2";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "me2";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "me2";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "me2";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "me2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "me3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "me3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "me3";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "me3";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "me3";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "me3";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "me4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "me4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "me4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "me4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "me4";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "me4";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "me5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "me5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "me5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "me5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "me5";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "me5";
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "me6";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "me6";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "me6";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "me6";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "me6";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "me6";
        break;
      case "7":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "me7";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "me7";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "me7";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "me7";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "me7";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "me7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "me8";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "me8";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "me8";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "me8";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "me8";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "me8";

        break;
    }
  }
  if (gbranch === "2") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ee1";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ee1";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ee1";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ee1";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ee1";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ee1";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ee2";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ee2";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ee2";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ee2";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ee2";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ee2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ee3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ee3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ee3";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ee3";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ee3";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ee3";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ee4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ee4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ee4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ee4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ee4";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ee4";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ee5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ee5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ee5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ee5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ee5";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ee5";
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ee6";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ee6";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ee6";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ee6";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ee6";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ee6";
        break;
      case "7":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ee7";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ee7";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ee7";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ee7";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ee7";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ee7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "ee8";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "ee8";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "ee8";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "ee8";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "ee8";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "ee8";

        break;
    }
  }
  console.log(a);
}
function result(e) {
  var ans = [];
  a = document.querySelector(".sub-1").children;
  ans.push(parseInt(a[1].value));
  a = document.querySelector(".sub-2").children;
  ans.push(parseInt(a[1].value));
  a = document.querySelector(".sub-3").children;
  ans.push(parseInt(a[1].value));
  a = document.querySelector(".sub-4").children;
  ans.push(parseInt(a[1].value));
  a = document.querySelector(".sub-5").children;
  ans.push(parseInt(a[1].value));
  a = document.querySelector(".sub-6").children;
  ans.push(parseInt(a[1].value));
  var x = 0;
  for (i = 0; i < 6; i++) {
    x += ans[i];
  }
  document.querySelector(".message").innerText = "the result is " + x;
  console.log(ans);
}
