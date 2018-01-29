(function ($) {
    // $.noConflict();

    $.ajax({
        type:"get",
        url:"php/getGoodsList.php",
        success:function (data) {
            showgoodsList(data);
            var oGoodsDiv = document.getElementsByClassName('detail_demo');
            // console.log(oGoodsDiv);
            for(var i = 0;i < oGoodsDiv.length;i++){
                oGoodsDiv[i].onclick = function(){
                    console.log(1)
                    var iId = this.getAttribute('data-id');

                    var oGoods = {
                        id : iId
                    }

                    setCookie('goods',JSON.stringify(oGoods),7,'/');
                }
            }
        },
        dataType:"json"
    });

    function showgoodsList(datas) {
        let $ulbox = $("#ulbox");
        for(let i=0;i<datas.length;i++){
            let str = "<div class='detail_demo' data-id="+datas[i].goodsId+"><a target='_blank' class='a' href='goods.html'><img src='"+datas[i].goodsImg+"' width='200' height='200' /></a><a href='javascript:;' class='word'>"+datas[i].goodsDesc+"</a><i>￥"+datas[i].goodsPrice+"<span>"+datas[i].beiyong1+"</span></i><p><a class='red' href='javascript:;'>"+datas[i].beiyong2+"</a><a class='nothing' href='javascript:;'>"+datas[i].beiyong3+"</a></p></div>";

            $ulbox.append(str);
            console.log('a');
        }
    }

})(jQuery);