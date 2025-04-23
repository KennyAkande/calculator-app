$(document).ready(function () {
  let expression = "";
  $(".numbers, .fa-solid").on("click", function () {
    let val = $(this).val() || $(this).text() || $(this).data("value");

    if (val === "=") {
      try {
        expression = eval(expression);
      } catch {
        expression = "Error";
      }
    } else if (val === "C") {
      expression = "";
    } else if (val === "delete") {
      expression = expression.slice(0, -1); 
    } else {
      expression += val;
    }
    $("#display").text(expression);
  });
});
