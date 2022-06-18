$(document).ready(function () {
  $(".btnnar").on("click", function () {
    alert("Borrado");
    let btn = $(".btnnar").index(this);
    let codigo = $(".codi").eq(btn);

    let c = codigo.val();
    alert(c);
    $.ajax({
      type: "POST",
      url: "/eliminarent",
      data: {
        dd: c,
      },
    });
  });
});
