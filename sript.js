// Index banners
$("#save-imagery").click(function () {
  $("#overlay-success").toggleClass("d-flex d-none");
});

$("#back2-answer").click(function () {
  $("#overlay-error").toggleClass("d-flex d-none");
});

// Sign-up button index
$("#sign-up").click(function () {
  $("#form-toggle").toggleClass("d-none");
});

$("#sign-up").click(function () {
  $("#sign-up").hide();
});

// Error no text
$("#letsGo").click(function () {
  var emailInput = $("#emailCreate").val().length;
  console.log(emailInput);
});
