{
  /* <div class="items">
  <div class="itemKey">
    <h3>Nome</h3>
  </div>
  <div class="itemContent">
    <h3>Dólar Americano</h3>
  </div>
</div>; */
}

$(document).ready(function () {
  $.ajax({ url: "https://economia.awesomeapi.com.br/json/all" }).done(
    (data) => {
      const coins = Object.entries(data);

      coins.forEach((coin) => [
        $("select").append(`<option value="${coin[0]}">${coin[0]}</option>`),
      ]);

      $("#search").click(() => {
        coins.forEach((coin) => {
          if (coin[0] == $("select").val()) {
            $("section").html(`<div class="items">
                                  <div class="itemKey">
                                    <h3>Nome</h3>
                                  </div>
                                  <div class="itemContent">
                                    <h3>${coin[1].name.split("/")[0]}</h3>
                                  </div>
                                </div>
                                <div class="items">
                                  <div class="itemKey">
                                    <h3>Valor de compra</h3>
                                  </div>
                                  <div class="itemContent">
                                    <h3>${coin[1].bid}</h3>
                                  </div>
                                </div>
                                <div class="items">
                                  <div class="itemKey">
                                    <h3>Valor de venda</h3>
                                  </div>
                                  <div class="itemContent">
                                    <h3>${coin[1].ask}</h3>
                                  </div>
                                </div>`);
          }
        });
      });
    }
  );
});
