$(".intro").submit(function (e) {
  alert("bienvenido");
  e.preventDefault();
  var usuario = $.trim("#usuarios").val();
  var password = $.trim("#password").val();
  if (usuario.lengh == "" || password == "") {
    alert("campos vacion");
  }
});
