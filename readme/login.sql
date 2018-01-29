# Host: localhost  (Version: 5.5.53)
# Date: 2018-01-29 15:36:58
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "vip"
#

DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

/*!40000 ALTER TABLE `vip` DISABLE KEYS */;
INSERT INTO `vip` VALUES ('123123a','123123a'),('123123q','123123a'),('123123s','123123a'),('abcabc1','123123a');
/*!40000 ALTER TABLE `vip` ENABLE KEYS */;
