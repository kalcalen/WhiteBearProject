$(document).ready(function () {
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

  // Error no text / Success
  $("#letsGo").click(function () {
    let emailLength = $("#emailCreate").val().length;
    let passwordLength = $("#passwordCreate").val().length;

    if (emailLength === 0) {
      $("#emailCreate").addClass("is-invalid");
      $("#emailError").html("Please enter a valid email.");
    } else {
      $("#emailCreate").removeClass("is-invalid");
      $("#emailCreate").addClass("is-valid");
      $("#emailError").html("");
    }

    if (passwordLength < 9) {
      $("#passwordCreate").addClass("is-invalid");
      $("#passwordError").html("Your password must be at least 9 characters");
      if (passwordLength === 0) {
        $("#passwordCreate").addClass("is-invalid");
        $("#passwordError").html("Please enter your password");
      }
    } else {
      $("#passwordCreate").removeClass("is-invalid");
      $("#passwordCreate").addClass("is-valid");
      $("#passwordError").html("");
    }
  });
});
