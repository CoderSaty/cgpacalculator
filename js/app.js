/* cse -0 ee- 1 , ece -2 , che -3 ce-4 it- 5 me-6*/
// subject-name -0, subject-credit 1
var subDetails = [
  [
    [
      ["Engineering Mathematics-I (BAS-01)", "4"],
      ["Engineering Physics-I (BAS-02)", "5"],
      ["Introduction to C & Functional Programming (BCS-80)", "5"],
      ["Principles of Electrical Engineering (BEE-01)", "5"],
      ["Professional Communication (BAS-03)", "4"],
      ["Software Lab-I (BCS-03)", "2"],
    ],
    [
      ["Engineering Mathematics-II (BAS-07)", "4"],
      ["Engineering Physics-II (BAS-08)", "5"],
      ["Graph Theory (BAS-14)", "5"],
      ["Object Oriented Modeling & C++ (BCS-04)", "5"],
      ["Humanities & Social Science Electives (BAS-12)", "3"],
      ["Software Lab-II (BCS-05)", "2"],
    ],
    [
      ["Discrete Mathematics (BAS-27)", "4"],
      ["Applied Computational Methods (BAS-24)", "5"],
      ["Digital Circuits and Logic Design (BCS-11)", "4"],
      ["Principles of Data Structures through C/C++ (BCS-12)", "5"],
      ["Internet & JAVA Programming (BCS-13)", "5"],
      ["Software Lab-III (BCS-14)", "2"],
    ],
    [
      ["Optimization Techniques (BAS-26)", "4"],
      ["Management Information System (MBA-113)", "3"],
      ["Database Management Systems (BCS-15)", "5"],
      ["Theory of Computation (BCS-16)", "4"],
      ["Computer Organization & Design (BCS-17)", "5"],
      ["Software Lab-IV (BCS-18)", "2"],
    ],
    [
      ["Engineering and Managerial Economics (MBA-03)", "3"],
      ["Principles of Operating Systems (BCS-26)", "5"],
      ["Computer Graphics (BCS-27)", "5"],
      ["Design & Analysis of Algorithms (BCS-28)", "5"],
      ["Advanced Computer Architecture (BCS-29)", "5"],
    ],
    [
      ["Principle of Compiler Design (BCS-31)", "5"],
      ["Artificial Intelligence (BCS-32)", "5"],
      ["Web Technologies (BCS-33)", "5"],
      ["Computer Networks (BCS-34)", "5"],
      ["Software Engineering (BCS-35)", "5"],
    ],
    [
      ["Introduction to Machine Learning (BCS-41)", "5"],
      ["Parallel & Distributed Computing (BCS-42)", "5"],
      ["Programme Elective-1 (BCS-**)", "4"],
      ["Programme Elective-2 (BCS-**)", "4"],
      ["Project Part-I (BCS-40)", "5"],
    ],
    [
      ["Mobile Computing (BCS-43)", "5"],
      ["Open Elective offered by other Department (BOE-**)", "4"],
      ["Programme Elective-3 (BCS-**)", "4"],
      ["Programme Elective-4 (BCS-**)", "4"],
      ["Project Part-II (BCS-50)", "5"],
    ],
  ],
  [
    [
      ["Engineering Mathematics-I (BAS-01)", "4"],
      ["Engineering Physics-I (BAS-02)", "5"],
      ["Engineering Chemistry (BAS-09)", "5"],
      ["Electrical Circuits & Analysis (BEE-02)", "5"],
      ["Fundamentals of Electronics (BEC-01)", "5"],
      ["Workshop Technology (BME-10)", "2"],
    ],
    [
      ["Engineering Mathematics-II (BAS-07)", "4"],
      ["Engineering Physics-II (BAS-08)", "5"],
      ["Fundamentals of Mechanical Engineering (BME-02)", "5"],
      ["Professional Communication (BAS-03)", "4"],
      ["Human Values & Professional Ethics (BAS-11)", "3"],
      ["Engineering Graphics (BCE-10)", "2"],
    ],
    [
      ["Engineering Mathematics-III (BAS-21)", "4"],
      ["Digital Electronics & Circuits (BEC-12)", "5"],
      ["Basic System Analysis (BEE-11)", "4"],
      ["Electrical Measurement & Measuring Instruments (BEE-12)", "5"],
      ["Engineering Materials (BME-15)", "5"],
      ["Simulation Techniques (BEE-20)", "2"],
    ],
    [
      ["Engineering Mathematics-IV (BAS-23)", "4"],
      ["Electromechanical Energy Conversion-I (BEE-13)", "5"],
      [
        "Microprocessor Architecture, Programming and Interfacing (BEE-15A)",
        "5",
      ],
      ["Network Analysis & Synthesis (BEC-11)", "5"],
      ["Industrial Management (MBA-01)", "3"],
      ["Communication Skills (BAS-20)", "2"],
    ],
    [
      ["Engineering and Managerial Economics (MBA-03)", "3"],
      ["Control System Engineering (BEE-28)", "5"],
      ["Electromechanical Energy ConversionII (BEE-26)", "5"],
      ["Electromagnetic Field Theory (BEC-14)", "4"],
      ["Power SystemI (BEE-27)", "4"],
    ],
    [
      ["Conventional and CAD of Electrical Machines (BEE-54)", "5"],
      ["Power Electronics (BEE-32)", "5"],
      ["Instrumentation & Process Control (BEE-29)", "5"],
      ["Power Plant Engineering (BEE-33)", "5"],
      ["Power SystemII (BEE-31)", "5"],
    ],
    [
      ["Electric Drives (BEE-41)", "5"],
      ["Switch Gear & Protection (BEE-42)", "5"],
      ["Programme Elective-1 (BEE-**)", "4"],
      ["Programme Elective-2 (BEE-**)", "4"],
      ["Project Part-I (BEE-40)", "5"],
    ],
    [
      ["Power System and Control (BEE-43)", "4"],
      ["Open Elective offered by other Department (BOE-**)", "4"],
      ["Programme Elective-3 (BEE-**)", "5"],
      ["Programme Elective-4 (BEE-**)", "4"],
      ["Project Part-II (BEE-50)", "5"],
    ],
  ],
  [
    [
      ["Engineering Mathematics-I (BAS-01)", "4"],
      ["Engineering Physics-I (BAS-02)", "5"],
      ["Professional Communication (BAS-03)", "4"],
      ["Electrical Circuits & Analysis (BEE-02)", "5"],
      ["Fundamentals of Electronics (BEC-01)", "5"],
      ["Electronics Workshop & PCB (BEC-10)", "2"],
    ],
    [
      ["Engineering Mathematics-II (BAS-07)", "4"],
      ["Engineering Physics-II (BAS-08)", "5"],
      ["Engineering Chemistry (BAS-09)", "5"],
      ["Introduction to Computer Programming (BCS-01)", "5"],
      ["Humanities & Social Science Electives (BAS-12)", "3"],
      ["Engineering Graphics (BCE-10)", "2"],
    ],
    [
      ["Engineering Mathematics-III (BAS-21)", "4"],
      ["Electromechanical Energy Conversion (BEE-16)", "5"],
      ["Digital Electronics & Circuits (BEC-12)", "5"],
      ["Network Analysis & Synthesis (BEC-11)", "4"],
      ["Solid State Physics (BAS-28)", "5"],
      ["Communication Skills (BAS-20)", "2"],
    ],
    [
      ["Engineering Mathematics-IV (BAS-23)", "4"],
      ["Signals & Systems (BEC-13)", "4"],
      ["Electromagnetic Field Theory (BEC-14)", "4"],
      ["Solid State Devices & Circuits (BEC-15)", "5"],
      ["Public Administration (MBA-03)", "4"],
      ["Web Designing (BCS-19)", "2"],
    ],
    [
      ["Engineering and Managerial Economics (MBA-03)", "3"],
      ["Analog Integrated Circuits (BEC-27)", "5"],
      ["Principles of Communication (BEC-28)", "5"],
      ["Electronics Measurement & Instrumentation (BEC-29)", "5"],
      ["Control Systems (BEC-26)", "5"],
    ],
    [
      ["Digital Communication (BEC-31)", "5"],
      ["Microprocessors & Application (BEC-32)", "5"],
      ["Microwave Engineering (BEC-34)", "5"],
      ["Data Communication Networks (BEC-33)", "4"],
      ["VLSI Technology (BEC-35)", "4"],
    ],
    [
      ["VLSI Design (BEC-41)", "5"],
      ["Digital Signal Processing (BEC-42)", "4"],
      ["Programme Elective-1 (BEC-**)", "4"],
      ["Programme Elective-2 (BEC-**)", "4"],
      ["Project Part-I (BEC-40)", "5"],
    ],
    [
      ["Mobile Computing (BEC-43)", "5"],
      ["Open Elective offered by other Department (BOE-**)", "4"],
      ["Programme Elective-3 (BEC-**)", "5"],
      ["Programme Elective-4 (BEC-**)", "4"],
      ["Project Part-II (BEC-50)", "5"],
    ],
  ],
  [
    [
      ["Engineering Mathematics-I (BAS-01)", "4"],
      ["Engineering Physics-I (BAS-02)", "5"],
      ["Applied Engineering Chemistry (BAS-15)", "5"],
      ["Principles of Electrical Engineering (BEE-01)", "5"],
      ["Professional Communication (BAS-03)", "4"],
      ["Engineering Graphics (BCE-10)", "2"],
    ],
    [
      ["Engineering Mathematics-II (BAS-07)", "4"],
      ["Engineering Physics-II (BAS-08)", "5"],
      ["Engineering Chemistry (BAS-09)", "5"],
      ["Introduction to Computer Programming (BCS-01)", "5"],
      ["Humanities & Social Science Electives (BAS-12)", "3"],
      ["Workshop Technology (BME-10)", "2"],
    ],
    [
      ["Advanced Mathematics & Statistics (BAS-31)", "4"],
      ["Chemical Engineering Fluid Mechanics (BCT-11)", "5"],
      ["Materials in Chemical Engineering (BCT-12)", "5"],
      ["Chemical Engineering Process Calculations (BCT-13)", "4"],
      ["Chemical Engineering Mechanical Operations (BCT-14)", "5"],
      ["Communication Skills (BAS-20)", "2"],
    ],
    [
      ["Transport Phenomena (BCT-15)", "4"],
      ["Sugar Technology (BCT-16)", "4"],
      ["Heat Transfer Operation (BCT-17)", "5"],
      ["Chemical Engineering Thermodynamics-I (BCT-18)", "4"],
      ["Industrial Management (MBA-01)", "3"],
      ["Simulation Techniques (BEE-20)", "2"],
    ],
    [
      ["Engineering and Managerial Economics (MBA-03)", "3"],
      ["Chemical Reaction Engineering - I (BCT-28A)", "5"],
      ["Principles of Communication (BEC-28)", "5"],
      ["Chemical Engineering Thermodynamics-II (BCT-29)", "4"],
      ["Chemical Technology (BCT-26)", "4"],
    ],
    [
      ["Alcohol Technology (BCT-31)", "5"],
      ["Mass Transfer-II (BCT-32)", "5"],
      ["Process Dynamics, Control & Instrumentation (BCT-33)", "5"],
      ["Chemical Reaction Engineering-II (BCT-34A)", "5"],
      ["Process Integration (BCT-51)", "4"],
    ],
    [
      ["Process Equipment Design (BCT-41)", "5"],
      ["Energy Resources & Applications (BCT-42)", "4"],
      ["Chemical Control in Sugar Plant (BCT-43)", "4"],
      ["Programme Elective-2 (BCT-**)", "4"],
      ["Project Part-I (BCT-40)", "5"],
    ],
    [
      ["Chemical Engineering Design (BCT-46)", "5"],
      ["Open Elective offered by other Department (BOE-**)", "4"],
      ["Programme Elective-3 (BCT-**)", "5"],
      ["Programme Elective-4 (BCT-**)", "4"],
      ["Project Part-II (BCT-50)", "5"],
    ],
  ],
  [
    [
      ["Engineering Mathematics-I (BAS-01)", "4"],
      ["Engineering Physics-I (BAS-02)", "5"],
      ["Mechanics of Structures (BCE-01)", "5"],
      ["Introduction to Computer Programming(BCS-01)", "5"],
      ["Professional Communication (BAS-03)", "4"],
      ["Engineering Graphics (BCE-10)", "2"],
    ],
    [
      ["Engineering Mathematics-II (BAS-07)", "4"],
      ["Engineering Physics-II (BAS-08)", "5"],
      ["Engineering Chemistry (BAS-09)", "5"],
      ["Principles of Electrical Engineering (BEE-01)", "5"],
      ["Humanities & Social Science Electives (BAS-12)", "3"],
      ["Workshop Technology (BME-10)", "2"],
    ],
    [
      ["Engineering Mathematics-III (BAS-21)", "4"],
      [
        "Building Construction and Planning Estimation and Costing (BCE-19)",
        "5",
      ],
      ["Fluid Mechanics (BCE-13)", "5"],
      ["Basic Surveying (BCE-12)", "5"],
      ["Structural Mechanics-I (BCE-14)", "5"],
      ["Engineering Geology & Building Material (BCE-15)", "2"],
    ],
    [
      ["Numerical Methods (BAS-29)", "5"],
      ["Advanced Surveying (BCE-18)", "5"],
      ["Structural Mechanics -II (BCE-17)", "4"],
      ["Hydraulic and Hydraulic Machines (BCE-16)", "5"],
      ["Industrial Management (MBA-01)", "3"],
      ["Concrete & Concrete Structures (BCE-11)", "5"],
    ],
    [
      ["Engineering and Managerial Economics (MBA-03)", "3"],
      ["Environmental Engineering-I (BCE-26)", "5"],
      ["Transportation Engineering- I (BCE-28)", "5"],
      ["Geotechnical Engineering -I (BCE-27)", "5"],
      ["Design of Concrete Structures (BCE-29)", "5"],
    ],
    [
      ["Geotechnical Engineering -II (BCE-31)", "5"],
      ["Steel Structures (BCE-33)", "4"],
      ["Environmental Engineering -II (BCE-32)", "4"],
      ["Transportation Engineering- II (BCE-34)", "5"],
      ["Construction Technology and Management (BCE-35)", "4"],
      ["Survey Camp (BCE-36)", "3"],
    ],
    [
      ["Water Resources Engineering (BCE-41)", "4"],
      ["Earthquake Resistant Design (BCE-42)", "5"],
      ["Programme Elective-1 (BCE-**)", "4"],
      ["Programme Elective-2 (BCE-**)", "4"],
      ["Project Part-I (BCE-40)", "5"],
    ],
    [
      ["Analysis and Design of Hydraulic Structures (BCE-43)", "5"],
      ["Open Elective offered by other Department (BOE-**)", "4"],
      ["Programme Elective-3 (BCE-**)", "4"],
      ["Programme Elective-4 (BCE-**)", "4"],
      ["Project Part-II (BCE-50)", "5"],
    ],
  ],
  [
    [
      ["Engineering Mathematics-I (BAS-01)", "4"],
      ["Engineering Physics-I (BAS-02)", "5"],
      ["Fundamentals of Information Technology (BIT-01)", "4"],
      ["Principles of Electrical Engineering (BEE-01)", "5"],
      ["Professional Communication (BAS-03)", "4"],
      ["Software Tools-I (BIT-02)", "2"],
    ],
    [
      ["Engineering Mathematics-II (BAS-07)", "4"],
      ["Engineering Physics-II (BAS-08)", "5"],
      ["Applied Computational Methods (BAS-24)", "5"],
      ["Programming Fundamentals (BIT-03)", "5"],
      ["Humanities & Social Science Electives (BAS-12)", "3"],
      ["Engineering Graphics (BCE-10)", "2"],
    ],
    [
      ["Discrete Mathematics (BAS-27)", "4"],
      ["Graph Theory (BAS-14)", "5"],
      ["Switching Theory & Logic Design (BIT-11)", "4"],
      ["Data Structures (BIT-12)", "5"],
      ["Object Oriented Programming (BIT-13)", "5"],
      ["Software Tools-II (BIT-14)", "2"],
    ],
    [
      ["Optimization Techniques (BAS-26)", "4"],
      ["Management Information System (MBA-113)", "3"],
      ["Design & Analysis of Algorithm (BIT-15)", "5"],
      ["Computer Organization & Architecture (BIT-16)", "5"],
      ["Database Management System (BIT-17)", "5"],
      ["Software Tools-III (BIT-18)", "2"],
    ],
    [
      ["Engineering and Managerial Economics (MBA-03)", "3"],
      ["Operating System (BIT-26)", "5"],
      ["Computer Networks (BIT-27)", "5"],
      ["Software Engineering (BIT-28)", "5"],
      ["Automata Theory (BIT-29)", "4"],
    ],
    [
      ["Data Mining & Ware Housing (BIT-31)", "4"],
      ["Artificial Intelligence (BIT-32)", "5"],
      ["Machine Learning (BIT-33)", "5"],
      ["Wireless Sensor Network & IoT (BIT-34)", "5"],
      ["Network Security & Cryptography (BIT-35)", "5"],
    ],
    [
      ["Graphics & Visual Computing (BIT-41)", "5"],
      ["Mobile Computing (BIT-42)", "5"],
      ["Programme Elective-1 (BIT-**)", "4"],
      ["Programme Elective-2 (BIT-**)", "4"],
      ["Project Part-I (BIT-40)", "5"],
    ],
    [
      ["Distributed System (BIT-43)", "4"],
      ["Open Elective offered by other Department (BOE-**)", "4"],
      ["Programme Elective-3 (BIT-**)", "4"],
      ["Programme Elective-4 (BIT-**)", "4"],
      ["Project Part-II (BIT-50)", "5"],
    ],
  ],
  [
    [
      ["Engineering Mathematics-I (BAS-01)", "4"],
      ["Engineering Physics-I (BAS-02)", "5"],
      ["Engineering Mechanics (BME-01)", "5"],
      ["Engineering Chemistry (BAS-09)", "5"],
      ["Humanities & Social Science Electives (BAS-12)", "5"],
      ["Engineering Graphics (BCE-10)", "2"],
    ],
    [
      ["Engineering Mathematics-II (BAS-07)", "4"],
      ["Engineering Physics-II (BAS-08)", "5"],
      ["Professional Communication (BAS-09)", "4"],
      ["Introduction to Computer Programming(BCS-01)", "5"],
      ["Principles of Electrical Engineering (BEE-01)", "5"],
      ["Workshop Technology (BME-10)", "2"],
    ],
    [
      ["Engineering Mathematics-III (BAS-21)", "4"],
      ["Material Science and Engineering (BME-11)", "5"],
      ["Mechanics of Solids (BME-12)", "4"],
      ["Engineering Thermodynamics (BME-12)", "4"],
      ["Manufacturing Science (BME-29)", "4"],
      ["Mechanical Engineering Drawing (BME-20)", "2"],
    ],
    [
      ["Numerical Methods (BAS-29)", "5"],
      ["Energy Conversion Systems (BME-18)", "5"],
      ["Fluid Mechanics (BME-16)", "5"],
      ["Kinematics of Machines(BME-17)", "4"],
      ["Industrial Management (MBA-01)", "3"],
      ["Communication Skills(BAS=20)", "2"],
    ],
    [
      ["Engineering and Managerial Economics (MBA-03)", "3"],
      ["Machine Design-I (BME-26)", "5"],
      ["Heat and Mass Transfer (BME-27)", "5"],
      ["Dynamics of Machines (BME-28)", "5"],
      ["Measurement & Metrology (BME-13)", "4"],
    ],
    [
      ["Machine Design-II (BME-31)", "5"],
      ["Refrigeration & Air conditioning (BME-32)", "5"],
      ["I C Engines (BME-33)", "5"],
      ["Machine Tools & Machining (BME-34)", "5"],
      ["Computer Aided Design (BME-42)", "5"],
    ],
    [
      ["Automobile Engineering (BME-41)", "5"],
      ["Computational tools for Mechanical Engineering (BME-69)", "5"],
      ["Programme Elective-1 (BME-**)", "4"],
      ["Programme Elective-2 (BME-**)", "4"],
      ["Project Part-I (BME-40)", "5"],
    ],
    [
      ["Analysis and Design of Hydraulic Structures (BCE-43)", "5"],
      ["Open Elective offered by other Department (BOE-**)", "4"],
      ["Programme Elective-3 (BME-**)", "4"],
      ["Programme Elective-4 (BME-**)", "4"],
      ["Project Part-II (BME-50)", "5"],
    ],
  ],
];

