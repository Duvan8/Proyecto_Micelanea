$(document).ready(function () {
  $(".pag").on("click", function () {
    l = parseInt(prompt("codigo de factura"));

    let hoy = new Date();

    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let agnio = hoy.getFullYear();

    dia = ("0" + dia).slice(-2);
    mes = ("0" + mes).slice(-2);

    // AAAA-MM-DD:
    let formato1 = `${dia}/${mes}/${agnio}`;

    $.ajax({
      type: "POST",
      url: "/pagar",
      data: {
        ll: l,
        pp: formato1,
      },
    });
  });
});
