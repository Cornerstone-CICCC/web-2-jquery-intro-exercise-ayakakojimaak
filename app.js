$(function () {
  $("#toggleButton").on("click", () => {
    if ($("#myParagraph").css("display") === "block") {
      $("#myParagraph").hide();
    } else {
      $("#myParagraph").show();
    }
  });

  $("#toggleButton").on("colorButton", () => {});
  // YOUR CODE HERE
});
