function loginValidation(event) {
    event.preventDefault();
    var nameField = document.getElementById("login-id").value;
    let passwordField = document.getElementById("password-id").value;
    var fullertonEmail = nameField.substr(-13).toLowerCase();
    
    if(nameField == "adminlogin@csu.fullerton.edu" && passwordField == "user"){
       alert("Login Succesful, Welcome back Admin");
       window.location.replace("browsing.html");
    }
    else{
      
      if ((!(isNaN(nameField)) && nameField.length == 9) || fullertonEmail == "fullerton.edu" && nameField != "adminlogin@csu.fullerton.edu") {
        alert('Your username is: ' + nameField);
      } 
      else {
        alert('Username is incorrect');
      }
    }
    
  }

  function registerValidation() {
    var emailField = document.getElementById("email-id").value;
    var fullertonEmail = emailField.substr(-13).toLowerCase();

    if ((!(isNaN(emailField)) && emailField.length == 9) || fullertonEmail == "fullerton.edu") {
        alert('Your username is: ' + emailField);
      } else {
        alert('Username is incorrect');
      }
  }

  function registerPurchaseMethod() {
    var titanCard = document.getElementById("titancard");

    if (titanCard.checked) {
        alert('You have selected to use your TitanCard to make this purchase.');
      } else {
        alert('You have agreed to pay for this item using your credit card.');
      }
  }

  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");

  function register() {
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "110px";
  }

  function login() {
      x.style.left = "50px";
      y.style.left = "450px";
      z.style.left = "0px";
  }
