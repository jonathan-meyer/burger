$(function() {
  console.log("[** ready **]");

  $("#add").on("click", function() {
    console.log("add");
  });

  $("#toeat").on("click", "a", function() {
    console.log(
      "eat:",
      $(this)
        .text()
        .trim()
    );
  });

  $("#eaten").on("click", "a", function() {
    console.log(
      "eaten:",
      $(this)
        .text()
        .trim()
    );
  });
});
