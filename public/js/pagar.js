$(document).ready(function () {
  $(".pag").on("click", function () {
    l = parseInt(prompt("codigo de factura"));

    $.ajax({
      type: "POST",
      url: "/pagar",
      data: {
        ll: l,
      },
    });
  });
});
