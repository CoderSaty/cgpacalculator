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
  check(gsem, gbranch);
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
        var cr = document.querySelector(".sub-" + i + "-cr");
        if (i <= 1) removeClass(b);
        else addClass(b);
        cr.innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "2":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        var cr = document.querySelector(".sub-" + i + "-cr");
        if (i <= 2) removeClass(b);
        else addClass(b);
        cr.innerText = creditsdata[branch - 1][i - 1];
      }
      break;

    case "3":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        var cr = document.querySelector(".sub-" + i + "-cr");
        if (i <= 3) removeClass(b);
        else addClass(b);
        cr.innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "4":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        var cr = document.querySelector(".sub-" + i + "-cr");
        if (i <= 4) removeClass(b);
        else addClass(b);
        cr.innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "5":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        var cr = document.querySelector(".sub-" + i + "-cr");
        if (i <= 5) removeClass(b);
        else addClass(b);
        cr.innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "6":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        var cr = document.querySelector(".sub-" + i + "-cr");
        if (i <= 6) removeClass(b);
        else addClass(b);
        cr.innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "7":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        var cr = document.querySelector(".sub-" + i + "-cr");
        if (i <= 7) removeClass(b);
        else addClass(b);
        cr.innerText = creditsdata[branch - 1][i - 1];
      }
      break;
    case "8":
      for (var i = 1; i <= 8; i++) {
        var b = document.querySelector(".sub-" + i);
        var cr = document.querySelector(".sub-" + i + "-cr");
        if (i <= 8) removeClass(b);
        else addClass(b);
        cr.innerText = creditsdata[branch - 1][i - 1];
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

function check(sem, branch) {
  //var totalcredit = 0;
  //var totalobtained = 0;
  var f = 0;
  var sgpa = 0,
    i;
  for (i = 1; i <= sem; i++) {
    a = document.querySelector(".sub-" + i).children;
    sgpa = a[1].children;
    if (!sgpa[0].value == "") {
      if (sgpa[0].value < 0) {
        alert("The SGPA cannot be less than 0");
        break;
      }
      if (sgpa[0].value > 10) {
        alert("The SGPA canot be greater than 10");
        break;
      }
      if (isNaN(parseFloat(sgpa[0].value))) {
        alert("The SGPA canot be a string");
        break;
      }
    } else {
      f++;
    }
  }

  if (i > sem) {
    result(sem, branch, f);
  }
}
function result(sem, branch, f) {
  var totalcredit = 0;
  var totalobtained = 0;
  for (var i = 1; i <= sem; i++) {
    a = document.querySelector(".sub-" + i).children;
    sgpa = a[1].children;
    totalobtained += parseFloat(sgpa[0].value) * creditsdata[branch - 1][i - 1];
    totalcredit += creditsdata[branch - 1][i - 1];
    var ans = totalobtained / totalcredit;
    if (f == 0) {
      document.querySelector(".message").innerText = customMessage(ans, sem);
      var message = document.querySelector(".message").parentElement;
      message.classList.remove("visible");
    } else {
      alert("Please fill all the fields");
    }
  }
}
function customMessage(cgpa, sem) {
  if (cgpa > 9 && cgpa <= 10)
    return (
      "Outstanding 🏆 ! Your CGPA upto Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is A(+)."
    );
  else if (cgpa > 8 && cgpa <= 9)
    return (
      "Excellent 🔥 ! Your CGPA upto Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is A."
    );
  else if (cgpa > 7 && cgpa <= 8)
    return (
      "Very Good ⭐! Your CGPA upto Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is B(+)."
    );
  else if (cgpa > 6 && cgpa <= 7)
    return (
      "Good 😀! Your CGPA upto Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is B."
    );
  else if (cgpa > 5 && cgpa <= 6)
    return (
      "Average 🙂! Your CGPA upto Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is C."
    );
  else if (cgpa > 4 && cgpa <= 5)
    return (
      "Below Average 😐! Your CGPA upto Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is D."
    );
  else
    return (
      "No comments 😟! Your CGPA upto Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is F."
    );
}
