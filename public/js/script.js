$(function() {
  console.log("[** ready **]");

  $("form").on("submit", function(e) {
    e.preventDefault();

    console.log(
      "add:",
      $(this)
        .serializeArray()
        .reduce((p, c) => Object.assign(p, { [c.name]: c.value.trim() }), {})
    );
  });

  $("#toeat").on("click", "button", function() {
    console.log(
      "eat:",
      $(this)
        .text()
        .trim()
    );
  });

  $("#eaten").on("click", "button", function() {
    console.log(
      "trash:",
      $(this)
        .text()
        .trim()
    );
  });
});
