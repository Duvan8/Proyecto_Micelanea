$(document).ready(function () {
  $(".agregar").on("click", function () {
    let btn = $(".agregar").index(this);
    let codi = $(".nose").eq(btn);
    let cant = $(".can").eq(btn);
    let valr = $(".val").eq(btn);

    let c = codi.val();
    let a = cant.val();
    let v = valr.val();
    let m = a * v;

    alert("datos para insertar" + c + a + v + m);

    $.ajax({
      type: "POST",
      url: "/carrito",
      data: {
        cc: c,
        aa: a,
        mm: m,
        ii: m
      },
    });
  });
});
