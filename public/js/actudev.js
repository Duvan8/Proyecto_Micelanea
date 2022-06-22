$(document).ready(function () {
  $(".vol").on("click", function () {
    let btn = $(".vol").index(this);
    alert(btn)
    let del = $(".del").eq(btn);
    let can = $(".canti").eq(btn);
    let cod = $(".codi").eq(btn);
    let fac = $(".faci").eq(btn);
    let val = $(".vali").eq(btn);

    let l = del.val();
    let c = can.val();
    let d = cod.val();
    let f = fac.val();
    let v = val.val();

    alert("devolver"+l+c+d+f+v);

    $.ajax({
      type: "POST",
      url: "/actudev",
      data: {
        ll: l,
        cc: c,
        dd: d,
        ff: f,
        vv: v,
      },
    });
  });
});
