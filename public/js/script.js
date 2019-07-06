$(function() {
  function add(burger) {
    $("#toeat").append(
      $("<button>")
        .addClass(
          "list-group-item list-group-item-action list-group-item-success"
        )
        .attr("title", "click to eat me.")
        .data("db-id", burger.id)
        .text(burger.burger_name)
    );
  }

  function eat(burger) {
    $("#eaten").append(
      $("<button>")
        .addClass(
          "list-group-item list-group-item-action list-group-item-danger"
        )
        .attr("title", "click to trash me.")
        .data("db-id", burger.id)
        .text(burger.burger_name)
    );
  }

  $("form").on("submit", function(e) {
    e.preventDefault();

    const burger = $(this)
      .serializeArray()
      .reduce((p, c) => Object.assign(p, { [c.name]: c.value.trim() }), {});

    $.post({
      url: "/api/burgers",
      data: JSON.stringify(burger),
      contentType: "application/json"
    })
      .then(burger => {
        add(burger);
        $("form").trigger("reset");
        $("#burger-count").text(parseInt($("#burger-count").text()) + 1);
      })
      .catch(console.error);
  });

  $("#toeat").on("click", "button", function() {
    var burger = {
      id: $(this).data("db-id"),
      burger_name: $(this).text()
    };

    $.ajax({
      method: "put",
      url: `/api/burgers/${burger.id}`,
      data: JSON.stringify({ devoured: true }),
      contentType: "application/json"
    })
      .then(data => {
        eat(burger);
        $(this).remove();
      })
      .catch(console.error);
  });

  $("#eaten").on("click", "button", function() {
    var burger = {
      id: $(this).data("db-id"),
      burger_name: $(this).text()
    };

    $.ajax({
      method: "delete",
      url: `/api/burgers/${burger.id}`
    })
      .then(data => {
        $(this).remove();
      })
      .catch(console.error);
  });

  toeat.map(add);
  eaten.map(eat);
});
