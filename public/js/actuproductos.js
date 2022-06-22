$(document).ready(function () {
  $(".btnact").on("click", function () {
    let btn = $(".btnact").index(this);
    alert(btn);
    let cod = $(".codp").eq(btn);
    let nom = $(".nom_p").eq(btn);
    let can = $(".can_p").eq(btn);
    let val = $(".vl_p").eq(btn);
    let iva = $(".iva_p").eq(btn);

    let c = cod.val();
    let n = nom.val();
    let t = can.val();
    let v = val.val();
    let i = iva.val();

    alert("Datos a actualizar" + c + n + t + v + i);

    $.ajax({
      type: "POST",
      url: "/actuproductos",
      data: {
        cc: c,
        nn: n,
        tt: t,
        vv: v,
        ii: i,
      },
    });
  });
});
