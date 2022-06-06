$(document).ready(function(){
    $('#intro').on('click',function(){
        let btn=$('.btneli').index(this);
        alert(btn)
    })
})
/* $(".intro").submit(function (e) {
  alert("bienvenido");
  e.preventDefault();
  var usuario = $.trim("#usuarios").val();
  var password = $.trim("#password").val();
  if (usuario.lengh == "" || password == "") {
    alert("campos vacion");
  }
}); */
