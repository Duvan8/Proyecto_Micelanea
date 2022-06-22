$(document).ready(function () {
  $("#btnzar").on("click", function () {
    let btn = $("#btnzar").index(this);
    alert(btn)
    let codigo = $(".codi").eq(btn);
    let cantidad = $(".cant").eq(btn);
    let valor = $(".valo").eq(btn);
    let valors = $(".valrs").eq(btn);

    let c = codigo.val();
    let ca = cantidad.val();
    let va = valor.val();
    let vls = valors.val();
    alert("llegan"+c+ca+va+vls)

    $.ajax({
      type: "POST",
      url: "/actentrada",
      data: {
        cc: c,
        dd: ca,
        cl: va,
        mm: vls,
      },
    });
  });
});
