function validateEmail(email) {
  if (email == "") {
    email.preventDefault();
  }
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var result = document.getElementById("result");
  var email = document.getElementById("email");
  email = email.value;
  if (validateEmail(email)) {
    result.innerHTML = email + " is a valid email";
    document.getElementById("warning").style.visibility = "hidden";
  } else {
    result.innerHTML = email + " is an invalid email";
    document.getElementById("warning").style.visibility = "visible";
  }
  return false;
}

// $("#validate").on("click", validate);
