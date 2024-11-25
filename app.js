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

  // YOUR CODE HERE
});
