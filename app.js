$(function () {
  $("#toggleButton").on("click", () => {
    if ($("#myParagraph").css("display") === "block") {
      $("#myParagraph").hide();
    } else {
      $("#myParagraph").show();
    }
  });

  $("#colorButton").on("click", () => {
    $("#colorDiv").css({ "background-color": "yellow" });
  });

  $("#addClassButton,#removeClassButton").on("click", () => {
    if ($("#classDiv").hasClass("newClass")) {
      $("#classDiv").removeClass("newClass");
    } else {
      $("#classDiv").addClass("newClass");
    }
  });

  $("#fadeInButton,#fadeOutButton").on("click", () => {
    if ($("#fadeDiv").css("display") === "block") {
      $("#fadeDiv").fadeOut();
    } else {
      $("#fadeDiv").fadeIn();
    }
  });

  $("#slideUpButton,#slideDownButton").on("click", () => {
    if ($("#slideDiv").css("display") === "block") {
      $("#slideDiv").slideUp();
    } else {
      $("#slideDiv").slideDown();
    }
  });

  // YOUR CODE HERE
});
