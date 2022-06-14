$(document).ready(function () {
    $(".btnact").on("click", function () {
      let btn = $(".btnact").index(this);
      let co = $(".cod").eq(btn);
      let doc = $(".doc").eq(btn);
      let cod = $(".cfac").eq(btn);
      let fe = $(".fec").eq(btn);
      let can = $(".can").eq(btn);
      let val = $(".val").eq(btn);
  
      let c = co.val();
      let d = doc.val();
      let o = cod.val();
      let f = fe.val();
      let ca = can.val();
      let v = val.val();
  
      alert("datos para actualizar" + c + d + o + f + ca + v);
  
      $.ajax({
        type: "POST",
        url: "/actualizarfac",
        data: {
          dd: c,
          uu: d,
          aa: o,
          cc: f,
          rr: ca,
          vv: v
        },
      });
    });
  });
  