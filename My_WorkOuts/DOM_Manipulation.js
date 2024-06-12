var myButton = document.getElementById("button");
var input1 = document.getElementById("nametext");
var input2 = document.getElementById("emailtext");
myButton.addEventListener("click", (e) => {
  if (myButton.innerText == "SUBMIT")
    alert("You are going to submit your response");
  setTimeout(() => {
    var isconfirm = confirm("Are you sure want to submit?");
    if (isconfirm) {
      myButton.innerText = "SUBMITTED";
      if (input1.value != "" && input2.value != "") {
        localStorage.setItem("name", input1.value);
        localStorage.setItem("email", input2.value);
        console.log(`${localStorage.key(0)} : ${input1.value}`);
        console.log(`${localStorage.key(1)} : ${input2.value}`);
      }
      setTimeout(() => {
        if ((myButton.innerText = "SUBMITTED")) myButton.remove();
        alert("SUBMITTED, You cannot resubmit your response");
      }, 2000);
    } else alert("You have cancelled your confirmation!!!");
  }, 1500);
});
