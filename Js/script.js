$(document).ready(function () {
  let expression = "";

  $(".numbers, .fa-solid").click(function () {
    let val = $(this).val() || $(this).text();

    if (val === "=") {
      try {
        expression = eval(expression);
      } catch {
        expression = "Error";
      }
    } else if (val === "C") {
      expression = "";
    } else {
      expression += val;
    }

    $("#display").text(expression);
  });
});
