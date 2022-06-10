$(document).ready(function(){
    $('.btnact').on('click',function(){
        let btn = $('.btnact').index(this);
        alert(btn)
        let doc = $('.id_p').eq(btn);
        let usu = $('.c_p').eq(btn);
        let ape = $('.nom_p').eq(btn);
        let con = $('.can_p').eq(btn);
        let rol = $('.vl_p').eq(btn);
        let fec = $('.iva_p').eq(btn);
        
        let d = doc.val();
        let u = usu.val();
        let a = ape.val();
        let c = con.val();
        let r = rol.val();
        let f = fec.val();

        alert("Datos a actualizar"+d+u+a+c+r+f);

        $.ajax({
            type: "POST",
            url: '/actuproductos',
            data: {
                ddp: d,
                uup: u,
                aap: a,
                ccp: c,
                rrp: r,
                ffp: f,
            }
        });
    });
});