$(document).ready(function () {
  $("#searchCEP").click(() => {
    $.ajax({
      url: `https://cep.awesomeapi.com.br/json/${$("#inputCEP").val()}`,
    }).done((data) => {
      console.log(data);
      $("#address").html(`Rua: ${data.address_name}`);
      $("#district").html(`Bairro: ${data.district}`);
      $("#city").html(`Cidade: ${data.city}`);
      $("#state").html(`Estado: ${data.state}`);
      $("#ddd").html(`DDD: ${data.ddd}`);

      const googleURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD9aYWJbEoJOUJ-3OE5JsemY1IotoZdyXo&q=${data.cep}&center=${data.lat},${data.lng}&zoom=18`;
      $("iframe").attr("src", googleURL);
    });
  });
});
