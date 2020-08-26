/* cse -0 ee- 1 , ece -2 , che -3 ce-4 it- 5 me-6*/
var creditsdata = [
  [25, 24, 25, 23, 23, 25, 23, 22],
  [26, 23, 25, 24, 21, 24, 23, 22],
  [25, 24, 25, 23, 23, 23, 22, 23],
  [25, 23, 24, 22, 21, 24, 22, 22],
  [25, 24, 26, 27, 23, 24, 22, 22],
  [24, 24, 25, 24, 22, 24, 23, 21],
  [24, 25, 23, 24, 22, 25, 23, 22],
];
var gbranch = "1";
var gsem = "1";
var calculate = document.querySelector(".hit");
calculate.addEventListener("click", showresult);
function showresult() {
  result(gsem, gbranch);
}
function showbranch(e) {
  document.querySelector(".message").innerText = "";
  gbranch = e;
  showpanel(gsem, gbranch);
}
function showsem(e) {
  document.querySelector(".message").innerText = "";
  gsem = e;
  showpanel(gsem, gbranch);
}
function showpanel(sem, branch) {
  switch (sem) {
    case "1":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        if (i <= 1) removeClass(b);
        else addClass(b);
        b.children[2].innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "2":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        if (i <= 2) removeClass(b);
        else addClass(b);
        b.children[2].innerText = creditsdata[branch - 1][i - 1];
      }
      break;

    case "3":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        if (i <= 3) removeClass(b);
        else addClass(b);
        b.children[2].innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "4":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        if (i <= 4) removeClass(b);
        else addClass(b);
        b.children[2].innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "5":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        if (i <= 5) removeClass(b);
        else addClass(b);
        b.children[2].innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "6":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        if (i <= 6) removeClass(b);
        else addClass(b);
        b.children[2].innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "7":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        if (i <= 7) removeClass(b);
        else addClass(b);
        b.children[2].innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "8":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        if (i <= 8) removeClass(b);
        else addClass(b);
        b.children[2].innerText = creditsdata[branch - 1][i - 1];
      }
  }
}

function addClass(b) {
  if (!b.classList.contains("visibility"));
  b.classList.add("visibility");
}
function removeClass(b) {
  if (b.classList.contains("visibility"));
  b.classList.remove("visibility");
}
function result(sem, branch) {
  var totalcredit = 0;
  var totalobtained = 0;
  var f = 0,
    a;
  for (var i = 1; i <= sem; i++) {
    a = document.querySelector(".sub-" + i).children;
    if (!a[1].value == "") {
      totalobtained += parseFloat(a[1].value) * creditsdata[branch - 1][i - 1];
      totalcredit += creditsdata[branch - 1][i - 1];
    } else {
      f++;
    }
  }
  var ans = totalobtained / totalcredit;
  if (f == 0) {
    document.querySelector(".message").innerText =
      "Your CGPA upto Semester " + sem + " is " + ans;
  } else {
    alert("Please fill all the fields");
  }
}
