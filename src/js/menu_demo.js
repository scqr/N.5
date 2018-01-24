(function ($) {
    // $.noConflict();

    $.ajax({
        type:"get",
        url:"php/getGoodsList.php",
        success:function (data) {
            showgoodsList(data);
        },
        dataType:"json"
    });
})(jQuery);

function showgoodsList(datas) {
    let $ulbox = document.getElementById("ulbox");
    for(let i=0;i<datas.length;i++){
        //1、创建li
        // let str="<li><p>商品编号："+datas[i].goodsId+"</p>" +
        //     "<p>商品名称："+datas[i].goodsName+"</p>" +
        //     "<p>商品价格："+datas[i].goodsPrice+"</p>" +
        //     "<p>商品图片：<img style='width:100px' src='"+datas[i].goodsImg+"'/></p></li>";
        let str = "<div class='detail_demo'><a href='javascript:;'><img src='"+datas[i].goodsImg+"' width='200' height='200' /></a>"+
        "<a href='javascript:;' class='word'>"+datas[i].goodsDesc+"</a>"+
        "<i>"+datas[i].goodsPrice+"<span>"+datas[i].beiyong1+"</span></i>"+
        "<p><a class='red' href='javascript:;'>"+datas[i].beiyong2+"</a>"+
        "<a class='nothing' href='javascript:;'>"+datas[i].beiyong3+"</a></p></div>";

        $ulbox.append(str);
    }
}