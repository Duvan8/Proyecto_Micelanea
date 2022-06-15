$(document).ready(function () {
  $(".delval").on("click", function () {
    let btn = $(".delval").index(this);
    let val = $(".valor").eq(btn);
    let cod = $(".cod").eq(btn);
    let can = $(".cant").eq(btn);

    let v = val.val();
    let c = cod.val();
    let a = can.val();

    alert("datos para eliminar" + v + c+ a);

    $.ajax({
      type: "POST",
      url: "/delcarrito",
      data: {
        vv: v,
        cc: c,
        aa: a
      },
    });
  });
});
