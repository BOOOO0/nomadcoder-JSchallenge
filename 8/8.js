const form2 = document.querySelector(".form2");
const input1 = document.querySelector(".form1_input");
const input2 = document.querySelector(".form2_input");

const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
function onSubmit(event) {
  event.preventDefault();
  let randomNumber = Math.ceil(Math.random() * input1.value);
  if (
    input1.value != "" &&
    input2.value != "" &&
    parseInt(input2.value) <= parseInt(input1.value)
  ) {
    result.innerHTML = `You chose: ${input2.value}, the machine chose: ${randomNumber}.`;
    if (randomNumber === parseInt(input2.value)) {
      result2.innerHTML = "<strong>You Win!</strong>";
    } else {
      result2.innerHTML = "<strong>You Lost!</strong>";
    }
  } else if (parseInt(input2.value) > parseInt(input1.value)) {
    alert("Out of Range!");
    location.reload();
  }
}

form2.addEventListener("submit", onSubmit);
