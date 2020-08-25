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
        //4
        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a = document.querySelector(".sub-2").children;
        //5
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a = document.querySelector(".sub-3").children;
        //5
        a[0].innerText = "Introduction to C & Functional Programming (BCS-80)";
        a = document.querySelector(".sub-4").children;
        //5
        a[0].innerText = "Principles of Electrical Engineering (BEE-01)";
        a = document.querySelector(".sub-5").children;
        //4
        a[0].innerText = "Professional Communication (BAS-03)";
        a = document.querySelector(".sub-6").children;
        //2
        a[0].innerText = "Software Lab-I (BCS-03)";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        //4
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a = document.querySelector(".sub-2").children;
        //5
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a = document.querySelector(".sub-3").children;
        //5
        a[0].innerText = "Graph Theory (BAS-14)";
        a = document.querySelector(".sub-4").children;
        //5
        a[0].innerText = "Object Oriented Modeling & C++ (BCS-04)";
        a = document.querySelector(".sub-5").children;
        //3
        a[0].innerText = "Humanities & Social Science Electives (BAS-12)";
        a = document.querySelector(".sub-6").children;
        //2
        a[0].innerText = "Software Lab-II (BCS-05)";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        //4
        a[0].innerText = "Discrete Mathematics (BAS-27)";
        a = document.querySelector(".sub-2").children;
        //5
        a[0].innerText = "Applied Computational Methods (BAS-24)";
        a = document.querySelector(".sub-3").children;
        //4
        a[0].innerText = "Digital Circuits and Logic Design (BCS-11)";
        a = document.querySelector(".sub-4").children;
        //5
        a[0].innerText = "Principles of Data Structures through C/C++ (BCS-12)";
        a = document.querySelector(".sub-5").children;
        //5
        a[0].innerText = "Internet & JAVA Programming (BCS-13)";
        a = document.querySelector(".sub-6").children;
        //2
        a[0].innerText = "Software Lab-III (BCS-14)";
        break;

      //
      case "4":
        a = document.querySelector(".sub-1").children;
        //4
        a[0].innerText = "Optimization Techniques (BAS-26)";
        a = document.querySelector(".sub-2").children;
        //3
        a[0].innerText = "Management Information System (MBA-113)";
        a = document.querySelector(".sub-3").children;
        //5
        a[0].innerText = "Database Management Systems (BCS-15)";
        a = document.querySelector(".sub-4").children;
        //4
        a[0].innerText = "Theory of Computation (BCS-16)";
        a = document.querySelector(".sub-5").children;
        //5
        a[0].innerText = "Computer Organization & Design (BCS-17)";
        a = document.querySelector(".sub-6").children;
        //2
        a[0].innerText = "Software Lab-IV (BCS-18)";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        //3
        a[0].innerText = "Engineering and Managerial Economics (MBA-03)";
        a = document.querySelector(".sub-2").children;
        //5
        a[0].innerText = "Principles of Operating Systems (BCS-26)";
        a = document.querySelector(".sub-3").children;
        //5
        a[0].innerText = "Computer Graphics (BCS-27)";
        a = document.querySelector(".sub-4").children;
        //5
        a[0].innerText = "Design & Analysis of Algorithms (BCS-28)";
        a = document.querySelector(".sub-5").children;
        //5
        a[0].innerText = "Advanced Computer Architecture (BCS-29)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "Digital Signal Processing";
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        //5
        a[0].innerText = "Principle of Compiler Design (BCS-31)";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Artificial Intelligence (BCS-32)";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Web Technologies (BCS-33)";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Computer Networks (BCS-34)";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Software Engineering (BCS-35)"; //5
        a = document.querySelector(".sub-6").classList.toggle("visibility");
        // a[0].innerText = "cse6";
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Introduction to Machine Learning (BCS-41)";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Parallel & Distributed Computing (BCS-42)"; //5
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-1 (BCS-**)";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BCS-**)";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-I (BCS-40)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "cse7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Mobile Computing (BCS-43)";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Programme Elective-3 (BCS-**)";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-4 (BCS-**)";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective offered by other Department (BOE-**)";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-II (BCS-50)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "cse8";

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
        //4
        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a = document.querySelector(".sub-2").children;
        //5
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a = document.querySelector(".sub-3").children;
        //5
        a[0].innerText = "Mechanics of Structures (BCE-01)";
        a = document.querySelector(".sub-4").children;
        //5
        a[0].innerText = "Introduction to Computer Programming(BCS-01)";
        a = document.querySelector(".sub-5").children;
        //4
        a[0].innerText = "Professional Communication (BAS-03)";
        a = document.querySelector(".sub-6").children;
        //2
        a[0].innerText = "Engineering Graphics (BCE-10)";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        //4
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a = document.querySelector(".sub-2").children;
        //5
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a = document.querySelector(".sub-3").children;
        //5
        a[0].innerText = "Engineering Chemistry (BAS-09)";
        a = document.querySelector(".sub-4").children;
        //5
        a[0].innerText = "Principles of Electrical Engineering (BEE-01)";
        a = document.querySelector(".sub-5").children;
        //3
        a[0].innerText = "Humanities & Social Science Electives (BAS-12)";
        a = document.querySelector(".sub-6").children;
        //2
        a[0].innerText = "Workshop Technology (BME-10)";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        //4
        a[0].innerText = "Engineering Mathematics-III (BAS-21)";
        a = document.querySelector(".sub-2").children;
        //5
        a[0].innerText =
          "Building Construction and Planning Estimation and Costing (BCE-19)";
        a = document.querySelector(".sub-3").children;
        //5
        a[0].innerText = "Fluid Mechanics (BCE-13)";
        a = document.querySelector(".sub-4").children;
        //5
        a[0].innerText = "Basic Surveying (BCE-12)";
        a = document.querySelector(".sub-5").children;
        //5
        a[0].innerText = "Structural Mechanics-I (BCE-14)";
        a = document.querySelector(".sub-6").children;
        //2
        a[0].innerText = "Engineering Geology & Building Material (BCE-15)";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        //5
        a[0].innerText = "Numerical Methods (BAS-29)";
        a = document.querySelector(".sub-2").children;
        //3
        a[0].innerText = "Industrial Management (MBA-01)";
        a = document.querySelector(".sub-3").children;
        //5
        a[0].innerText = "Hydraulic and Hydraulic Machines (BCE-16)";
        a = document.querySelector(".sub-4").children;
        //4
        a[0].innerText = "Structural Mechanics -II (BCE-17)";
        a = document.querySelector(".sub-5").children;
        //5
        a[0].innerText = "Advanced Surveying (BCE-18)";
        a = document.querySelector(".sub-6").children;
        //2
        a[0].innerText = "Concrete & Concrete Structures (BCE-11)";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        //3
        a[0].innerText = "Engineering and Managerial Economics (MBA-03)";
        a = document.querySelector(".sub-2").children;
        //5
        a[0].innerText = "Environmental Engineering-I (BCE-26)";
        a = document.querySelector(".sub-3").children;
        //5
        a[0].innerText = "Geotechnical Engineering -I (BCE-27)";
        a = document.querySelector(".sub-4").children;
        //5
        a[0].innerText = "Transportation Engineering- I (BCE-28)";
        a = document.querySelector(".sub-5").children;
        //5
        a[0].innerText = "Design of Concrete Structures (BCE-29)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "Digital Signal Processing";
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        //5
        a[0].innerText = "Geotechnical Engineering -II (BCE-31)";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Environmental Engineering -II (BCE-32)";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Steel Structures (BCE-33)";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Transportation Engineering- II (BCE-34)";
        a = document.querySelector(".sub-5").children; //4
        a[0].innerText = "Construction Technology and Management (BCE-35)";
        a = document.querySelector(".sub-6").children; //3
        a[0].innerText = "Survey Camp (BCE-36)";
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Water Resources Engineering (BCE-41)";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Earthquake Resistant Design (BCE-42)";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-1 (BCE-**)";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BCE-**)";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-I (BCE-40)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "cse7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Analysis and Design of Hydraulic Structures (BCE-43)";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Programme Elective-3 (BCE-**)";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-4 (BCE-**)";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective offered by other Department (BOE-**)";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-II (BCE-50)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "cse8";

        break;
    }
  }
  if (gbranch === "6") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Fundamentals of Information Technology (BIT-01)";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Principles of Electrical Engineering (BEE-01)";
        a = document.querySelector(".sub-5").children; //4
        a[0].innerText = "Professional Communication (BAS-03)";
        a = document.querySelector(".sub-6").children; //2
        a[0].innerText = "Software Tools-I (BIT-02)";
        break;
      case "2":
        a = document.querySelector(".sub-1").children; ///4
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Applied Computational Methods (BAS-24)";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Programming Fundamentals (BIT-03)";
        a = document.querySelector(".sub-5").children; //3
        a[0].innerText = "Humanities & Social Science Electives (BAS-12)";
        a = document.querySelector(".sub-6").children; //2
        a[0].innerText = "Engineering Graphics (BCE-10)";
        break;
      case "3":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Discrete Mathematics (BAS-27)";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Graph Theory (BAS-14)";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Switching Theory & Logic Design (BIT-11)";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Data Structures (BIT-12)";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Object Oriented Programming (BIT-13)";
        a = document.querySelector(".sub-6").children; //2
        a[0].innerText = "Software Tools-II (BIT-14)";
        break;
      case "4":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Optimization Techniques (BAS-26)";
        a = document.querySelector(".sub-2").children; //3
        a[0].innerText = "Management Information System (MBA-113)";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Design & Analysis of Algorithm (BIT-15)";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Computer Organization & Architecture (BIT-16)";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Database Management System (BIT-17)";
        a = document.querySelector(".sub-6").children; //2
        a[0].innerText = "Software Tools-III (BIT-18)";
        break;
      case "5":
        a = document.querySelector(".sub-1").children; //3
        a[0].innerText = "Engineering & Managerial Economics (MBA-02)";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Operating System (BIT-26)";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Computer Networks (BIT-27)";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Software Engineering (BIT-28)";
        a = document.querySelector(".sub-5").children; //4
        a[0].innerText = "Automata Theory (BIT-29)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "it5";
        break;
      case "6":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Data Mining & Ware Housing (BIT-31)";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Artificial Intelligence (BIT-32)";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Machine Learning (BIT-33)";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Wireless Sensor Network & IoT (BIT-34)";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Network Security & Cryptography (BIT-35)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "it6";
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Graphics & Visual Computing (BIT-41)";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Mobile Computing (BIT-42)";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Programme Elective-1 (BIT-**)"; //4
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BIT-**)";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-1 (BIT-40)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "it7";

        break;
      case "8":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Distributed System (BIT-43)";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Programme Elective-3 (BIT-**)";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-4 (BIT-**)";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective Offered by other dept. (BOE-**)";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-2 (BIT-50)";
        // a = document.querySelector(".sub-6").children;
        // a[0].innerText = "it8";

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
