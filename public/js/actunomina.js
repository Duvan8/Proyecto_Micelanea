$(document).ready(function(){
    $('.btnact').on('click',function(){
        let btn = $('.btnact').index(this);
        alert(btn)
        let idn = $('.id_no').eq(btn);
        let don = $('.doc_usu').eq(btn);
        let vhr = $('.v_hr').eq(btn);
        let vhx = $('.v_hex').eq(btn);
        let vhn = $('.v_hn').eq(btn);
        let vhf = $('.v_hf').eq(btn);
        let vbn = $('.v_bn').eq(btn);
        let pgo = $('.pag').eq(btn);
        let mpo = $('.m_pg').eq(btn);
        
        let ii = idn.val();
        let dd = don.val();
        let hh = vhr.val();
        let xx = vhx.val();
        let nn = vhn.val();
        let ff = vhf.val();
        let bb = vbn.val();
        let pp = pgo.val();
        let mm = mpo.val();

        alert("Datos a actualizar"+ii+dd+hh+xx+nn+ff+bb+pp+mm);

        $.ajax({
            type: "POST",
            url: '/actunomina',
            data: {
                iii: ii,
                ddd: dd,
                hhh: hh,
                xxx: xx,
                nnn: nn,
                fff: ff,
                bbb: bb,
                ppp: pp,
                mmm: mm
            }
        });
    });
});