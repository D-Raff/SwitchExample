// const btnGrade = document.querySelector("[data-grade]");
// const Output = document.querySelector("[data-res]");

// function Grade() {
//   let marks = +document.querySelector("[data-marks]").value

//   switch (true) {
//     case marks === 100:
//       Output.textContent = "A+";
//     break;
//     case marks >= 90 && marks <= 99:
//         Output.textContent = "A";
//     break;
//     case marks >= 80 && marks <= 89:
//        Output.textContent = "B+";
//     break;
//     case marks >= 70 && marks <= 79:
//        Output.textContent = "Distinction";
//     break;
//     case marks >= 60 && marks <= 69:
//        Output.textContent = "C+";
//     break;
//     case marks >= 50 && marks <= 59:
//        Output.textContent = "passed";
//     break;
//     case marks <= 49:
//        Output.textContent = "passed";
//     break;
//     default:
//         Output.textContent = "Failed";
//     break;
//   }
// }

// btnGrade.addEventListener("click", Grade);

// Joel's way of doing it

let btnSubmit = document.querySelector("[data-grade]");

function displayMarks() {
  let marks = +document.querySelector("[data-marks]").value;

  let Output = document.querySelector("[data-res]");

  switch (true) {
    case marks < 50:
      Output.textContent = `sorry, you failed. try again`;
      break;
    case marks <= 59:
      Output.textContent = `you passed`;
      break;
    case marks <= 69:
      Output.textContent = `C+`;
      break;
    case marks <= 79:
      Output.textContent = `Distinction`;
      break;
    case marks <= 89:
      Output.textContent = `B+`;
      break;
    case marks <= 99:
      Output.textContent = `A`;
      break;
    case marks == 100:
      Output.textContent = `A+`;
      break;

    default:
      Output.textContent = `you are a ghost`;
      break;
  }
}

btnSubmit.addEventListener("click", displayMarks);
