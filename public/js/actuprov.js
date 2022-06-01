$(document).ready(function () {
  $(".btnact").on("click", function () {
    let btn = $(".btnact").index(this);
    let doc = $(".ped").eq(btn);
    let usu = $(".nom").eq(btn);
    let ape = $(".id").eq(btn);
    let con = $(".dir").eq(btn);
    let rol = $(".tel").eq(btn);

    let d = doc.val();
    let u = usu.val();
    let a = ape.val();
    let c = con.val();
    let r = rol.val();

    alert("datos para actualizar" + d + u + a + c + r);

    $.ajax({
      type: "POST",
      url: "/actuprov",
      data: {
        dd: d,
        uu: u,
        aa: a,
        cc: c,
        rr: r,
      },
    });
  });
});
