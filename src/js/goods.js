$(function ($) {
    $.noConflict();

    //菜单栏
    $('#left-catnav ul').hide();
    $('#left-catnav h3').click(function () {
        $(this).children('.q').toggleClass('open');
        $(this).next().stop().toggle(200);
    });

    //放大镜获取
    $.ajax({
        type:"get",
        url:"php/getGoodsInfo.php",
        data:{"goodsId":JSON.parse(getCookie("goods")).id},
        success:function (data) {
            showgoodsList(data);
            console.log(getCookie("goods"));
        },
        dataType:"json"
    });
    
    function showgoodsList(datas) {
        let $ulbox = $("#enlarge-bag");
        // for(let i=0;i<datas.length;i++){
            let str = `<div class="enlarge_left" id="enlarge-box">
            <div id="small-box" class="normal">
                <img class="focus" src="${datas.beiyong4}" width="72" height="72" />
                <img src="${datas.beiyong5}" width="72" height="72" />
                <img src="${datas.beiyong6}" width="72" height="72" />
            </div>
            <div class="enlarge_box" id="middle-box">
                <div class="shadow" id="shadow-s"></div>
                <img src="${datas.beiyong4}" width="350" height="350" id="middle-img" />
            </div>
            <div class="enlarge_big" id="large-box" style="display:none;">
                <img src="${datas.beiyong4}" width="800" height="800" id="large-img" />
            </div>
            <p class="datu">
                <img src="img/datu.jpg" width="15" height="15"/>
                <a href="javascript:;" target="_blank">点击看大图</a>
            </p>
            <div class="spell">
                <span class="shareTxt">分享到：</span>
                <a class="L" href="javascript:;" title="推荐到新浪微博">sina</a>
                <a class="K" href="javascript:;" title="推荐到腾讯微博">qzone</a>
                <a class="J" href="javascript:;" title="推荐到人人">renren</a>
                <a class="H" href="javascript:;" title="推荐到开心网">kaixing</a>
                <a class="G" href="javascript:;" title="推荐到豆瓣">douban</a>
                <a class="F" href="javascript:;" title="分享到QQ空间">msn</a>
            </div>
        </div>
        <div class="enlarge_right">
            <h2>
                ${datas.goodsDesc}
                <span class="subTit">${datas.beiyong7}</span>
            </h2>
            <div class="cppro">
                <div class="pro_name">英文名称：</div>
                <div class="n_neir">${datas.beiyong8}</div>
                <div class="pro_name">商品编号：</div><div class="n_neir">${datas.beiyong9}</div>
                <div class="pro_name">No5&nbsp;&nbsp;&nbsp;价：</div>
                <div class="n_neir">
                    <span class="prodRedTxt price" style="margin-left:0px;">￥${datas.goodsPrice}</span>
                    <span class="prodTxt1">市场价： ￥${datas.beiyong10}</span>
                    <span id="rebate" class="prodTxt1">折扣：${datas.beiyong1}</span>
                </div>
                <div id="sPriNM" class="pro_name" style="display: none;">：</div>
                <div id="sPriVL" class="n_neir" style="display: none;">￥</div>
                <div class="clear"></div>
            </div>
            <div class="cppr" style="padding-bottom:0px;">
                <div class="pro_name">所属品牌：</div>
                <div class="n_neir">
                    <a href="javascript:;">Clinique 倩碧</a> → <a href="javascript:;">三步曲系列</a>
                </div>
                <div class="pro_name">所属分类：</div>
                <div class="n_neir">
                    <a href="javascript:;">面部护理</a> → <a href="javascript:;">洁肤步骤</a> → <a href="javascript:;">洁面皂</a>
                </div>
                <div class="pro_name">用户评分：</div>
                <div class="n_neir">
                    <div id="sp_xin_box">
                        <div>
                            <div class="sp_xin_line" style="width:100%;"></div>
                        </div>
                        <div class="star_rank"></div>
                    </div>
                    <div class="sp_user_count">
                        <a href="javascript:void(0);" onclick="javascript:jump(0);">已有<span class="magenta">14</span>条评论</a>
                    </div>
                </div>
               <div class="pro_name">运费说明：</div>
                <div class="n_neir">
                    <span class="prodRedTxt" style="margin-right:30px;">购物满80元免费快递</span>
                    <a href="javascript:;" target="_blank">查看运费详情</a>
                </div>
                <div class="pro_name">消费保障：</div>
                <div class="n_neir">
                    <span class="prodTxt2" style="margin-left:0px;">
                        <img src="img/ico01.jpg" width="18" height="15">
                    </span>品质承诺
                    <span class="prodTxt2">
                        <img src="img/ico02.jpg" width="23" height="15">
                    </span>货到付款
                    <span class="prodTxt2">
                        <img src="img/ico03.jpg" width="18" height="15">
                    </span>不满意退货
                    <span class="prodTxt2">
                        <img src="img/ico04.jpg" width="15" height="15">
                    </span>可靠包装
                </div>
                <div class="clear"></div>
            </div>
            <div id="boxBuy">
                <span>我要买：
                    <img src="img/reduce.jpg" width="13" height="13" style="vertical-align: middle;">
                    <input type="text" id="buyAnt" value="1" class="textinput" maxlength="3">
                    <img src="img/add.jpg" width="13" height="13" style="vertical-align: middle;">
                </span>
                <button id="btnBuy" type="button" class="prodBtn1 btnBuy"></button>
                <button type="button" id="btnFav" class="prodBtn1 btnFav">
                    <input type="hidden">
                </button>
                <div class="clear"></div>
            </div>
            <span id="favSuc">收藏成功 
                <a href="javascript:;" target="_blank">[查看收藏夹]</a>
            </span>
            <div class="cuxiao"><p></p></div>
            <div class="clear"></div>
        </div>
        <div class="clrH2">&nbsp;</div>
        <div class="bottom">
            <div class="p02_l">
                <div id="box_bjtj" class="box_tj" style="margin-top:0px;">
                    <div class="title_tj">编辑推荐</div>
                    <div class="good_tj">
                        <div class="imgbox">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_0.jpg" width="100" height="100" alt="Estee Lauder 雅诗兰黛鲜养焕亮凝霜(红石榴YR29,中样) 15ml">
                            </a>
                        </div>
                        <div class="textbox">
                            <p class="proname">
                                <a href="javascript:;" target="_blank">Estee Lauder 雅诗兰黛鲜养焕亮凝霜(红石榴YR29,中样) 15ml</a>
                            </p>
                            <p><strong class="prodRedTxt">￥98.00</strong></p>
                        </div>
                    </div>
                    <div class="good_tj">
                        <div class="imgbox">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_1.jpg" width="100" height="100" alt="Lancome 兰蔻新立体塑颜紧致眼部精华乳/眼霜(小样) 5ml">
                            </a>
                        </div>
                        <div class="textbox">
                            <p class="proname">
                                <a href="javascript:;" target="_blank">Lancome 兰蔻新立体塑颜紧致眼部精华乳/眼霜(小样) 5ml</a>
                            </p>
                            <p><strong class="prodRedTxt">￥48.00</strong></p>
                        </div>
                    </div>
                    <div class="good_tj" style="border-bottom:none;">
                        <div class="imgbox">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_2.jpg" width="100" height="100" alt="Clinique 倩碧匀净卓研淡斑精华露(中样) 15ml">
                            </a>
                        </div>
                        <div class="textbox">
                            <p class="proname">
                                <a href="javascript:;" target="_blank">Clinique 倩碧匀净卓研淡斑精华露(中样) 15ml</a>
                            </p>
                            <p><strong class="prodRedTxt">￥65.00</strong></p>
                        </div>
                    </div>
                </div>
                <div id="box_goum" class="box_tj">
                    <div class="title_tj">购买此商品的顾客还购买过</div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_3.jpg" width="72" height="72" alt="Clinique 倩碧眼部护理水凝霜(水磁场眼霜61EP) 15ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Clinique 倩碧眼部护理水凝霜(水磁场眼霜61EP) 15ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥268.00</strong></p>
                        </div
                        ><div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_4.jpg" width="72" height="72" alt="Estee Lauder 雅诗兰黛白金级密集滋润护手霜 30ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Estee Lauder 雅诗兰黛白金级密集滋润护手霜 30ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥68.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_5.jpg" width="72" height="72" alt="Clinique 倩碧保湿洁肤水2号 400ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Clinique 倩碧保湿洁肤水2号 400ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥218.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx" style="border-bottom:none;">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_6.jpg" width="72" height="72" alt="[Fancl 无添加]水盈补湿液(滋润176594) 30ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">[Fancl 无添加]水盈补湿液(滋润176594) 30ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥160.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div id="box_tlrx" class="box_tj" style="display:none;">
                    <div class="title_tj">同类热销产品</div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_h_0.jpg" width="72" height="72" alt="Vichy 薇姿净颜无瑕祛痘保湿洁面啫喱/洗面奶 200ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Vichy 薇姿净颜无瑕祛痘保湿洁面啫喱/洗面奶 200ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥129.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_h_1.jpg" width="72" height="72" alt="Biotherm 碧欧泉新活泉润透(活泉爽肤)洁面乳/洗面奶(052671) 150ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Biotherm 碧欧泉新活泉润透(活泉爽肤)洁面乳/洗面奶(052671) 150ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥148.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_h_2.jpg" width="72" height="72" alt="Mary Kay 玫琳凯中性洗面乳/洗面奶(2#配方) 100ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Mary Kay 玫琳凯中性洗面乳/洗面奶(2#配方) 100ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥84.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_h_3.jpg" width="72" height="72" alt="THE FACE SHOP 菲诗小铺柠檬美白控油洗面奶(401066) 170ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">THE FACE SHOP 菲诗小铺柠檬美白控油洗面奶(401066) 170ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥29.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx" style="border-bottom:none;">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_h_4.jpg" width="72" height="72" alt="佰草集 平衡洁面乳/洗面奶 100ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">佰草集 平衡洁面乳/洗面奶 100ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥44.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div id="box_tprx" class="box_tj">
                    <div class="title_tj">同品牌热销产品</div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript;;" target="_blank">
                                <img src="img/prod_s_0.jpg" width="72" height="72" alt="Clinique 倩碧润肤乳-清爽型啫喱配方(无油黄油) 125ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript;;" target="_blank">Clinique 倩碧润肤乳-清爽型啫喱配方(无油黄油) 125ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥198.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_s_1.jpg" width="72" height="72" alt="Clinique 倩碧温和液体洁面皂/洗面奶(适合混合偏干性肌肤6F37) 200ml">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Clinique 倩碧温和液体洁面皂/洗面奶(适合混合偏干性肌肤6F37) 200ml</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥135.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_s_2.jpg" width="72" height="72" alt="Clinique 倩碧水嫩保湿润肤霜(水磁场面霜小样6LKK-40)3个装 7ml*3">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Clinique 倩碧水嫩保湿润肤霜(水磁场面霜小样6LKK-40)3个装 7ml*3</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥63.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_s_3.jpg" width="72" height="72" alt="Clinique 倩碧宛若新生光采面膜/发光面膜(2支装) 15ml*2">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Clinique 倩碧宛若新生光采面膜/发光面膜(2支装) 15ml*2</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥66.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="good_tj good_rx" style="border-bottom:none;">
                        <div class="tl_img">
                            <a href="javascript:;" target="_blank">
                                <img src="img/prod_s_4.jpg" width="72" height="72" alt="Clinique 倩碧水洗卸妆泡沫霜(中样，2个装) 30ml*2">
                            </a>
                        </div>
                        <div class="textbox tl_text">
                            <p class="rx_name">
                                <a href="javascript:;" target="_blank">Clinique 倩碧水洗卸妆泡沫霜(中样，2个装) 30ml*2</a>
                            </p>
                            <p class="rx_price"><strong class="prodRedTxt">￥50.00</strong></p>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div id="box_zjll" class="box_tj">
                    <div class="title_tj">最近浏览产品</div>
                    <div class="clear"></div>
                </div>
                <div id="box_rdzx" class="box_tj">
                    <div class="title_tj">热点资讯</div>
                    <div class="zixun">
                        <ul>
                            <li>
                                <span>
                                    <a href="/beautyinfo/topics/12159.html" target="_blank" title="一步错 步步错 三招优选冬季洁面">·一步错 步步错 三招优选冬季洁面</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="/beautyinfo/topics/12090.html" target="_blank" title="天天洗脸谁不会？洁面产品说你很傻很天真">·天天洗脸谁不会？洁面产品说你很傻很天真</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="/beautyinfo/topics/11881.html" target="_blank" title="炎炎夏日拒绝玉面成油田 体验清爽透肌">·炎炎夏日拒绝玉面成油田 体验清爽透肌</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="/beautyinfo/topics/11847.html" target="_blank" title="选好洁面神器 仲夏问题肌不马虎">·选好洁面神器 仲夏问题肌不马虎</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="/beautyinfo/topics/19.html" target="_blank" title="预防皱纹每天必做6件事">·预防皱纹每天必做6件事</a>
                                </span>
                            </li>
                            <li style="border-bottom:none;">
                                <span>
                                    <a href="/beautyinfo/topics/18.html" target="_blank" title="按压穴位消除黑眼圈">·按压穴位消除黑眼圈</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="sticPic1">
                    <a href="javascript:;" target="_blank">
                        <img src="img/pic.jpg" alt="" width="200" height="291">
                    </a>
                </div>
            </div>
            <div class="p02_r">
                <input type="hidden" id="grpAnt" value="2">
                <div id="groupBox" class="group">
                    <div class="title_tj grpTitle">
                        <span class="more">
                            <label class="">查看已选搭配商品</label>
                            <label class="btnDis">查看所有搭配商品</label>
                        </span>推荐搭配商品
                    </div>
                    <div class="goodbox boxFirst">
                        <div class="goodimg">
                            <img src="img/prod_r_0.jpg" width="100" height="100" title="Clinique 倩碧清爽液体洁面皂/洗面奶(混合偏油至油性肌肤6F39) 200ml">
                        </div>
                        <p class="goodname">Clinique 倩碧清爽液体洁面皂/洗面奶(混合偏油至油性肌肤6F39) 200ml</p>
                        <p class="goodprice"><strong class="prodRedTxt">￥145.00</strong></p>
                    </div>
                    <div class="good_add"></div>
                    <div class="goods_img">
                        <div id="barSL" class="barSL gryBarSL"></div>
                        <div id="groupFrame">
                            <div id="goodsGroup" style="width: 264px; margin-left: 0px;">
                                <div class="goodbox imgLoad31">
                                    <div class="goodimg">
                                        <a href="javascript:;" target="_blank">
                                            <img src="img/prod_r_1.jpg" width="100" height="100">
                                        </a>
                                    </div>
                                    <p class="goodname">
                                        <a href="javascript:;" target="_blank">Clinique 倩碧润肤乳-清爽型啫喱配方(无油黄油) 125ml</a>
                                    </p>
                                    <p class="goodprice">
                                        <input type="checkbox" value="10907" class="checkbox">
                                        <input type="hidden" value="295">
                                        <input type="hidden" value="198">
                                        <strong class="prodRedTxt">￥198.00</strong>
                                    </p>
                                </div>
                                <div class="goodbox imgLoad31">
                                    <div class="goodimg">
                                        <a href="javascript:;" target="_blank">
                                            <img src="img/prod_r_2.jpg" width="100" height="100">
                                        </a>
                                    </div>
                                    <p class="goodname">
                                        <a href="javascript:;" target="_blank">Clinique 倩碧毛孔细致精华露(43040)  清仓特价 30ml</a>
                                    </p>
                                    <p class="goodprice">
                                        <input type="checkbox" value="26995" class="checkbox">
                                        <input type="hidden" value="420">
                                        <input type="hidden" value="328">
                                        <strong class="prodRedTxt">￥328.00</strong>
                                    </p>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div id="barSR" class="barSR gryBarSR"></div>
                    </div>
                    <div class="goods_price">
                        <p id="grpSelLne"><strong>已选择<span class="prodRedTxt">0</span>个搭配商品</strong></p>
                        <p id="grpMrCnt">市场总价：￥185.00</p>
                        <p id="grpPrCnt">No5&nbsp;&nbsp;&nbsp;价：<strong class="prodRedTxt">￥145</strong></p>
                        <button id="btnGrpBuy"></button>
                        <div class="grpErr">请您至少选择一个商品！</div>
                    </div>
                </div>
                <div id="tabBar" style="position: static; top: 0px;">
                    <ul>
                        <div class="addche">
                            <button onclick="javascript:atc(2593);" style="visibility: visible;"></button>
                        </div>
                        <li id="pTab_0" class="tabson">
                            <a href="javascript:void(0);" style="color:#ffffff;">商品详情</a>
                        </li>
                        <li id="pTab_1">
                            <a href="javascript:void(0);" style="color: rgb(0, 0, 0);">购买评论</a>
                        </li>
                        <li id="pTab_2">
                            <a href="javascript:void(0);" style="color: rgb(0, 0, 0);">商品咨询</a>
                        </li>
                        <li id="pTab_3">
                            <a href="javascript:void(0);" style="color: rgb(0, 0, 0);">购物须知</a>
                        </li>
                    </ul>
                </div>
                <div id="tabBarR" style="display: none;"></div>
                <div id="con_two_1">
                    <div id="tab_box_0">
                        <div class="exp_img">
                            <img src="img/big_0.jpg" rz="rz">
                        </div>
                        <div class="exp_text">
                            <h3>产品属性<span class="deTxt">PROPERTY</span></h3>
                            <div class="clrH10"></div>
                            <p class="tzbox xiangxi">产地：<span elem-type="prop-val" node-id="18" parent-id="1">英国</span>&nbsp;</p>
                            <p class="tzbox xiangxi">包装：<span elem-type="prop-val" node-id="32" parent-id="2">无外盒无密封</span>&nbsp;</p>
                            <p class="tzbox xiangxi">规格：<span elem-type="prop-val" node-id="153" parent-id="90">正装</span>&nbsp;</p>
                            <p class="tzbox xiangxi">功效：<span elem-type="prop-val" node-id="177" parent-id="160">控油祛痘</span>&nbsp;</p>
                            <p class="tzbox xiangxi">肤质：<span elem-type="prop-val" node-id="143" parent-id="137">混合偏油性</span>&nbsp;<span elem-type="prop-val" node-id="144" parent-id="137">油性</span>&nbsp;</p>
                            <p class="tzbox xiangxi">肌龄：<span elem-type="prop-val" node-id="147" parent-id="145">青春肌(12-17岁)</span>&nbsp;<span elem-type="prop-val" node-id="149" parent-id="145">年轻肌(18-24岁)</span>&nbsp;<span elem-type="prop-val" node-id="150" parent-id="145">轻熟肌(25-34岁)</span>&nbsp;</p>
                            <div class="clrH10"></div>
                            <h3 id="det0">产品概述<span class="deTxt">INFORMATION</span></h3>
                            <div class="dItmBox">
                                <div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        <img src="img/big_1.jpg" rz="rz"><br>
                                                    </p>
                                                </td>
                                                <td style="LINE-HEIGHT: 22px">
                                                    <p>
                                                        <span style="color:#333333;">
                                                            <span style="font-family:Microsoft YaHei;font-size:18px;">
                                                                <strong>Clinique 倩碧清爽液体洁面皂(混合偏油至油性肌肤)<br></strong>
                                                            </span>Liquid Facial Soap Oily Skin Formula<br>
                                                        </span><br>能温和地清除表面的污垢及油脂，令皮肤清洁舒爽，绝无干燥紧绷的感觉。<br>
                                                        <img src="img/big_2.jpg" rz="rz">
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <h3 id="det1">产品特点<span class="deTxt">FEATURES</span></h3>
                            <div class="dItmBox">
                                <div>
                                    <p align="center">
                                        <img src="img/big_3.jpg" rz="rz"><br>
                                        <img src="img/big_4.jpg" rz="rz"><br>
                                        <img src="img/big_5.jpg" rz="rz">
                                    </p>
                                </div>
                            </div>
                            <h3 id="det2">主要成分<span class="deTxt">ELEMENT</span></h3>
                            <div class="dItmBox">
                                <div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="img/big_6.jpg" rz="rz">
                                                </td>
                                                <td>
                                                    <p>
                                                        <strong>库拉索芦荟<br></strong>芦荟多糖和维生素对人体的皮肤有良好的营养、滋润、增白作用。且刺激性少，用后舒适，对皮肤粗糙、面部皱纹、雀斑等均有一定疗效。
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <h3 id="det3">使用方法<span class="deTxt">USAGE</span></h3>
                            <div class="dItmBox">
                                <div>
                                    <p>
                                        <img src="img/big_7.jpg" rz="rz">
                                    </p>
                                </div>
                            </div>
                            <h3 id="det4">达人分享<span class="deTxt">SHARE</span></h3>
                            <div class="dItmBox">
                                <div>
                                    <p>
                                        <img src="img/big_8.jpg" rz="rz">
                                    </p>
                                </div>
                            </div>
                            <h3 id="det5">产品细节<span class="deTxt">DETAILS</span></h3>
                            <div class="dItmBox">
                                <div>
                                    <p>
                                        <img src="img/big_9.jpg" rz="rz">
                                        <img src="img/big_10.jpg" rz="rz">
                                        <img src="img/big_11.jpg" rz="rz">
                                        <img src="img/big_12.jpg" rz="rz">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="clrH15"></div>
                        <div class="goodtabs title_pl">配送包装</div>
                        <div class="boxing">
                            <div class="b_img">
                                <img src="img/package_a.gif" class="_loading" style="visibility: visible;">
                            </div>
                            <div class="b_text">商品包裹气泡膜，北京、上海以外地区的顾客，使用no5专属包装箱，内附购物凭证，纸箱内充分填充。</div>
                        </div>
                        <div class="boxing">
                            <div class="b_img">
                                <img src="img/package_b.gif" class="_loading" style="visibility: visible;">
                            </div>
                            <div class="b_text">纸箱内充分填充,使用N°5专属胶带进行封箱包装，并粘贴“安全封条”。</div>
                        </div>
                        <div class="boxing">
                            <div class="b_img">
                                <img src="img/package_c.jpg" class="_loading" style="visibility: visible;">
                            </div>
                            <div class="b_text"><span class="prodRedTxt">如出现包装不一致，或封箱胶带、安全封条被撕毁，商品破损缺少等情况，</span>请当即与No5客服中心联系。</div>
                        </div>
                        <div class="clrH15"></div>
                    </div>
                    <div id="tab_box_1">
                        <div class="goodtabs title_pl">
                            <span class="more">
                                <a href="/goods/review/2593.html" target="_blank">查看更多&gt;&gt;</a>
                            </span>购买评论
                        </div>
                        <div class="eva">
                            <div class="e_l">
                                <p>洗完以后滑滑的 说实话喜欢固体涩涩那种 但是觉得这个方便 味道轻我喜欢 控油</p>
                                <!--p class="jieshi"><strong>[解释]</strong></p-->
                                <p class="icon_xin5"></p>
                            </div>
                            <div class="e_r">
                                <p>kuaileyouni2008</p>
                                <p class="shenfen">[标准会员]</p>
                                <p class="time">2014-02-13 09:14:47</p>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="eva">
                            <div class="e_l">
                                <p>第一次用倩碧家的东东，洗的时候感觉凉凉的，洗完之后不会觉得皮肤干涩紧绷，挺舒服的，灰常喜欢啊。</p>
                                <!--p class="jieshi"><strong>[解释]</strong></p-->
                                <p class="icon_xin5"></p>
                            </div>
                            <div class="e_r">
                                <p>信风</p>
                                <p class="shenfen">[标准会员]</p>
                                <p class="time">2014-02-10 05:16:34</p>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="eva">
                            <div class="e_l">
                                <p>用其他洗面奶的时候不小心弄到眼睛里就很疼。这个就完全不会。而且泡泡很细 自我感觉洗的很干净。没有其他香味让人很放心。</p>
                                <!--p class="jieshi"><strong>[解释]</strong></p-->
                                <p class="icon_xin5"></p>
                            </div>
                            <div class="e_r">
                                <p>牧眠</p>
                                <p class="shenfen">[标准会员]</p>
                                <p class="time">2014-02-05 22:36:38</p>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="eva">
                            <div class="e_l">
                                <p>洗完很清爽，因为是带滋润的，所以洗完感觉脸上还有点滑，搭配水那些整体还是不错！因为个人T区较油毛孔粗大，希望坚持使用下来能改变下水油平衡~~~~</p>
                                <!--p class="jieshi"><strong>[解释]</strong></p-->
                                <p class="icon_xin5"></p>
                            </div>
                            <div class="e_r">
                                <p>小萨摩喵喵</p>
                                <p class="shenfen">[标准会员]</p>
                                <p class="time">2014-02-01 19:49:50</p>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="eva">
                            <div class="e_l">
                                <p>很棒的产品，不愧是明星产品，有保障，过年前的物流也不错，发货很快</p>
                                <!--p class="jieshi"><strong>[解释]</strong></p-->
                                <p class="icon_xin5"></p>
                            </div>
                            <div class="e_r">
                                <p>暗香001</p>
                                <p class="shenfen">[标准会员]</p>
                                <p class="time">2014-01-22 23:17:27</p>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="topj">
                            <span class="err"></span>
                            <button id="btnRvw" class="prodBtn3" onclick="javascript:btnClick(this, null, 'prodReview');">
                                <input type="hidden">
                            </button>
                        </div>
                        <div id="rvwbox">
                            <h3>发表评论并打分：</h3>
                            <div id="score">
                                <span class="substar">&nbsp;</span>
                                <span class="substar">&nbsp;</span>
                                <span class="substar">&nbsp;</span>
                                <span class="substar">&nbsp;</span>
                                <span class="substar">&nbsp;</span>
                                <span class="star_tips">(小提示:点击小星星就能评分了)</span>
                                <div class="clear"></div>
                            </div>
                            <form name="frmRvw" onsubmit="javascript:return false;">
                                <input type="hidden" name="act" value="saveProdRvw">
                                <input type="hidden" name="ordrId" value="">
                                <input type="hidden" name="prodId" value="2593">
                                <input type="hidden" name="score" value="5">
                                <div class="textdiv">
                                    <textarea name="rvwCnt" class="areatext"></textarea>
                                    <span class="sub_top80">(5-200个字)</span>
                                </div>
                                <div class="textdiv">
                                    <button id="btnSaveRvw" class="prodBtn2" onclick="javascript:saveTxtForm(0, this);">
                                        <input type="hidden">
                                    </button>
                                    <span></span>
                                </div>
                            </form>
                            <div class="textdiv" style="padding-top:10px;">
                                <p>说明：</p>
                                <p>1、欢迎您在此发表与心得体验、使用情况、商品质量相关的内容和评论，以帮助其他顾客了解商品；发表原创、实用、生动的商品评论，有机会在首页展示并获得额外的分享奖励！</p>
                                <p>2、商品评论采用先审核后发布原则，如果我们认为评论不能给其他顾客带来帮助，或违法国家有关规定，no5有权不发布这类评论。</p>
                                <p>3、只有购买过该商品的顾客，在购买后半年内可以进行商品评论，同一订单每款商品仅能评论一次。每条通过审核的评论均能获得一定分享奖励。</p>
                            </div>
                        </div>
                        <div class="clrH15"></div>
                    </div>
                    <div id="tab_box_2">
                        <div class="goodtabs title_pl">
                            <span class="more">
                                <a href="javascript:;" target="_blank">查看更多&gt;&gt;</a>
                            </span>商品咨询
                        </div>
                        <div class="group tips">
                            <span class="prodRedTxt">温馨提示：</span>商品的包装、产地、批号、日期、库存情况等诸多信息，会因厂家更新商品及销售情况有变更。该回复仅在当时对提问者有效，其他顾客仅供参考。
                        </div>
                        <div class="qanda">
                            <div class="tags">jmd0209 发表于2012-12-20 14:17:09</div>
                            <div class="evazx">
                                <p class="question">这款加强型液体洁面皂适合我用么？我是T区较油！</p>
                                <p class="xinde">客服回复：您好，T区油属于混合型肤质，如果是混合型偏油可以使用这款加强型洁面皂，如果是混合型偏干建议选用温和型洁面皂。感谢您对N°5的支持,祝您购物愉快！</p>
                            </div>
                        </div>
                        <div class="qanda">
                            <div class="tags">彦妮214 发表于2012-03-19 10:30:04</div>
                            <div class="evazx">
                                <p class="question">请问在什么日期前使用</p>
                                <p class="xinde">客服回复：您好，日期会根据销售及采购情况不断更新，无法为您准确核实，但我们售出的商品都为新鲜商品，如果您比较在意日期，订购时可以给客服留言中说明对日期的要求，我们会尽量按您的要求配送。感谢您对N°5的支持，祝您购物愉快！</p>
                            </div>
                        </div>
                        <div class="topj">
                            <span class="err"></span>
                            <button id="btnQue" class="prodBtn3" onclick="javascript:btnClick(this, null, 'prodQuestion');">
                                <input type="hidden">
                            </button>
                        </div>
                        <div id="quebox">
                            <form name="frmQue" onsubmit="javascript: return false;">
                                <input type="hidden" name="act" value="saveProdQue">
                                <input type="hidden" name="prodId" value="2593">
                                <div class="textdiv">
                                    <h3>您的提问：</h3>
                                    <textarea name="queCnt" class="areatext"></textarea>
                                    <span class="sub_top80">(4-100个字)</span>
                                </div>
                                <div class="textdiv">
                                    <button id="btnSaveQue" class="prodBtn2" onclick="javascript:saveTxtForm(1, this);">
                                        <input type="hidden">
                                    </button>
                                    <span></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>`;

            

            $ulbox.append(str);
        //  }
   }
});