$(document).ready(function () {
    $(".entra").on("click", function () {
      let btn = $(".entra").index(this);
      alert(btn)
      let codigo = $(".cod").eq(btn);
      let cantidad = $(".can").eq(btn);
      let valor = $(".val").eq(btn);
      let valors = $(".vals").eq(btn);
  
      let c = codigo.val();
      let ca = cantidad.val();
      let va = valor.val();
      let vls = valors.val();
      alert("van"+c+ca+va+vls)
  
      $.ajax({
        type: "POST",
        url: "/entra",
        data: {
          cc: c,
          dd: ca,
          cl: va,
          mm: vls,
        },
      });
    });
  });
  