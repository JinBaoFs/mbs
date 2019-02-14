/*
 Navicat Premium Data Transfer

 Source Server         : Jbao
 Source Server Type    : MySQL
 Source Server Version : 50714
 Source Host           : localhost:3306
 Source Schema         : mbs

 Target Server Type    : MySQL
 Target Server Version : 50714
 File Encoding         : 65001

 Date: 14/02/2019 19:53:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cargoods
-- ----------------------------
DROP TABLE IF EXISTS `cargoods`;
CREATE TABLE `cargoods`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `shop` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `size` varchar(10) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `num` varchar(11) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `money` float(255, 2) NULL DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_croatian_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cargoods
-- ----------------------------
INSERT INTO `cargoods` VALUES ('贝贝', '2019-02-13 21:21:50', '970154433', '海德斯曼2019新款工装夹克男印花半开衫潮牌oversi外套', '海德斯曼', 'XL', '01A绿色', 'image/list/hds_11.jpg', '1', 399.00);
INSERT INTO `cargoods` VALUES ('贝贝', '2019-02-13 21:21:04', '970154431', '海德斯曼2019春夏新款ins翻领polo衫男潮落肩宽松印花T恤男', '海德斯曼', 'S', '01A浅灰', 'image/list/hds_1.jpg', '1', 118.00);
INSERT INTO `cargoods` VALUES ('贝贝', '2019-02-13 21:21:08', '970154431', '海德斯曼2019春夏新款ins翻领polo衫男潮落肩宽松印花T恤男', '海德斯曼', 'M', '01A浅灰', 'image/list/hds_1.jpg', '4', 118.00);
INSERT INTO `cargoods` VALUES ('贝贝', '2019-02-13 21:21:11', '970154431', '海德斯曼2019春夏新款ins翻领polo衫男潮落肩宽松印花T恤男', '海德斯曼', 'XXL', '01A浅灰', 'image/list/hds_1.jpg', '4', 118.00);
INSERT INTO `cargoods` VALUES ('贝贝', '2019-02-13 21:21:39', '970154433', '海德斯曼2019新款工装夹克男印花半开衫潮牌oversi外套', '海德斯曼', 'M', '01A白色', 'image/list/hds_6.jpg', '1', 399.00);
INSERT INTO `cargoods` VALUES ('杨金宝', '2019-02-14 10:45:15', '187317153', '所然原创文艺侧开衩时尚复古中国风马甲外套', '原创设计女装', 'M', '米白色', 'image/list/\nyc_21.jpg', '5', 199.00);
INSERT INTO `cargoods` VALUES ('杨金宝', '2019-02-13 20:40:42', '970154433', '海德斯曼2019新款工装夹克男印花半开衫潮牌oversi外套', '海德斯曼', 'XL', '01A白色', 'image/list/hds_6.jpg', '3', 399.00);
INSERT INTO `cargoods` VALUES ('杨金宝', '2019-02-14 11:01:29', '435218102', '韩伊儿日韩时尚双排扣不规则修身显瘦百搭格子短裤裙', '韩伊儿', 'M', '灰色', 'image/list/hyr_6.jpg', '3', 99.00);
INSERT INTO `cargoods` VALUES ('贝贝', '2019-02-13 21:21:46', '970154433', '海德斯曼2019新款工装夹克男印花半开衫潮牌oversi外套', '海德斯曼', 'L', '01A白色', 'image/list/hds_6.jpg', '1', 399.00);
INSERT INTO `cargoods` VALUES ('贝贝', '2019-02-13 21:22:05', '187418102', '所然原创文艺不规则个性百搭毛衣开衫', '原创设计女装', 'L', '橘红色', 'image/list/yc_6.jpg', '1', 129.00);
INSERT INTO `cargoods` VALUES ('贝贝', '2019-02-13 21:22:20', '037018302', '梦芭莎时尚休闲绣花开叉鱼尾半长裙', '梦芭莎旗舰店', '28', '浅蓝色', 'image/list/mbs_01.jpg', '1', 199.00);
INSERT INTO `cargoods` VALUES ('18824664530', '2019-02-14 00:17:53', '463018335', '梦芭莎宽松型层次荷叶边七分袖V领套头小衫', '梦芭莎旗舰店', 'S', '白色', 'image/list/mbs_you6.jpg', '1', 169.00);
INSERT INTO `cargoods` VALUES ('18824664530', '2019-02-14 00:20:54', '463018335', '梦芭莎宽松型层次荷叶边七分袖V领套头小衫', '梦芭莎旗舰店', 'M', '白色', 'image/list/mbs_you6.jpg', '6', 169.00);
INSERT INTO `cargoods` VALUES ('18824664530', '2019-02-14 00:23:27', '187317153', '所然原创文艺侧开衩时尚复古中国风马甲外套', '原创设计女装', 'M', '米白色', 'image/list/\nyc_21.jpg', '7', 199.00);
INSERT INTO `cargoods` VALUES ('杨金宝', '2019-02-14 18:40:32', '970154430', '海德斯曼2019春装新款长袖t恤男潮牌打底衫圆领宽松落肩上衣', '海德斯曼', 'S', '01A白色', 'image/list/\nhds_16.jpg', '6', 199.00);
INSERT INTO `cargoods` VALUES ('杨金宝', '2019-02-14 11:02:18', '435218102', '韩伊儿日韩时尚双排扣不规则修身显瘦百搭格子短裤裙', '韩伊儿', 'XL', '卡其色', 'image/list/hyr_1.jpg', '1', 99.00);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `id` int(50) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_croatian_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('张小月', '自从买了这家店的产品从来没有去过别的店买。', '2019-02-14 17:09:07', 1);
INSERT INTO `comment` VALUES ('梦小白', '呵呵', '2019-02-14 17:09:22', 2);
INSERT INTO `comment` VALUES ('西门吹雪', '是真的，昨天才买，今天我又来买，买到断货为止.', '2019-02-14 17:07:07', 3);
INSERT INTO `comment` VALUES ('浩哥', '这服装，这质量，真的好', '2019-02-14 17:07:37', 4);
INSERT INTO `comment` VALUES ('电瓶哥', '俺偷了这么多年的电瓶，居然发现这衣服比电瓶好。', '2019-02-14 17:08:31', 5);
INSERT INTO `comment` VALUES ('江小白', '够了么？来一件', '2019-02-14 17:08:55', 6);
INSERT INTO `comment` VALUES ('红灯区', '我表示不服', '2019-02-14 17:09:41', 7);
INSERT INTO `comment` VALUES ('毒药', '可以可以！给个大赞哇', '2019-02-14 17:10:14', 8);
INSERT INTO `comment` VALUES ('西施', '以前我是东施，自从有了这服装，他们叫我西施。', '2019-02-14 17:11:10', 9);
INSERT INTO `comment` VALUES ('唐僧', '施主，您真的好湿。', '2019-02-14 17:11:41', 10);
INSERT INTO `comment` VALUES ('孙悟空', '师傅，师傅，快看！您老人家也湿了', '2019-02-14 17:12:47', 11);
INSERT INTO `comment` VALUES ('小姑凉', '楼顶一群披着文化的色狼', '2019-02-14 17:13:46', 12);
INSERT INTO `comment` VALUES ('老谢', '想我老谢，经常老谢，早谢，自从买了这短裤，从来不谢', '2019-02-14 17:15:49', 13);
INSERT INTO `comment` VALUES ('伟哥', '兄弟啊！你这店铺一开，让我们怎么过活啊。', '2019-02-14 17:16:53', 14);
INSERT INTO `comment` VALUES ('发哥', '给我来一套，上海滩最吊的西装，我要开始秀了', '2019-02-14 17:17:51', 15);
INSERT INTO `comment` VALUES ('星仔', '师傅，带上我把！我的特异功能已经达到可以透视一切的境界了', '2019-02-14 17:18:46', 16);
INSERT INTO `comment` VALUES ('华仔', '让青春吹动了你的长发~~~~', '2019-02-14 17:19:21', 17);
INSERT INTO `comment` VALUES ('程浩楠', '铜锣湾不服就服你。', '2019-02-14 17:20:12', 18);
INSERT INTO `comment` VALUES ('山鸡', '来来来~把我的AK-47拿来', '2019-02-14 17:20:38', 19);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `class` varchar(20) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `oprice` decimal(10, 2) UNSIGNED NULL DEFAULT NULL,
  `time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `shop` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `pprice` decimal(10, 2) UNSIGNED NULL DEFAULT NULL,
  `num` int(20) NOT NULL,
  `state` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `code` varchar(50) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `codenum` varchar(50) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `figure` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_croatian_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '梦芭莎长袖不规则下摆绑腰带条纹连衣裙', '女装', 289.00, '2019-02-13 20:02:54', '', '梦芭莎旗舰店', 'mbs_you1.jpg,mbs_you2.jpg,mbs_you3.jpg,mbs_you4.jpg,mbs_you5.jpg', 199.00, 88, 'like', '紫色条纹', '37118309', 'S,M,L', '连衣裙', NULL);
INSERT INTO `goods` VALUES (2, '梦芭莎宽松型层次荷叶边七分袖V领套头小衫', '女装', 425.00, '2019-02-13 20:03:11', NULL, '梦芭莎旗舰店', 'mbs_you6.jpg,mbs_you7.jpg,mbs_you8.jpg,mbs_you9.jpg,mbs_you10.jpg', 169.00, 60, 'like', '白色', '463018335', 'S,M,L,XL', '小衫', NULL);
INSERT INTO `goods` VALUES (3, '梦芭莎时尚休闲绣花开叉鱼尾半长裙', '女装', 328.00, '2019-02-13 19:38:16', NULL, '梦芭莎旗舰店', 'mbs_01.jpg,mbs_02.jpg,mbs_03.jpg,mbs_04.jpg,mbs_05.jpg', 199.00, 50, 'like', '浅蓝色', '037018302', '26,27,28', '长裙', NULL);
INSERT INTO `goods` VALUES (4, '梦芭莎通勤百搭显瘦修身脚口隐形拉链窄脚九分裤', '女装', 169.00, '2019-02-13 19:37:50', NULL, '梦芭莎旗舰店', 'mbs_you11.jpg,mbs_you12.jpg,mbs_you13.jpg,mbs_you14.jpg,mbs_you15.jpg', 99.00, 40, 'like', '黑色', '465018303', 'S,M,L,XL', '九分裤', NULL);
INSERT INTO `goods` VALUES (5, '蒙蒂埃莫经典男士纯棉芝麻点翻领前胸精致装饰开袋长袖T恤', '男装', 399.00, '2019-02-13 19:37:45', NULL, '梦芭莎旗舰店', 'mbs_you16.jpg,mbs_you17.jpg,mbs_you18.jpg,mbs_you19.jpg,mbs_you20.jpg', 269.00, 88, 'like', '宝蓝', '062417310', 'M,L,XL,XXL,XXXL', 'T恤', NULL);
INSERT INTO `goods` VALUES (6, '所然原创文艺时尚脚口开叉流苏刺绣微喇修身九分裤', '女装', 599.00, '2019-02-13 17:37:00', NULL, '原创设计女装', 'mbs_06.jpg,mbs_07.jpg,mbs_08.jpg,mbs_09.jpg,mbs_10.jpg,mbs_11.jpg,mbs_12.jpg,mbs_11.jpg,mbs_12.jpg,mbs_13.jpg,mbs_14.jpg,mbs_15.jpg', 269.00, 25, 'like', '浪漫樱花,黑色', '185118118', 'S,M,L,XL', '九分裤', NULL);
INSERT INTO `goods` VALUES (7, '梦芭莎浪漫优雅时尚领口绑带碎花长袖衬衫', '女装', 499.00, '2019-02-13 17:37:04', NULL, '梦芭莎旗舰店', 'mbs_hot1.jpg,mbs_hot2.jpg,mbs_hot3.jpg,mbs_hot4.jpg,mbs_hot5.jpg', 269.00, 14, 'like', '黑底印花', '461618114', 'S,M,L,XL', '长袖', NULL);
INSERT INTO `goods` VALUES (8, '所然原创文艺简约A型呢料大衣', '女装', 1269.00, '2019-02-13 18:06:18', NULL, '原创设计女装', 'mbs_you21.jpg,mbs_you22.jpg,mbs_you23.jpg,mbs_you24.jpg,mbs_you25.jpg', 499.00, 4, 'like', '米杏色', '180918476', 'M,L,XL', '风衣', NULL);
INSERT INTO `goods` VALUES (9, '海德斯曼2019春夏新款ins翻领polo衫男潮落肩宽松印花T恤男', '男装', 299.00, '2019-02-13 19:10:34', NULL, '海德斯曼', 'hds_1.jpg,hds_2.jpg,hds_3.jpg,hds_4.jpg,hds_5.jpg', 118.00, 0, 'like', '01A浅灰', '970154431', 'S,M,L,XL,XXL', 'T恤', NULL);
INSERT INTO `goods` VALUES (10, '千纸鹤男士加厚卫衣衬衫领假两件修身秋冬季商务毛衣15117', '男装', 356.00, '2019-02-13 19:28:11', NULL, '千纸鹤', 'qzh_1.jpg,qzh_2.jpg,qzh_3.jpg,qzh_4.jpg,qzh_5.jpg', 269.00, 0, 'like', '01A深灰', '970154397', 'S,M,L,XL,XXL', '毛衣', NULL);
INSERT INTO `goods` VALUES (11, '海德斯曼2019新款工装夹克男印花半开衫潮牌oversi外套', '男装', 688.00, '2019-02-13 19:38:46', NULL, '海德斯曼', 'hds_6.jpg,hds_7.jpg,hds_8.jpg,hds_9.jpg,hds_10.jpg,hds_11.jpg,hds_12.jpg,hds_13.jpg,hds_14.jpg,hds_15.jpg', 399.00, 0, 'like', '01A白色,01A绿色', '970154433', 'M,L,XL,XXL', '外套', NULL);
INSERT INTO `goods` VALUES (12, '梦芭莎优雅时尚花边拼接领珍珠装饰扣丝带绑结袖口贴花肌理雪纺衬衣', '女装', 210.00, '2019-02-13 19:56:04', NULL, '梦芭莎旗舰店', 'mbs_you26.jpg,mbs_you27.jpg,mbs_you28.jpg,mbs_you29.jpg,mbs_you30.jpg', 110.00, 0, 'like', '米白色', '461618109', 'S,M,L,XL', '衬衫', NULL);
INSERT INTO `goods` VALUES (13, '韩伊儿日韩时尚双排扣不规则修身显瘦百搭格子短裤裙', '女装', 189.00, '2019-02-13 20:01:52', NULL, '韩伊儿', 'hyr_1.jpg,hyr_2.jpg,hyr_3.jpg,hyr_4.jpg,hyr_5.jpg,hyr_6.jpg,hyr_7.jpg,hyr_5.jpg,hyr_9.jpg,hyr_10.jpg', 99.00, 8, 'like', '卡其色,灰色', '435218102', 'S,M,L,XL', '裤裙', NULL);
INSERT INTO `goods` VALUES (14, '所然原创百搭文艺范七分袖显瘦偏门襟系带长裙', '女装', 439.00, '2019-02-13 20:07:17', NULL, '原创设计女装', 'yc_1.jpg,yc_2.jpg,yc_3.jpg,yc_4.jpg,yc_5.jpg', 199.00, 0, 'like', '杏色', '187118150', 'M,L,XL', '长裙', NULL);
INSERT INTO `goods` VALUES (15, '所然原创文艺不规则个性百搭毛衣开衫', '女装', 299.00, '2019-02-13 20:11:20', NULL, '原创设计女装', 'yc_6.jpg,yc_7.jpg,yc_8.jpg,yc_9.jpg,yc_10.jpg', 129.00, 0, 'like', '橘红色', '187418102', 'M,L', '毛衫', NULL);
INSERT INTO `goods` VALUES (16, '所然原创文艺刺绣假两件套百褶下摆飘逸禅意外套', '女装', 999.00, '2019-02-13 20:16:29', NULL, '原创设计女装', 'yc_11.jpg,yc_12.jpg,yc_13.jpg,yc_14.jpg,yc_15.jpg', 669.00, 0, 'like', '米白色', '187318102', 'S,M,L,XL', '外套', NULL);
INSERT INTO `goods` VALUES (17, '海德斯曼2019春装新款长袖t恤男潮牌打底衫圆领宽松落肩上衣', '男装', 299.00, '2019-02-13 20:22:51', NULL, '海德斯曼', '\r\nhds_16.jpg,hds_17.jpg,hds_18.jpg,hds_19.jpg,hds_20.jpg', 199.00, 0, 'like', '01A白色', '970154430', 'S,M,L,XL', 'T恤', NULL);
INSERT INTO `goods` VALUES (18, '蒙蒂埃莫时尚植绒印绣花组合插肩袖薄款男士套头卫衣', '男装', 269.00, '2019-02-13 20:27:12', NULL, '蒙蒂埃莫', 'mda_1.jpg,mda_2.jpg,mda_3.jpg,mda_4.jpg,mda_5.jpg', 215.00, 0, 'like', '黑色', '061419101', 'M,L,XL,XXL', '卫衣', NULL);
INSERT INTO `goods` VALUES (19, '所然原创文艺范个性长袖印花连衣裙', '女装', 669.00, '2019-02-13 20:31:55', NULL, '原创设计女装', 'yc_16.jpg,yc_17.jpg,yc_18.jpg,yc_19.jpg,yc_20.jpg', 468.00, 36, 'like', '绿色印花', '187118129', 'M,L', '连衣裙', NULL);
INSERT INTO `goods` VALUES (20, '所然原创文艺侧开衩时尚复古中国风马甲外套', '女装', 419.00, '2019-02-13 20:35:17', NULL, '原创设计女装', '\r\nyc_21.jpg,yc_22.jpg,yc_23.jpg,yc_24.jpg,yc_25.jpg', 199.00, 36, 'like', '米白色', '187317153', 'M', '马甲', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci NULL DEFAULT NULL,
  `time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`name`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_croatian_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('杨金宝', '123456', '2019-02-11 16:38:09');
INSERT INTO `user` VALUES ('小白', '123456', '2019-02-11 17:02:00');
INSERT INTO `user` VALUES ('小黄', '123456', '2019-02-11 17:14:05');
INSERT INTO `user` VALUES ('苹果', '123456', '2019-02-11 17:17:15');
INSERT INTO `user` VALUES ('爱情', '123456', '2019-02-11 17:18:07');
INSERT INTO `user` VALUES ('贝贝', '123456', '2019-02-11 17:18:20');
INSERT INTO `user` VALUES ('问问', '123456', '2019-02-11 17:18:57');
INSERT INTO `user` VALUES ('小月', '123456', '2019-02-11 17:19:15');
INSERT INTO `user` VALUES ('18824664530', '123456', '2019-02-14 00:17:08');

SET FOREIGN_KEY_CHECKS = 1;