var gbranch = "1";
var gsem = "1";
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
  if (sem <= 4 || (branch == "5" && sem == "6")) {
    for (var i = 1; i <= 6; i++) {
      a = document.querySelector(".sub-" + i).children;
      a[0].innerText = subDetails[branch - 1][sem - 1][i - 1][0];
      a[2].innerText = subDetails[branch - 1][sem - 1][i - 1][1];
      if (i == 5) {
        removeClass();
      }
    }
  } else {
    for (var i = 1; i <= 5; i++) {
      a = document.querySelector(".sub-" + i).children;
      a[0].innerText = subDetails[branch - 1][sem - 1][i - 1][0];
      a[2].innerText = subDetails[branch - 1][sem - 1][i - 1][1];
      if (i == 5) {
        addClass();
      }
    }
  }
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
var calculate = document.querySelector(".hit");
calculate.addEventListener("click", showresult);
function showresult() {
  check(gsem, gbranch);
}
function check(sem, branch) {
  var f = 0,
    i,
    check1 = 0,
    check2 = 0;
  var marks = 0;

  if ((branch == "5" && sem == "6") || sem <= 4) {
    var a;

    check0 = 1;
    for (i = 1; i <= 6; i++) {
      a = document.querySelector(".sub-" + i).children;
      marks = a[1].children;
      if (!marks[0].value == "") {
        if (marks[0].value < 0) {
          alert(
            "The marks cannot be less than 0 according to MMMUT marking scheme"
          );
          break;
        }
        if (marks[0].value > 100) {
          alert(
            "Hi genius! How you got marks greater than 100. Please let me know."
          );
          break;
        }
      } else {
        f++;
      }
    }
  } else {
    var a;
    check1 = 1;
    for (i = 1; i <= 5; i++) {
      a = document.querySelector(".sub-" + i).children;
      marks = a[1].children;
      if (!marks[0].value == "") {
        if (marks[0].value < 0) {
          alert(
            "The marks cannot be less than 0 according to MMMUT marking scheme"
          );
          break;
        }
        if (marks[0].value > 100) {
          alert(
            "Hi genius! How you got marks greater than 100. Please let me know."
          );
          break;
        }
      } else {
        f++;
      }
    }
  }
  if ((check1 = 1 && i > 5)) {
    result(sem, branch, f);
  } else if ((check0 = 1 && i > 6)) {
    result(sem, branch, f);
  }
}
function result(sem, branch, f) {
  if (f == 0) {
    var totalcredit = 0;
    var totalobtained = 0;
    if ((branch == "5" && sem == "6") || sem <= 4) {
      var a;
      for (i = 1; i <= 6; i++) {
        a = document.querySelector(".sub-" + i).children;
        var marks = a[1].children;
        totalobtained += round(parseInt(marks[0].value)) * a[2].textContent;
        totalcredit += parseInt(a[2].textContent);
      }
    } else {
      var a;
      for (i = 1; i <= 5; i++) {
        a = document.querySelector(".sub-" + i).children;
        var marks = a[1].children;
        totalobtained += round(parseInt(marks[0].value)) * a[2].textContent;
        totalcredit += parseInt(a[2].textContent);
      }
    }
    var ans = totalobtained / totalcredit;
    document.querySelector(".message").innerText = customMessage(ans, sem);
    var message = document.querySelector(".message").parentElement;
    message.classList.remove("visible");
  } else {
    alert("Please fill all the fields");
  }
}
function customMessage(cgpa, sem) {
  if (cgpa > 9 && cgpa <= 10)
    return (
      "Outstanding 🏆 ! Your SGPA in Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is A(+)."
    );
  else if (cgpa > 8 && cgpa <= 9)
    return (
      "Excellent 🔥 ! Your SGPA in Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is A."
    );
  else if (cgpa > 7 && cgpa <= 8)
    return (
      "Very Good ⭐! Your SGPA in Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is B(+)."
    );
  else if (cgpa > 6 && cgpa <= 7)
    return (
      "Good 😀! Your SGPA in Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is B."
    );
  else if (cgpa > 5 && cgpa <= 6)
    return (
      "Average 🙂! Your SGPA in Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is C."
    );
  else if (cgpa > 4 && cgpa <= 5)
    return (
      "Below Average 😐! Your SGPA in Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is D."
    );
  else
    return (
      "No comments 😟! Your SGPA in Semester " +
      sem +
      " is " +
      cgpa +
      " and your grade is F."
    );
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
