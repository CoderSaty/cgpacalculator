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
  console.log(gsem, gbranch);
  showpanel(gsem, gbranch);
}
function showsem(e) {
  document.querySelector(".message").innerText = "";
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

        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Introduction to C & Functional Programming (BCS-80)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Principles of Electrical Engineering (BEE-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Professional Communication (BAS-03)";
        a[2].innerText = "4";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Software Lab-I (BCS-03)";
        a[2].innerText = "2";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Graph Theory (BAS-14)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Object Oriented Modeling & C++ (BCS-04)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Humanities & Social Science Electives (BAS-12)";
        a[2].innerText = "3";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Software Lab-II (BCS-05)";
        a[2].innerText = "2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Discrete Mathematics (BAS-27)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Applied Computational Methods (BAS-24)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Digital Circuits and Logic Design (BCS-11)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Principles of Data Structures through C/C++ (BCS-12)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Internet & JAVA Programming (BCS-13)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Software Lab-III (BCS-14)";
        break;
        a[2].innerText = "2";
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Optimization Techniques (BAS-26)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Management Information System (MBA-113)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Database Management Systems (BCS-15)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Theory of Computation (BCS-16)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Computer Organization & Design (BCS-17)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Software Lab-IV (BCS-18)";
        a[2].innerText = "2";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering and Managerial Economics (MBA-03)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Principles of Operating Systems (BCS-26)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Computer Graphics (BCS-27)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Design & Analysis of Algorithms (BCS-28)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Advanced Computer Architecture (BCS-29)";
        a[2].innerText = "5";
        addClass();
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Principle of Compiler Design (BCS-31)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Artificial Intelligence (BCS-32)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Web Technologies (BCS-33)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Computer Networks (BCS-34)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Software Engineering (BCS-35)"; //5
        a[2].innerText = "5";
        addClass();
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Introduction to Machine Learning (BCS-41)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Parallel & Distributed Computing (BCS-42)"; //5
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-1 (BCS-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BCS-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-I (BCS-40)";
        a[2].innerText = "5";
        addClass();
        break;
      case "8":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Mobile Computing (BCS-43)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Programme Elective-3 (BCS-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-4 (BCS-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective offered by other Department (BOE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-II (BCS-50)";
        a[2].innerText = "5";
        addClass();
        break;
    }
  }
  if (gbranch === "3") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Fundamentals of Electronics Engineering (BEC-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Electrical Circuits & Analysis (BEE-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Professional Communication (BAS-03)";
        a[2].innerText = "4";
        removeClass();
        a = document.querySelector(".sub-6").children; //2
        a[0].innerText = "Electronics Workshop & PCB (BEC-10)";
        a[2].innerText = "2";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Engineering Chemistry (BAS-09)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Introduction to Computer Programming (BCS-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Humanities & Social Science Electives (BAS-12)";
        a[2].innerText = "3";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Engineering Graphics (BCE-10)";
        a[2].innerText = "2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-III (BAS-21)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Electromechanical Energy Conversion (BEE-16)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Solid State Physics (BAS-28)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Network Analysis & Synthesis (BEC-11)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Digital Electronics & Circuits (BEC-12)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Communication Skills (BAS-20)";
        a[2].innerText = "2";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-IV (BAS-23)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Signals & Systems (BEC-13)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Electromagnetic Field Theory (BEC-14)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Solid State Devices & Circuits (BEC-15)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Public Administration (MBA-03)";
        a[2].innerText = "4";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Web Designing (BCS-19)";
        a[2].innerText = "2";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering and Managerial Economics (MBA-03)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Control Systems (BEC-26)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Analog Integrated Circuits (BEC-27)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Principles of Communication (BEC-28)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Electronics Measurement & Instrumentation (BEC-29)";
        a[2].innerText = "5";
        addClass();
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Digital Communication (BEC-31)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Microprocessors & Application (BEC-32)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Data Communication Networks (BEC-33)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Microwave Engineering (BEC-34)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "VLSI Technology (BEC-35)"; //4
        a[2].innerText = "4";
        addClass();
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "VLSI Design (BEC-41)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Digital Signal Processing (BEC-42)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-1 (BEC-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BEC-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-I (BEC-40)";
        a[2].innerText = "5";
        addClass();
        break;
      case "8":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Mobile Computing (BEC-43)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Programme Elective-3 (BEC-**)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-4 (BEC-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective offered by other Department (BOE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-II (BEC-50)";
        a[2].innerText = "5";
        addClass();
        break;
    }
  }
  if (gbranch === "4") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Applied Engineering Chemistry (BAS-15)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Principles of Electrical Engineering (BEE-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Professional Communication (BAS-03)";
        a[2].innerText = "4";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Engineering Graphics (BCE-10)";
        a[2].innerText = "2";
        break;

      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Engineering Chemistry (BAS-09)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Introduction to Computer Programming (BCS-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Humanities & Social Science Electives (BAS-12)";
        a[2].innerText = "3";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Workshop Technology (BME-10)";
        a[2].innerText = "2";
        break;

      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Advanced Mathematics & Statistics (BAS-31)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Chemical Engineering Fluid Mechanics (BCT-11)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Materials in Chemical Engineering (BCT-12)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Chemical Engineering Process Calculations (BCT-13)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Chemical Engineering Mechanical Operations (BCT-14)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Communication Skills (BAS-20)";
        a[2].innerText = "2";
        break;

      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Industrial Management (MBA-01)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Transport Phenomena (BCT-15)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Sugar Technology (BCT-16)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Heat Transfer Operation (BCT-17)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Chemical Engineering Thermodynamics-I (BCT-18)";
        a[2].innerText = "4";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Simulation Techniques (BEE-20)";
        a[2].innerText = "2";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering and Managerial Economics (MBA-03)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Chemical Technology (BCT-26)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Mass Transfer-I (BCT-27)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Chemical Reaction Engineering - I (BCT-28A)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Chemical Engineering Thermodynamics-II (BCT-29)";
        a[2].innerText = "5";
        addClass();
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Alcohol Technology (BCT-31)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Mass Transfer-II (BCT-32)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Process Dynamics, Control & Instrumentation (BCT-33)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Chemical Reaction Engineering-II (BCT-34A)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Process Integration (BCT-51)";
        a[2].innerText = "4"; //4
        addClass();
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Process Equipment Design (BCT-41)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Energy Resources & Applications (BCT-42)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Chemical Control in Sugar Plant (BCT-43)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BEC-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-I (BCT-40)";
        a[2].innerText = "5";
        addClass();
        break;
      case "8":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Chemical Engineering Design (BCT-46)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Programme Elective-3 (BCT-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children; //4
        a[2].innerText = "4";
        a[0].innerText = "Programme Elective-4 (BCT-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective offered by other Department (BOE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-II (BCT-50)";
        a[2].innerText = "5";
        addClass();
        break;
    }
  }
  if (gbranch === "5") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Mechanics of Structures (BCE-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Introduction to Computer Programming(BCS-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Professional Communication (BAS-03)";
        a[2].innerText = "4";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Engineering Graphics (BCE-10)";
        a[2].innerText = "2";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Engineering Chemistry (BAS-09)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Principles of Electrical Engineering (BEE-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Humanities & Social Science Electives (BAS-12)";
        a[2].innerText = "3";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Workshop Technology (BME-10)";
        a[2].innerText = "2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-III (BAS-21)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText =
          "Building Construction and Planning Estimation and Costing (BCE-19)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Fluid Mechanics (BCE-13)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Basic Surveying (BCE-12)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Structural Mechanics-I (BCE-14)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Engineering Geology & Building Material (BCE-15)";
        a[2].innerText = "2";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Numerical Methods (BAS-29)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Industrial Management (MBA-01)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Hydraulic and Hydraulic Machines (BCE-16)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Structural Mechanics -II (BCE-17)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Advanced Surveying (BCE-18)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Concrete & Concrete Structures (BCE-11)";
        a[2].innerText = "2";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering and Managerial Economics (MBA-03)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Environmental Engineering-I (BCE-26)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Geotechnical Engineering -I (BCE-27)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Transportation Engineering- I (BCE-28)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Design of Concrete Structures (BCE-29)";
        a[2].innerText = "5";
        addClass();
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Geotechnical Engineering -II (BCE-31)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Environmental Engineering -II (BCE-32)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Steel Structures (BCE-33)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Transportation Engineering- II (BCE-34)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //4
        a[0].innerText = "Construction Technology and Management (BCE-35)";
        a[2].innerText = "4";
        removeClass();
        a = document.querySelector(".sub-6").children; //3
        a[0].innerText = "Survey Camp (BCE-36)";
        a[2].innerText = "3";
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Water Resources Engineering (BCE-41)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Earthquake Resistant Design (BCE-42)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-1 (BCE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BCE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-I (BCE-40)";
        a[2].innerText = "5";
        addClass();
        break;
      case "8":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Analysis and Design of Hydraulic Structures (BCE-43)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Programme Elective-3 (BCE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-4 (BCE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective offered by other Department (BOE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-II (BCE-50)";
        a[2].innerText = "5";
        addClass();
        break;
    }
  }
  if (gbranch === "6") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Fundamentals of Information Technology (BIT-01)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Principles of Electrical Engineering (BEE-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children; //4
        a[0].innerText = "Professional Communication (BAS-03)";
        a[2].innerText = "4";
        removeClass();
        a = document.querySelector(".sub-6").children; //2
        a[0].innerText = "Software Tools-I (BIT-02)";
        a[2].innerText = "2";
        break;
      case "2":
        a = document.querySelector(".sub-1").children; ///4
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Applied Computational Methods (BAS-24)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Programming Fundamentals (BIT-03)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children; //3
        a[0].innerText = "Humanities & Social Science Electives (BAS-12)";
        a[2].innerText = "3";
        removeClass();
        a = document.querySelector(".sub-6").children; //2
        a[0].innerText = "Engineering Graphics (BCE-10)";
        a[2].innerText = "2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Discrete Mathematics (BAS-27)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Graph Theory (BAS-14)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Switching Theory & Logic Design (BIT-11)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Data Structures (BIT-12)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Object Oriented Programming (BIT-13)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children; //2
        a[0].innerText = "Software Tools-II (BIT-14)";
        a[2].innerText = "2";
        break;
      case "4":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Optimization Techniques (BAS-26)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children; //3
        a[0].innerText = "Management Information System (MBA-113)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Design & Analysis of Algorithm (BIT-15)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Computer Organization & Architecture (BIT-16)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Database Management System (BIT-17)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children; //2
        a[0].innerText = "Software Tools-III (BIT-18)";
        a[2].innerText = "2";
        break;
      case "5":
        a = document.querySelector(".sub-1").children; //3
        a[0].innerText = "Engineering & Managerial Economics (MBA-02)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Operating System (BIT-26)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Computer Networks (BIT-27)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Software Engineering (BIT-28)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children; //4
        a[0].innerText = "Automata Theory (BIT-29)";
        a[2].innerText = "4";
        addClass();
        break;
      case "6":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Data Mining & Ware Housing (BIT-31)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Artificial Intelligence (BIT-32)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Machine Learning (BIT-33)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Wireless Sensor Network & IoT (BIT-34)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Network Security & Cryptography (BIT-35)";
        a[2].innerText = "5";
        addClass();
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Graphics & Visual Computing (BIT-41)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Mobile Computing (BIT-42)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Programme Elective-1 (BIT-**)"; //4
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BIT-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-1 (BIT-40)";
        a[2].innerText = "5";
        addClass();
        break;
      case "8":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Distributed System (BIT-43)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Programme Elective-3 (BIT-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-4 (BIT-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective Offered by other dept. (BOE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-2 (BIT-50)";
        a[2].innerText = "5";
        addClass();
        break;
    }
  }
  if (gbranch === "7") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Engineering Chemistry (BAS-09)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Engineering Mechanics (BME-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Humanities & Social Science Electives (BAS-12)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Engineering Graphics (BCE-10)";
        a[2].innerText = "2";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Professional Communication (BAS-09)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Principles of Electrical Engineering (BEE-01)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Introduction to Computer Programming (BAS-12)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Workshop Technology (BME-10)";
        a[2].innerText = "2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-III (BAS-21)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Material Science and Engineering (BME-11)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Mechanics of Solids (BME-12)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Engineering Thermodynamics (BME-12)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Manufacturing Science (BME-29)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Mechanical Engineering Drawing (BME-20)";
        a[2].innerText = "2";
        break;
      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Numerical Methods (BAS-29)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Industrial Management (MBA-01)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Hydraulic and Hydraulic Machines (BCE-16)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Structural Mechanics -II (BCE-17)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Advanced Surveying (BCE-18)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Concrete & Concrete Structures (BCE-11)";
        a[2].innerText = "2";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering and Managerial Economics (MBA-03)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Machine Design-I (BME-26)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Heat and Mass Transfer (BME-27)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Dynamics of Machines (BME-28)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Measurement & Metrology (BME-13)";
        a[2].innerText = "4";
        addClass();
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Machine Design-II (BME-31)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Refrigeration & Air conditioning (BME-32)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "I C Engines (BME-33)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Machine Tools & Machining (BME-34)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Computer Aided Design (BME-42)";
        a[2].innerText = "5";
        addClass();
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Automobile Engineering (BME-41)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText =
          "Computational tools for Mechanical Engineering (BME-69)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-1 (BME-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BME-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-I (BME-40)";
        a[2].innerText = "5";
        addClass();
        break;
      case "8":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Computer Aided Manufacturing (BME-43)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //4
        a[0].innerText = "Programme Elective-3 (BME-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-4 (BME-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective offered by other Department (BOE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-II (BME-50)";
        a[2].innerText = "5";
        addClass();
        break;
    }
  }
  if (gbranch === "2") {
    switch (sem) {
      case "1":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-I (BAS-01)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-I (BAS-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Engineering Chemistry (BAS-09)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Electrical Circuits & Analysis (BEE-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Fundamentals of Electronics (BEC-01)";
        a[2].innerText = "5";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Workshop Technology (BME-10)";
        a[2].innerText = "2";
        break;
      case "2":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-II (BAS-07)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Engineering Physics-II (BAS-08)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Human Values & Professional Ethics (BAS-11)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Fundamentals of Mechanical Engineering (BME-02)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Professional Communication (BAS-03)";
        a[2].innerText = "4";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Engineering Graphics (BCE-10)";
        a[2].innerText = "2";
        break;
      case "3":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-III (BAS-21)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Digital Electronics & Circuits (BEC-12)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Basic System Analysis (BEE-11)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children;
        a[0].innerText =
          "Electrical Measurement & Measuring Instruments (BEE-12)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Simulation Techniques (BEE-20)";
        a[2].innerText = "2";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Engineering Materials (BME-15)";
        a[2].innerText = "5";
        break;

      case "4":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering Mathematics-IV (BAS-23)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Electromechanical Energy Conversion-I (BEE-13)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText =
          "Microprocessor Architecture, Programming and Interfacing (BEE-15A)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Network Analysis & Synthesis (BEC-11)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Industrial Management (MBA-01)";
        a[2].innerText = "3";
        removeClass();
        a = document.querySelector(".sub-6").children;
        a[0].innerText = "Communication Skills (BAS-20)";
        a[2].innerText = "2";
        break;
      case "5":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Engineering and Managerial Economics (MBA-03)";
        a[2].innerText = "3";
        a = document.querySelector(".sub-2").children;
        a[0].innerText = "Control System Engineering (BEE-28)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children;
        a[0].innerText = "Electromechanical Energy ConversionII (BEE-26)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children;
        a[0].innerText = "Power SystemI (BEE-27)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Electromagnetic Field Theory (BEC-14)";
        a[2].innerText = "4";
        addClass();
        break;
      case "6":
        a = document.querySelector(".sub-1").children;
        a[0].innerText = "Instrumentation & Process Control (BEE-29)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Power System-II (BEE-31)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //5
        a[0].innerText = "Power Electronics (BEE-32)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-4").children; //5
        a[0].innerText = "Conventional and CAD of Electrical Machines (BEE-54)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-5").children;
        a[0].innerText = "Power Plant Engineering (BEE-33)"; //4
        a[2].innerText = "5";
        addClass();
        break;
      case "7":
        a = document.querySelector(".sub-1").children; //5
        a[0].innerText = "Electric Drives (BEE-41)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Switch Gear & Protection (BEE-42)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-1 (BEC-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Programme Elective-2 (BEC-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-I (BEC-40)";
        a[2].innerText = "5";
        addClass();
        break;
      case "8":
        a = document.querySelector(".sub-1").children; //4
        a[0].innerText = "Power System and Control (BEE-43)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-2").children; //5
        a[0].innerText = "Programme Elective-3 (BEC-**)";
        a[2].innerText = "5";
        a = document.querySelector(".sub-3").children; //4
        a[0].innerText = "Programme Elective-4 (BEC-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-4").children; //4
        a[0].innerText = "Open Elective offered by other Department (BOE-**)";
        a[2].innerText = "4";
        a = document.querySelector(".sub-5").children; //5
        a[0].innerText = "Project Part-II (BEC-50)";
        a[2].innerText = "5";
        addClass();
        break;
    }
  }
  console.log(a);
}
function result(sem, branch) {
  var totalcredit = 0;
  var totalobtained = 0;
  var f = 0;
  if ((branch == "5" && sem == "6") || sem <= 4) {
    var a;
    for (i = 1; i <= 6; i++) {
      a = document.querySelector(".sub-" + i).children;
      if (!a[1].value == "") {
        totalobtained += round(parseInt(a[1].value)) * a[2].textContent;
        totalcredit += parseInt(a[2].textContent);
      } else {
        f++;
      }
    }
    var ans = totalobtained / totalcredit;
    if (f == 0) {
      document.querySelector(".message").innerText =
        "Your SGPA in Semester " + sem + " is " + ans;
    } else {
      alert("Please fill all the fields");
    }
  } else {
    var a;
    for (i = 1; i <= 5; i++) {
      a = document.querySelector(".sub-" + i).children;
      if (!a[1].value == "") {
        totalobtained += round(parseInt(a[1].value)) * a[2].textContent;
        totalcredit += parseInt(a[2].textContent);
      } else {
        f++;
      }
    }
    var ans = totalobtained / totalcredit;
    if (f == 0) {
      document.querySelector(".message").innerText =
        "Your SGPA in Semester " + sem + " is " + ans;
    } else {
      alert("Please fill all the fields");
    }
  }
}
function round(e) {
  if (e == 0) return 0;
  else if (e > 0 && e < 10) return 1;
  else if (e >= 10 && e < 20) return 2;
  else if (e >= 20 && e < 30) return 3;
  else if (e >= 30 && e < 40) return 4;
  else if (e >= 40 && e < 50) return 5;
  else if (e >= 50 && e < 60) return 6;
  else if (e >= 60 && e < 70) return 7;
  else if (e >= 70 && e < 80) return 8;
  else if (e >= 80 && e < 90) return 9;
  else if (e >= 90 && e <= 100) return 10;
}
function addClass() {
  a = document.querySelector(".sub-6");
  if (!a.classList.contains("visibility"));
  a.classList.add("visibility");
}
function removeClass() {
  b = document.querySelector(".sub-6");
  if (b.classList.contains("visibility"));
  b.classList.remove("visibility");
}
