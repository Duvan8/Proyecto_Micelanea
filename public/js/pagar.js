$(document).ready(function () {
    $(".pag").on("click", function () {
      let btn = $(".pag").index(this);
      l = parseInt(prompt("codigo de factura"));
      alert(l)
  
      $.ajax({
        type: "POST",
        url: "/pagar",
        data: {
          ll: l,
        },
      });
    });
  });
  