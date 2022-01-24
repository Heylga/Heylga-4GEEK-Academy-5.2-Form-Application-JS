const nameinput = document.querySelectorAll("#name");
const password = document.querySelectorAll("#password");
const form = document.querySelectorAll("#form");
const errorElement = document.querySelectorAll("#error");

window.onload = function(validateform) {
  form.addEventListner("submit", e => {
    let messages = [];
    if (nameinput.value === "" || nameinput.value == null) {
      messages.push("Name is requiered");
    }

    if (password.value === "" || password.value == null) {
      messages.push("Password is requiered");
    }

    // if (password.value.length <= 6) {
    //   messages.push("Password must be longer than 6 characters");
    // }

    if (messages.length > 0) {
      errorElement.prevetDefault();
      errorElement.innerText = messages.join(", ");
    }
  });
};
