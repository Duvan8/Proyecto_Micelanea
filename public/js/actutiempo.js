$(document).ready(function(){
    $('.btnact').on('click',function(){
        let btn = $('.btnact').index(this);
        alert(btn)
        let idt = $('.id_ti').eq(btn);
        let doc = $('.doc_u').eq(btn);
        let hen = $('.h_en').eq(btn);
        let hsa = $('.h_sa').eq(btn);
        let htr = $('.h_tr').eq(btn);
        let hex = $('.h_ex').eq(btn);
        
        let it = idt.val();
        let dc = doc.val();
        let he = hen.val();
        let hs = hsa.val();
        let ht = htr.val();
        let hx = hex.val();

        alert("Datos a actualizar"+it+dc+he+hs+ht+hx);

        $.ajax({
            type: "POST",
            url: '/actutiempo',
            data: {
                itt: it,
                dcc: dc,
                hee: he,
                hss: hs,
                htt: ht,
                hxx: hx,
            }
        });
    });
});