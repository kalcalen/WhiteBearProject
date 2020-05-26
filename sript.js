$("#form-toggle").toggle();
// Index banners
$("#save-imagery").click(function () {
  $("#overlay-success").toggleClass("d-flex d-none");
});

$("#back2-answer").click(function () {
  $("#overlay-error").toggleClass("d-flex d-none");
});

// Sign-up button index
$("#sign-up").click(function () {
  $("#form-toggle").toggle();
  $("#sign-up").toggle();
});

//$("#sign-up").click(function () {
//  $("#sign-up").hide();
// });

// Text input box actions
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
    // If less than 9 characters
  } else if (passwordInputLength < 9) {
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordError9C").removeClass("d-none");
    $("#passwordError").addClass("d-none");
    // If more than 9 characters
  } else {
    $("#passwordError").addClass("d-none");
    $("#passwordCreate").removeClass("is-invalid");
    $("#passwordCreate").addClass("is-valid");
    $("#passwordError9C").addClass("d-none");
  }
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
