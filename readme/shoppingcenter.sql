# Host: localhost  (Version: 5.5.53)
# Date: 2018-01-29 15:33:01
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('10001','洗面奶','洁面',145,100,'Clinique 倩碧清爽液体洁面皂/洗面奶(混合偏油至油性肌肤6F39) 200ml','img/detail_demo_1.jpg','（7.8折）','加入购物车','收藏','img/enlarge_s1.jpg','img/enlarge_s2.jpg','img/enlarge_s3.jpg','清爽洁净 软化角质 舒肤不干燥 适合混合偏油及油性肌肤','Clinique Liquid Facial Soap Oily Skin Formula','2593','185.00','','',''),('10002','洗面奶','洁面',135,100,'Clinique 倩碧温和液体洁面皂/洗面奶(适合混合偏干性肌肤6F37) 200ml','img/detail_demo_2.jpg','（7.3折）','加入购物车','收藏','','','','','','','','','',''),('10003','洗面奶','洁面',118,100,'Nuxe欧树蜂蜜温和洁面啫喱/洗面奶 200ml','img/detail_demo_3.jpg','（4.9折）','加入购物车','收藏','','','','','','','','','',''),('10004','洗面奶','洁面',108,100,'Biotherm 碧欧泉活泉润漾柔肤洁面乳/洗面奶(052641) 本周特价！ 150ml','img/detail_demo_4.jpg','（5.5折）','加入购物车','收藏','','','','','','','','','',''),('10005','洗面奶','洁面',158,100,'LA roche-posay 理肤泉特安洁面乳/洗面奶 限期18.09，清仓特价 200ml','img/detail_demo_5.jpg','（7.5折）','加入购物车','收藏','','','','','','','','','',''),('10006','洗面奶','洁面',168,100,'Clarins 娇韵诗温和洁颜乳(0112)-绿吸盘洗面奶 200ml','img/detail_demo_6.jpg','（7折）','加入购物车','收藏','','','','','','','','','',''),('10007','洗面奶','洁面',115,100,'Avene 雅漾清爽无皂基洁肤凝胶(洗面奶04292) 限期18.05 清仓特价 200ml','img/detail_demo_7.jpg','（6折）','加入购物车','收藏','','','','','','','','','',''),('10008','洗面奶','洁面',15,100,'韩国思美兰(白)大米皂 100g','img/detail_demo_8.jpg','（3.8折）','加入购物车','收藏','','','','','','','','','',''),('10009','洗面奶','洁面',198,100,'Clarins 娇韵诗均衡清洁乳-白吸盘洗面奶(034554) 400ml','img/detail_demo_9.jpg','（5.8折）','加入购物车','收藏','','','','','','','','','',''),('10010','洗面奶','洁面',149,100,'[Fancl 无添加]柔滑洁面粉/洗面奶(保湿28121) 50g','img/detail_demo_10.jpg','（8.8折）','加入购物车','收藏','','','','','','','','','',''),('10011','洗面奶','洁面',135,100,'Avene 雅漾活泉修护洁面乳/洗面奶(33518) 限期18.10，清仓特价 200ml','img/detail_demo_11.jpg','（6.1折）','加入购物车','收藏','','','','','','','','','',''),('10012','洗面奶','洁面',75,100,'The body shop 美体小铺茶树洁面胶(52108) 250ml','img/detail_demo_12.jpg','（4.7折）','加入购物车','收藏','','','','','','','','','',''),('10013','洗面奶','洁面',108,100,'[Fancl 无添加]柔滑洁面粉(清爽28120)  清仓特价 50g','img/detail_demo_13.jpg','（6.4折）','加入购物车','收藏','','','','','','','','','',''),('10014','洗面奶','洁面',198,100,'Lancome 兰蔻清滢洁面摩丝(泡沫洗面奶741385) 200ml','img/detail_demo_14.jpg','（5.7折）','加入购物车','收藏','','','','','','','','','',''),('10015','洗面奶','洁面',158,100,'Lancome 兰蔻新清滢洁面乳/洁面泡沫/洗面奶  新老包装随机发，本周特价！ 125ml','img/detail_demo_15.jpg','（4.9折）','加入购物车','收藏','','','','','','','','','',''),('10016','洗面奶','洁面',258,100,'Lancome 兰蔻净透洁面泡沫/洗面奶(84201)  新老包装随机发 125ml','img/detail_demo_16.jpg','（7.4折）','加入购物车','收藏','','','','','','','','','',''),('10017','洗面奶','洁面',238,100,'Jurlique 茱莉蔻清洁去角质霜(05285) 限期18.05，清仓特价 100ml','img/detail_demo_17.jpg','（5折）','加入购物车','收藏','','','','','','','','','',''),('10018','洗面奶','洁面',135,100,'Avene 雅漾净柔洁面摩丝/洗面奶(35065)本周特价！ 150ml','img/detail_demo_18.jpg','（6.2折）','加入购物车','收藏','','','','','','','','','',''),('10019','洗面奶','洁面',109,100,'Avene 雅漾无皂基平衡洁肤凝胶/洗面奶(39886)限期18.07 清仓特价！ 125ml','img/detail_demo_19.jpg','（6.5折）','加入购物车','收藏','','','','','','','','','',''),('10020','洗面奶','洁面',148,100,'Clarins 娇韵诗温和洁颜乳(0116)-绿吸盘洗面奶  本周特价! 400ml','img/detail_demo_20.jpg','（4.4折）','加入购物车','收藏','','','','','','','','','',''),('10021','洗面奶','洁面',39,100,'Shiseido 资生堂洗颜专科浓密泡沫洁面乳/洗面奶(444915) 120g','img/detail_demo_21.jpg','（8.1折）','加入购物车','收藏','','','','','','','','','',''),('10022','洗面奶','洁面',258,100,'Shiseido 资生堂盼丽风姿抗皱洁面膏/洗面奶 125ml','img/detail_demo_22.jpg','（7.4折）','加入购物车','收藏','','','','','','','','','',''),('10023','洗面奶','洁面',298,100,'Dior 迪奥乐肤源洁颜水慕斯/洗面奶(水动力洁面泡沫329194) 190ml','img/detail_demo_23.jpg','（7.9折）','加入购物车','收藏','','','','','','','','','',''),('10024','洗面奶','洁面',98,100,'freeplus 芙丽芳丝净润洗面霜/氨基酸洗面奶(90290) 100g','img/detail_demo_24.jpg','（6.5折）','加入购物车','收藏','','','','','','','','','',''),('10025','洗面奶','洁面',228,100,'Shiseido 资生堂新透白美肌亮润洗面膏/洗面奶 125ml','img/detail_demo_25.jpg','（7.1折）','加入购物车','收藏','','','','','','','','','',''),('10026','洗面奶','洁面',118,100,'佰草集 悦风舒润洁面啫喱/洗面奶  清仓特价 200g','img/detail_demo_26.jpg','（7.4折）','加入购物车','收藏','','','','','','','','','',''),('10027','洗面奶','洁面',159,100,'Kiehl’s科颜氏(契尔氏)高保湿洁面啫喱(洗面奶024192) 150ml','img/detail_demo_27.jpg','（8.8折）','加入购物车','收藏','','','','','','','','','',''),('10028','洗面奶','洁面',49,100,'Clarins 娇韵诗温和洁颜乳(0117)-绿吸盘洗面奶 50ml','img/detail_demo_28.jpg','（8.2折）','加入购物车','收藏','','','','','','','','','',''),('10029','洗面奶','洁面',238,100,'Anna Sui 安娜苏雪娃娃美白洁净慕丝(12024)   特价！ 150ml','img/detail_demo_29.jpg','（7.4折）','加入购物车','收藏','','','','','','','','','',''),('10030','洗面奶','洁面',50,100,'Shiseido 资生堂盼丽风姿抗皱洁面膏/洗面奶小样 30ml','img/detail_demo_30.jpg','（6.5折）','加入购物车','收藏','','','','','','','','','',''),('10031','洗面奶','洁面',155,100,'Kose 高丝茵菲妮洗颜霜(洗面奶04959) 清仓特价！ 120g','img/detail_demo_31.jpg','（4.8折）','加入购物车','收藏','','','','','','','','','',''),('10032','洗面奶','洁面',148,100,'Jurlique 茱莉蔻舒缓泡沫洁面乳液/洗面奶(05269) 无外盒，清仓特价 200ml','img/detail_demo_32.jpg','（3.9折）','加入购物车','收藏','','','','','','','','','',''),('10033','洗面奶','洁面',20,100,'Kose 高丝雪肌精美白洗颜乳/洗面奶小样  清仓特价！ 20ml','img/detail_demo_33.jpg','（5折）','加入购物车','收藏','','','','','','','','','',''),('10034','洗面奶','洁面',248,100,'L’Occitane 欧舒丹焕亮柔肤去角质霜(蜡菊焕亮水莹455197) 75ml','img/detail_demo_34.jpg','（8折）','加入购物车','收藏','','','','','','','','','',''),('10035','洗面奶','洁面',25,100,'Clinique 倩碧液体洁面皂-温和型(洗面奶中样6L79) 30ml','img/detail_demo_35.jpg','（7.1折）','加入购物车','收藏','','','','','','','','','',''),('10036','洗面奶','洁面',18,100,'THE FACE SHOP 菲诗小铺五谷清洁霜','img/detail_demo_36.jpg','（3.8折）','加入购物车','收藏','','','','','','','','','','');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('123123a','10001',2);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
