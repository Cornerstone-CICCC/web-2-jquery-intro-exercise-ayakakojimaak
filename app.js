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
  // .newClass
  // YOUR CODE HERE
});
