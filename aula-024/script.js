$(document).ready(() => {
  let operator1 = 0;
  let operator2 = 0;
  let operation = "";
  let result = 0;
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function showNumber(num) {
    $(`#${num}`).click(() => {
      $("#operator").append(num);
    });
  }

  $("#c").click(() => {
    $("#operator").html("");
  });

  numberArray.forEach((num) => {
    showNumber(num);
  });

  $("#addition").click(() => {
    operator1 = Number($("#operator").html());
    operation = "add";
    $("#operator").html("");
  });
  $("#subtraction").click(() => {
    operator1 = Number($("#operator").html());
    operation = "sub";
    $("#operator").html("");
  });
  $("#multiplication").click(() => {
    operator1 = Number($("#operator").html());
    operation = "multi";
    $("#operator").html("");
  });
  $("#division").click(() => {
    operator1 = Number($("#operator").html());
    operation = "div";
    $("#operator").html("");
  });

  $("#equal").click(() => {
    operator2 = Number($("#operator").html());

    if (!operator1) {
      $(".content").html("Selecione uma operação!");
    } else if (operation === "add") {
      result = operator1 + operator2;
      $(".content").html(result);
    } else if (operation === "sub") {
      result = operator1 - operator2;
      $(".content").html(result);
    } else if (operation === "multi") {
      result = operator1 * operator2;
      $(".content").html(result);
    } else if (operation === "div") {
      result = operator1 / operator2;
      $(".content").html(result);
    }
    $("#operator").html("");
  });
});
