//console.log(1);
(function ($) {
    console.log(2);

    $.ajax({
        type:"get",
        url:"php/getShoppingCart.php",
        data:{
            "vipName":getCookie("name")
        },
        success:function (data) {
            showgoodsList(data);
            console.log(data);
        },
        dataType:"json"
    });
    
    function showgoodsList(datas) {
        let $ulbox = $("#tbody");
        for(let i = 0;i <  datas.length;i++){
            let str = `<tr id="${datas[i].goodsId}" class="gray-border">
            <td width="36" height="30">
                <input type="hidden" name="productid_1"/>1
            </td>
            <td width="554">
                <div align="left">
                    <a href="javascript:;" target="_blank">${datas[i].goodsDesc}</a>
                </div>
            </td>
            <td width="41">250ml</td>
            <td width="49">${datas[i].beiyong10}</td>
            <td width="47" id="${datas[i].goodsPrice}">${datas[i].goodsPrice}</td>
            <td width="29">
                <input type="text" name="amount_1" value="${datas[i].goodsCount}" maxlength="3" class="ctlAnt antn"/>
                <input type="hidden" value="1"/>
                <input type="hidden" value="25010"/>
            </td>
            <td width="59" id="subtotal">${datas[i].goodsPrice}</td>
            <td width="70">
                <a href="javascript:;" id="btnfav1">转入收藏夹</a>
            </td>
            <td width="45">
                <a id="btnDel_6053672" href="javascript:;">删除</a>
            </td>
        </tr>`;

            $ulbox.append(str);
        }
    }
})(jQuery);
