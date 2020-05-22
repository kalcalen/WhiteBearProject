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
  var emailInput = $("#emailCreate").val().length;
  var passwordInput = $("#passwordCreate").val().length;

  // For email text box if empty
  if (emailInput == 0) {
    $("#emailError").removeClass("d-none");
    $("#emailCreate").addClass("is-invalid");
    // If filled
  } else {
    $("#emailError").addClass("d-none");
    $("#emailCreate").removeClass("is-invalid");
    $("#emailCreate").addClass("is-valid");
  }
  // For password box if completely empty
  if (passwordInput === 0) {
    $("#passwordError").removeClass("d-none");
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordErrorNineC").addClass("d-none");
    // If less than 9 characters
  } else if (passwordInput < 9) {
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordErrorNineC").removeClass("d-none");
    $("#passwordError").addClass("d-none");
    // If more than 9 characters
  } else {
    $("#passwordError").addClass("d-none");
    $("#passwordCreate").removeClass("is-invalid");
    $("#passwordCreate").addClass("is-valid");
    $("#passwordErrorNineC").addClass("d-none");
  }
});
