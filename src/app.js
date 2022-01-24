function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
