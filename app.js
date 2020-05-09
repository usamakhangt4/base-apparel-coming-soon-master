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
    document.getElementById("warnIcon").style.visibility = "hidden";
    result.innerHTML = email + " is a valid email";
    document.getElementById("warning").style.visibility = "hidden";
  } else {
    document.getElementById("warnIcon").style.visibility = "visible";
    result.innerHTML = email + " is an invalid email";
    document.getElementById("warning").style.visibility = "visible";
  }
  return false;
}

// $("#validate").on("click", validate);
