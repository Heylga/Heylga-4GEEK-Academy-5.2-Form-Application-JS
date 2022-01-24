function validateForm() {
  let firstName = document.forms["regForm"]["fname"].value;
  let lastName = document.forms["regForm"]["lname"].value;
  let email = document.forms["regForm"]["email"].value;
  let tel = document.forms["regForm"]["phone"].value;
  let age = document.forms["regForm"]["age"].value;
  let gender = document.forms["regForm"]["gender"].value;

  if (firstName.length < 1) {
    document.querySelector("firstName").innerHTML =
      "Yourt fist name is required";
    firstName.style.color = "red";
  }
  if (lastName.length < 1) {
    document.querySelector("lastName").innerHTML =
      "Yourt last name is required";
    lastName.style.color = "red";
  }
  if (email.length < 1) {
    document.querySelector("email").innerHTML = " email is required";
    email.style.color = "red";
  }
  if (tel.length < 1) {
    document.querySelector("tel").innerHTML =
      " Please Enter Your Phonenumber *";
    tel.style.color = "red";
  }
  if (age.length < 1) {
    document.querySelector("age").innerHTML = " Please Enter Your age *";
    age.style.color = "red";
  }

  if (gender.length < 1) {
    document.querySelector("gender").innerHTML =
      "gender is necessary to be selected";
    gender.style.color = "red";
  }
  if (
    firstName.length < 1 ||
    lastName.length < 1 ||
    email.length < 1 ||
    tel.length < 1 ||
    origin.value === "0" ||
    age.length < 1 ||
    gender.length < 1
  ) {
    return false;
  }
}
