function validate() {
    var fname = document.getElementById("name").value;
    var emai = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var salary = document.getElementById("Salary").value;
    var num=document.getElementById("phoneno").value;
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("confirm password").value;
    
    if (fname == "") {
      alert("Enter name!");
      document.getElementById("name").focus();
      return false;
    }
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var f = 0;
    if (emai == "") {
      alert("Enter Email!");
      document.getElementById("email").focus();
      return false;
    }
    if (emai.match(mailformat)) {
      f = 1;
    }
    if (f == 1) {
      alert("You have entered an invalid email address!");
      document.getElementById("email").focus();
      return false;
    }
    if (age == "") {
      alert("Enter age!");
      document.getElementById("age").focus();
      return false;
    }
    if (age < 0) {
      alert("You have entered an invalid age!");
      document.getElementById("age").focus();
      return false;
    }
    if (salary == "") {
      alert("Enter salary!");
      document.getElementById("salary").focus();
      return false;
    }
    if (salary < 0) {
      alert("You have entered an invalid salary!");
      document.getElementById("salary").focus();
      return false;
    }
    if(num.length != 10){
        alert("Enter the correct phone number")
        return false;
    }
    if (pw1 == "") {
      alert("Enter password!");
      document.getElementById("password").focus();
      return false;
    }
    if (pw1.length < 8) {
      alert("Password length must be atleast 8 characters");
      document.getElementById("password").focus();
      return false;
    }
    if (pw2 == "") {
      alert("Enter confirm password");
      document.getElementById("confirm password").focus();
      return false;
    }
    if (pw1 != pw2) {
      alert("Passwprd and confirm password do not match");
      document.getElementById("confirm password").focus();
      return false;
    } else {
      alert("You have complete your registration successfullyl");
      return true;
    }
  } 