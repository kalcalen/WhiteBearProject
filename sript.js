$("#form-toggle").toggle();

// Save button on create-imagery
$("#save-imagery").click(function () {
  $("#overlay-success").toggleClass("d-flex d-none");
});

$("#back2-answer").click(function () {
  $("#overlay-error").toggleClass("d-flex d-none");
});

// Sign-up button on index
$("#sign-up").click(function () {
  $("#form-toggle").toggle();
  $("#sign-up").toggle();
});

// Function for "Lets Go" btn on index
$("#letsGo").click(function () {
  // Varaibles for email and password textbox
  var emailInput = $("#emailCreate").val();
  console.log(emailInput);

  var emailInputLength = emailInput.length;
  console.log(emailInputLength);

  var passwordInput = $("#passwordCreate").val();
  console.log(passwordInput);

  var passwordInputLength = passwordInput.length;
  console.log(passwordInput);

  // Grabbing index of where @ symbol is
  var emailAtSymbol = emailInput.indexOf("@");

  // Grabbing local part of the email (front part)
  var emailLocalPart = emailInput.slice(0, emailAtSymbol);

  // For email text box if empty
  if (emailInputLength === 0) {
    $("#emailError").removeClass("d-none");
    $("#emailCreate").addClass("is-invalid");
    // If filled
  } else {
    $("#emailError").addClass("d-none");
    $("#emailCreate").removeClass("is-invalid");
    $("#emailCreate").addClass("is-valid");
  }
  // For password box if completely empty
  if (passwordInputLength === 0) {
    $("#passwordError").removeClass("d-none");
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordError9C").addClass("d-none");
    // If password isless than 9 characters
  } else if (passwordInputLength < 9) {
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordError9C").removeClass("d-none");
    $("#passwordError").addClass("d-none");

    // If password is more than 9 characters
  } else {
    $("#passwordError").addClass("d-none");
    $("#passwordCreate").removeClass("is-invalid");
    $("#passwordCreate").addClass("is-valid");
    $("#passwordError9C").addClass("d-none");
  }
  if (passwordInput.indexOf(emailLocalPart) > -1) {
    $("#passwordErrorEmVal").removeClass("d-none");
    $("#passwordCreate").addClass("is-invalid");
  } else if (passwordInputLength < 9) {
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordError9C").removeClass("d-none");
    $("#passwordError").addClass("d-none");
    $("#passwordErrorEmVal").addClass("d-none");
  } else {
    $("#passwordCreate").removeClass("is-invalid");
    $("#passwordErrorEmVal").addClass("d-none");
    $("#passwordError9C").addClass("d-none");
  }

  // Variables for index Sign-Up

  let currentDate = new Date();
  console.log("current date", currentDate.toString());
  let currentYear = currentDate.getYear() - 100;
  console.log("current year", currentYear);
  let currentMonth = currentDate.getMonth() + 1;
  console.log("current month", currentMonth);
  let currentDay = currentDate.getDate();
  console.log("current day", currentDay);
  let currentHour = currentDate.getHours();
  console.log("current hour", currentHour);
  let currentMinutes = currentDate.getMinutes();
  console.log("current minutes", currentMinutes);
  let currentSeconds = currentDate.getSeconds();
  console.log("current senconds", currentSeconds);
  let currentMiliSeconds = currentDate.getMilliseconds();
  console.log("current miliseconds", currentMiliSeconds);

  let getFullDate =
    addTwoPadding(currentYear) +
    addTwoPadding(currentMonth) +
    addTwoPadding(currentDay) +
    addTwoPadding(currentHour) +
    addTwoPadding(currentMinutes) +
    addThreePadding(currentMiliSeconds) +
    addTwoPadding(currentSeconds);
  console.log("Full date", getFullDate);

  // Function for making a number 3 digits
  function addThreePadding(num) {
    var numAsString = String(num);
    if (numAsString.length === 1) {
      return "00" + numAsString; // 4 returns "004"
    } else if (numAsString.length === 2) {
      return "0" + numAsString; // 44 returns "044"
    } else {
      return numAsString;
    }
  }

  // Function for making a number 2 digits
  function addTwoPadding(num) {
    var numAsString = String(num);
    if (numAsString.length === 1) {
      return "0" + numAsString; // 4 returns "04"
    } else {
      return numAsString;
    }
  }

  // Variable for creating randonm number
  var getNumber = Math.floor(Math.random() * 1000);
  console.log(getNumber);
  var idCreated = "" + currentMiliSeconds + getNumber;
  console.log(idCreated);

  var userObj = {
    _id: getNumber,
    email: emailInput,
    password: passwordInput,
    createdOn: getFullDate,
  };

  console.log(userObj);
});

// Added keyup and length to textbox to count characters
$("#textBox").keyup(function () {
  //Added .text to manipulate 0 on html
  $("#count").text($("#textBox").val().length);
  // Variable to store information in textbox
  var textBox = $("#textBox").val().length;
  // Enables red text when characters over 240
  if (textBox > 240) {
    $("#count2").addClass("text-danger");
  } else {
    $("#count2").removeClass("text-danger");
  }
  // disables button if less than 0, more than 240 characters
  if (textBox > 0 && textBox < 240) {
    $("#nextBcreate").removeClass("disabled");
    // enabes button when characters inputed
  } else {
    $("#nextBcreate").addClass("disabled");
  }
});
