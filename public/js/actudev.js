$(document).ready(function(){
    $('.btnact').on('click',function(){
        let btn = $('.btnact').index(this);
        alert(btn)
        let id = $('.id').eq(btn);
        let nom = $('.nom').eq(btn);
        let cant = $('.cant').eq(btn);
        let mov = $('.motivo').eq(btn);
        let fec = $('.fecha').eq(btn);
        
        let i = id.val();
        let n = nom.val();
        let c = cant.val();
        let m = mov.val();
        let f = fec.val();

        alert("datos para actualizar"+i+n+c+m+f);

        $.ajax({
            type: "POST",
            url: '/actudev',
            data: {
                ii: i,
                nn: n,
                cc: c,
                mm: m,
                ff: f
            }
        });
    });
});