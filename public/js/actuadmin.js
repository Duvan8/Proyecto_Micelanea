$(document).ready(function(){
    $('.btnact').on('click',function(){
        let btn = $('.btnact').index(this);
        alert(btn)
        let doc = $('.doc_usu').eq(btn);
        let usu = $('.nom_usu').eq(btn);
        let ape = $('.ape').eq(btn);
        let con = $('.contraseña').eq(btn);
        let rol = $('.rol').eq(btn);
        let fecha = $('.fecha').eq(btn);
        let celular = $('.celular').eq(btn);
        let estado = $('.estado').eq(btn);
        let gmail = $('.mail').eq(btn);
        
        let d = doc.val();
        let u = usu.val();
        let a = ape.val();
        let c = con.val();
        let r = rol.val();
        let f = fecha.val();
        let t = celular.val();
        let e = estado.val();
        let m = gmail.val();

        alert("datos para actualizar"+d+u+a+c+r+f+t+e+m);

        $.ajax({
            type: "POST",
            url: '/actuadmin',
            data: {
                dd: d,
                uu: u,
                aa: a,
                cc: c,
                rr: r,
                ff: f,
                tt: t,
                ee: e,
                mm: m
            }
        });
    });
});