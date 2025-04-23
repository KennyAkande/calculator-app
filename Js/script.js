$(document).ready(function () {
  let expression = "";

  // Handle clicking numbers and operators
  $('.numbers, .fa-plus, .fa-minus, .fa-divide, .fa-xmark, .fa-percent, .fa-dot').on('click', function () {
    let value = $(this).text();
    expression += value;
    $('#display').text(expression);
  });

  // Equals (=)
  $('.fa-equals').on('click', function () {
    try {
      let result = eval(expression.replace("×", "*").replace("÷", "/")); // handle custom symbols
      $('#display').text(result);
      expression = result.toString();
    } catch {
      $('#display').text("Error");
      expression = "";
    }
  });

  // Clear (C)
  $('.fa-c').on('click', function () {
    expression = "";
    $('#display').text("");
  });

  // Backspace (←)
  $('.fa-delete-left').on('click', function () {
    expression = expression.slice(0, -1);
    $('#display').text(expression);
  });
});
