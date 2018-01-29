(function(a){function b(b){let c=a("#tbody");for(let a,d=0;d<b.length;d++)a=`<tr id="${b[d].goodsId}" class="gray-border">
            <td width="36" height="30">
                <input type="hidden" name="productid_1"/>1
            </td>
            <td width="554">
                <div align="left">
                    <a href="javascript:;" target="_blank">${b[d].goodsDesc}</a>
                </div>
            </td>
            <td width="41">250ml</td>
            <td width="49">${b[d].beiyong10}</td>
            <td width="47" id="${b[d].goodsPrice}">${b[d].goodsPrice}</td>
            <td width="29">
                <input type="text" name="amount_1" value="${b[d].goodsCount}" maxlength="3" class="ctlAnt antn"/>
                <input type="hidden" value="1"/>
                <input type="hidden" value="25010"/>
            </td>
            <td width="59" id="subtotal">${b[d].goodsPrice}</td>
            <td width="70">
                <a href="javascript:;" id="btnfav1">转入收藏夹</a>
            </td>
            <td width="45">
                <a id="btnDel_6053672" href="javascript:;">删除</a>
            </td>
        </tr>`,c.append(a)}console.log(2),a.ajax({type:"get",url:"php/getShoppingCart.php",data:{vipName:getCookie("name")},success:function(a){b(a),console.log(a)},dataType:"json"})})(jQuery);