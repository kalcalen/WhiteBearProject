$("#form-toggle").toggle();

// Save button on "create-imagery"
$("#save-imagery").click(function () {
  $("#overlay-success").toggleClass("d-flex d-none");

  // Variables for "create-imagery"
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

  // Variable for creating random number
  var getNumber = Math.floor(Math.random() * 1000);
  console.log(getNumber);
  var idCreated = "" + currentMiliSeconds + getNumber;
  console.log(idCreated);

  var userObj = {
    _id: getNumber,
    imagery:
      "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG.",
    answer:
      "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
    levelNum: 1,
    successfulAttemptsNum: 0,
    createdOn: 200508232659,
    lastAttemptedOn: getFullDate,
  };

  console.log(userObj);
});

$("#back2-answer").click(function () {
  $("#overlay-error").toggleClass("d-flex d-none");
});

// Sign-up button on index
$("#sign-up").click(function () {
  $("#form-toggle").toggle();
  $("#sign-up").toggle();
});

function passwordEncrypt(password) {
  let passwordArray = password.split("");
  console.log(passwordArray);
  let passwordEncrypt = passwordArray.map((char, index) => {
    // charCodeAt is a function to get the char code
    let charCode = char.charCodeAt();
    // Iterates through code
    let newCharCode = charCode + 1;
    // Taking new char code and turning it back into its new character
    let newLetter = String.fromCharCode(newCharCode);
    // Converts upper and lower case letters to encrypted code
    if (charCode >= 65 && charCode <= 122) {
      if (char === "z") {
        newLetter = "a";
      }
      if (char === "Z") {
        newLetter = "A";
      }
    }
    return newLetter;
  });
  // Returning password as string
  return passwordEncrypt.join("");
}

// Function for "Lets Go" btn on index
$("#letsGo").click(function () {
  // Varaibles for email and password textbox
  var emailInput = $("#emailCreate").val();
  console.log(emailInput);

  var emailInputLength = emailInput.length;
  console.log(emailInputLength);

  // Variable to grab the inputed value of the password
  var passwordInput = $("#passwordCreate").val();
  console.log(passwordInput);

  var passwordInputLength = passwordInput.length;
  console.log(passwordInput);

  // Grabbing index of where @ symbol is
  var emailAtSymbol = emailInput.indexOf("@");

  // Grabbing local part of the email (front part)
  var emailLocalPart = emailInput.slice(0, emailAtSymbol);

  // Variable to see if inputs passed "checks"
  let isValid = false;

  // Variable for common passwords
  const arrPwOver8 = listOfCommonPW.filter((items) => items === passwordInput);

  // Variable for having three unique characters
  var threeUniqueChar = "";
  for (let i in emailLocalPart) {
    // Loops through and finds out how many unique characters are in the local part of the email
    // IndexOf will search for the first occurance user inputs of the string
    // -1 represents if i is not found

    if (threeUniqueChar.indexOf(emailLocalPart[i]) == -1) {
      threeUniqueChar = threeUniqueChar + emailLocalPart[i];
    }
  }

  // For email text box if empty
  if (emailInputLength === 0) {
    $("#emailError").html("Please enter a valid email address.");
    $("#emailCreate").addClass("is-invalid");
    isValid = false;
    // If users email has three of the same characters
  } else if (threeUniqueChar.length < 3) {
    $("#emailError").html("Email must be more unique");
    $("#emailCreate").addClass("is-invalid");

    // If email textbox is filled
  } else {
    $("#emailError").html("");
    $("#emailCreate").removeClass("is-invalid");
    $("#emailCreate").addClass("is-valid");
    isValid = true;
  }
  // For password box if completely empty
  if (passwordInputLength === 0) {
    $("#passwordError").html("Please enter a password.");
    $("#passwordCreate").addClass("is-invalid");
    isValid = false;

    // If password isless than 9 characters
  } else if (passwordInputLength <= 9) {
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordError").html("Password must be at least 9 characters long.");
    isValid = false;

    // If password contains characters from email
  } else if (passwordInput.includes(emailLocalPart)) {
    $("#passwordError").html(
      "Your email address cannot be used in your password."
    );
    $("#passwordCreate").addClass("is-invalid");
    isValid = false;
    console.log(emailLocalPart);
    // If users password matches any of the common passwords in "listOfCommonPW"
  } else if (arrPwOver8.length > 0) {
    $("#passwordError").html("Password is too common.");
    isValid = false;

    // If password is less than 9 characters
  } else {
    $("#passwordError").html("");
    $("#passwordCreate").removeClass("is-invalid");
    $("#passwordCreate").addClass("is-valid");
    isValid = true;
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

  // Variable for creating random number
  var getNumber = Math.floor(Math.random() * 1000);
  console.log(getNumber);
  var idCreated = "" + currentMiliSeconds + getNumber;
  console.log(idCreated);

  var userObj = {
    _id: idCreated,
    email: emailInput,
    // Calling the password encrpt function
    password: passwordEncrypt(passwordInput),
    createdOn: getFullDate,
  };
  if (isValid) {
    console.log(userObj);
  }
});

// Textbox counter for "create answer"
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
