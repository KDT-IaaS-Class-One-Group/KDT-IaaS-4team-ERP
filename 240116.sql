-- --------------------------------------------------------
-- 호스트:                          192.168.100.83
-- 서버 버전:                        11.2.2-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- form 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `form` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `form`;

-- 테이블 form.administrators 구조 내보내기
CREATE TABLE IF NOT EXISTS `administrators` (
  `adminIndex` int(11) NOT NULL AUTO_INCREMENT COMMENT 'PRIMARY KEY AUTO_INCREMENT',
  `adminName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '어드민 닉네임',
  `adminId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '아이디',
  `adminPassword` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '비밀번호',
  `adminEmail` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_croatian_ci DEFAULT 'asd@gmail.com' COMMENT '이메일, 비워둬도됌',
  PRIMARY KEY (`adminIndex`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='관리자 테이블';

-- 테이블 데이터 form.administrators:~1 rows (대략적) 내보내기
DELETE FROM `administrators`;
INSERT INTO `administrators` (`adminIndex`, `adminName`, `adminId`, `adminPassword`, `adminEmail`) VALUES
	(1, '관리자', 'test', 'test', 'test@test.com');

-- 테이블 form.cart 구조 내보내기
CREATE TABLE IF NOT EXISTS `cart` (
  `cartIndex` int(11) NOT NULL AUTO_INCREMENT COMMENT 'PRIMARY KEY AUTO_INCREMENT',
  `cartProductCount` int(11) NOT NULL DEFAULT 1 COMMENT '장바구니 상품 개수',
  `userIndex` int(11) NOT NULL COMMENT '외래키_장바구니 담은 유저 정보',
  `prodIndex` int(11) NOT NULL COMMENT '외래키_장바구니에 담긴 제품',
  PRIMARY KEY (`cartIndex`),
  KEY `FK_prodIndex_productsTable` (`prodIndex`),
  CONSTRAINT `FK_prodIndex_productsTable` FOREIGN KEY (`prodIndex`) REFERENCES `products` (`prodIndex`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- 테이블 데이터 form.cart:~11 rows (대략적) 내보내기
DELETE FROM `cart`;
INSERT INTO `cart` (`cartIndex`, `cartProductCount`, `userIndex`, `prodIndex`) VALUES
	(1, 2, 1, 1),
	(2, 1, 2, 2),
	(3, 5, 3, 3),
	(4, 3, 4, 4),
	(5, 2, 5, 5),
	(6, 4, 6, 1),
	(7, 1, 7, 2),
	(8, 3, 8, 3),
	(9, 2, 9, 4),
	(10, 6, 10, 5),
	(11, 2, 4, 5);

-- 테이블 form.orders 구조 내보내기
CREATE TABLE IF NOT EXISTS `orders` (
  `orderIndex` int(11) NOT NULL AUTO_INCREMENT COMMENT 'PRIMARY KEY AUTO_INCREMENT',
  `orderRequest` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT '부재시 경비실에 맡겨주세요.' COMMENT '주문 요청사항, Null도 가능',
  `orderReceiver` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL DEFAULT 'userName' COMMENT '배송 받는 사람',
  `orderReceiverPhone` int(11) NOT NULL DEFAULT 1012345678 COMMENT '배송 받는 사람 전화번호 하이푼없이',
  `orderDeliveryAddress` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '(필수)주문 주소',
  `orderPaymentCount` int(11) DEFAULT 1 COMMENT '(로직트리거)결제 당시 주문갯수\r\n카운트를 시그널로, payment의 값들을 변경한다.',
  `orderPaymentStatus` tinyint(4) NOT NULL DEFAULT 0 COMMENT '결제 여부 판단(boolean_미결 0, 결제1)',
  `orderPaymentDatetime` datetime DEFAULT NULL COMMENT '결제버튼 누르면 (date 객체타입으로 추가)',
  `orderPaymentPriceAtOrder` int(11) DEFAULT NULL COMMENT '결제 당시 가격',
  `orderPaymentTotalPrice` int(11) DEFAULT NULL COMMENT '결제 당시 개수 x 가격',
  `orderIsOrderAccepted` int(11) DEFAULT 0 COMMENT '주문 확정(0~2), 0 대기_기본값, 1거절, 2수락',
  `orderDeliveryDone` tinyint(4) NOT NULL DEFAULT 0 COMMENT '배달 여부(기본값0, 결제완료 1)',
  `userIndex` int(11) NOT NULL COMMENT '외래키_유저 정보',
  `prodIndex` int(11) NOT NULL COMMENT '외래키_상품 정보',
  `cartIndex` int(11) DEFAULT NULL COMMENT '외래키_카트 인덱스',
  PRIMARY KEY (`orderIndex`),
  KEY `FK_userIndex_userTable` (`userIndex`),
  KEY `FK_prodIndex_productTable` (`prodIndex`),
  KEY `FK_cartIndex_cartTable` (`cartIndex`),
  CONSTRAINT `FK_cartIndex_cartTable` FOREIGN KEY (`cartIndex`) REFERENCES `cart` (`cartIndex`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_prodIndex_productTable` FOREIGN KEY (`prodIndex`) REFERENCES `products` (`prodIndex`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_userIndex_userTable` FOREIGN KEY (`userIndex`) REFERENCES `user` (`userIndex`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='결제 페이지 테이블\r\n작동 방식 : userIndex를 기준으로 orderList  검색 -> prodIndex를 참고, 컴포넌트 생성\r\n결제 버튼 누를 때 로직 구상 : orderPaymentStatus가 true(1)로 전환, payment 관련 옵션들 업데이트';

-- 테이블 데이터 form.orders:~13 rows (대략적) 내보내기
DELETE FROM `orders`;
INSERT INTO `orders` (`orderIndex`, `orderRequest`, `orderReceiver`, `orderReceiverPhone`, `orderDeliveryAddress`, `orderPaymentCount`, `orderPaymentStatus`, `orderPaymentDatetime`, `orderPaymentPriceAtOrder`, `orderPaymentTotalPrice`, `orderIsOrderAccepted`, `orderDeliveryDone`, `userIndex`, `prodIndex`, `cartIndex`) VALUES
	(1, 'Request 1', '', 1012345678, 'Address 1', 1, 1, '2024-01-01 01:00:00', 100, 110, 2, 1, 1, 1, NULL),
	(2, 'Request 2', '', 1012345678, 'Address 2', 2, 0, '2024-01-02 01:00:00', 200, 220, 0, 0, 2, 2, NULL),
	(3, 'Request 3', '', 1012345678, 'Address 3', 1, 1, '2024-01-03 01:00:00', 300, 330, 2, 1, 3, 3, NULL),
	(4, 'Request 4', '', 1012345678, 'Address 4', 2, 0, '2024-01-04 01:00:00', 400, 440, 0, 0, 4, 4, NULL),
	(5, 'Request 5', '', 1012345678, 'Address 5', 6, 1, '2024-01-10 15:44:38', 500, 3000, 2, 1, 5, 5, NULL),
	(6, 'Request 6', '', 1012345678, 'Address 6', 2, 0, '2024-01-06 01:00:00', 100, 110, 0, 0, 6, 1, NULL),
	(7, 'Request 7', '', 1012345678, 'Address 7', 1, 1, '2024-01-07 01:00:00', 200, 220, 2, 1, 7, 2, NULL),
	(8, 'Request 8', '', 1012345678, 'Address 8', 2, 0, '2024-01-08 01:00:00', 300, 330, 1, 0, 8, 3, NULL),
	(9, 'Request 9', '', 1012345678, 'Address 9', 1, 1, '2024-01-09 01:00:00', 400, 440, 0, 1, 9, 4, NULL),
	(11, 'ㅁㄴㅇ', 'userName', 123, 'ㅁㄴㅇ', 1, 0, '2024-01-12 19:39:27', 300, 300, 0, 0, 11, 2, NULL),
	(12, '123123', 'userName', 123123, '123123', 2, 0, '2024-01-12 19:57:37', 300, 600, 0, 0, 1, 2, NULL),
	(13, '13213', '123', 12313, '13213', 3, 0, '2024-01-16 14:16:52', 200, 600, 0, 0, 1, 1, NULL),
	(14, 'ddd', 'dsfff', 1234, '3444', 4, 0, '2024-01-16 15:33:49', 200, 800, 0, 0, 11, 1, NULL);

-- 테이블 form.post 구조 내보내기
CREATE TABLE IF NOT EXISTS `post` (
  `postIndex` int(11) NOT NULL AUTO_INCREMENT COMMENT 'PRIMARY KEY AUTO_INCREMENT',
  `postTitle` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `postContent` text CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `postImgUrl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `postCreatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `postUpdatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `userId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`postIndex`),
  KEY `FK_userId_userTable` (`userId`),
  CONSTRAINT `FK_userId_userTable` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- 테이블 데이터 form.post:~10 rows (대략적) 내보내기
DELETE FROM `post`;
INSERT INTO `post` (`postIndex`, `postTitle`, `postContent`, `postImgUrl`, `postCreatedAt`, `postUpdatedAt`, `userId`) VALUES
	(11, 'Post Title 1', 'Post Content 1', 'postimgurl1', '2024-01-01 00:00:00', '2024-01-02 00:00:00', 'userid1'),
	(12, 'Post Title 2', 'Post Content 2', 'postimgurl2', '2024-01-03 00:00:00', '2024-01-04 00:00:00', 'userid2'),
	(13, 'Post Title 3', 'Post Content 3', 'postimgurl3', '2024-01-05 00:00:00', '2024-01-06 00:00:00', 'userid3'),
	(14, 'Post Title 4', 'Post Content 4', 'postimgurl4', '2024-01-07 00:00:00', '2024-01-08 00:00:00', 'userid4'),
	(15, 'Post Title 5', 'Post Content 5', 'postimgurl5', '2024-01-09 00:00:00', '2024-01-10 00:00:00', 'userid5'),
	(16, 'Post Title 6', 'Post Content 6', 'postimgurl6', '2024-01-11 00:00:00', '2024-01-12 00:00:00', 'userid6'),
	(17, 'Post Title 7', 'Post Content 7', 'postimgurl7', '2024-01-13 00:00:00', '2024-01-14 00:00:00', 'userid7'),
	(18, 'Post Title 8', 'Post Content 8', 'postimgurl8', '2024-01-15 00:00:00', '2024-01-16 00:00:00', 'userid8'),
	(19, 'Post Title 9', 'Post Content 9', 'postimgurl9', '2024-01-17 00:00:00', '2024-01-18 00:00:00', 'userid9'),
	(20, 'Post Title 10', 'Post Content 10', 'postimgurl10', '2024-01-19 00:00:00', '2024-01-20 00:00:00', 'userid10');

-- 테이블 form.products 구조 내보내기
CREATE TABLE IF NOT EXISTS `products` (
  `prodIndex` int(11) NOT NULL AUTO_INCREMENT COMMENT 'PRIMARY KEY AUTO_INCREMENT',
  `prodName` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_croatian_ci NOT NULL COMMENT '제품 이름(유니크키, 동일한 이름x)',
  `prodPrice` int(11) unsigned DEFAULT NULL,
  `prodImgUrl` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_croatian_ci NOT NULL COMMENT '제품 이미지파일 주소',
  `prodDescription` text CHARACTER SET utf8mb3 COLLATE utf8mb3_croatian_ci NOT NULL COMMENT '제품 설명',
  `prodStock` int(11) unsigned DEFAULT NULL,
  `prodCategory` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_croatian_ci NOT NULL COMMENT 'Terran, Zerg, Protoss',
  PRIMARY KEY (`prodIndex`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='상품 테이블';

-- 테이블 데이터 form.products:~9 rows (대략적) 내보내기
DELETE FROM `products`;
INSERT INTO `products` (`prodIndex`, `prodName`, `prodPrice`, `prodImgUrl`, `prodDescription`, `prodStock`, `prodCategory`) VALUES
	(1, 'Product1', 200, '/000101.png', 'Description for Product1', 50, 'Zerg'),
	(2, 'Product2', 300, '/000101.png', 'Description for Product2', 50, 'Terran'),
	(3, 'Product3', 100, '/product3', 'Description for Product3', 50, 'Terran'),
	(4, 'Product4', 200, '/product4', 'Description for Product4', 50, 'Protoss'),
	(5, 'Product5', 500, '/product5', 'Description for Product5', 50, 'Terran'),
	(98, 'test', 1, '/product1', 'test', 1, 'Zerg'),
	(99, 'test', 2, '/product1', 'test', 2, 'Terran'),
	(103, '123123', 12312, '/product1', '123123', 21332, 'Terran'),
	(104, '123123', 12312, '/product1', '123123', 21332, 'Terran');

-- 테이블 form.reviews 구조 내보내기
CREATE TABLE IF NOT EXISTS `reviews` (
  `reviewIndex` int(11) NOT NULL AUTO_INCREMENT COMMENT 'PRIMARY KEY AUTO_INCREMENT',
  `reviewRating` int(5) DEFAULT 5 COMMENT '리뷰 별표 0~5(int, 기본값5)',
  `reviewTitle` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_croatian_ci DEFAULT NULL COMMENT '리뷰 제목',
  `reviewContent` text CHARACTER SET utf8mb3 COLLATE utf8mb3_croatian_ci DEFAULT NULL COMMENT '리뷰 내용',
  `reviewImgUrl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_croatian_ci DEFAULT NULL COMMENT '리뷰 이미지파일 주소',
  `reviewCreatedAt` datetime NOT NULL DEFAULT current_timestamp() COMMENT '리뷰 생성시간(기본값 데이터 생성시간)',
  `reviewUpdatedAt` datetime NOT NULL DEFAULT current_timestamp() COMMENT '리뷰 업데이트(dateTime 타입)',
  `userId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '(필수)외래키_UserId(varchar)',
  `prodIndex` int(11) DEFAULT NULL COMMENT '(필수)외래키_제품index(int)',
  PRIMARY KEY (`reviewIndex`),
  KEY `FK_prodIndex_prodTable` (`prodIndex`),
  KEY `FK_reviews_user` (`userId`),
  CONSTRAINT `FK_prodIndex_prodTable` FOREIGN KEY (`prodIndex`) REFERENCES `products` (`prodIndex`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_reviews_user` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- 테이블 데이터 form.reviews:~11 rows (대략적) 내보내기
DELETE FROM `reviews`;
INSERT INTO `reviews` (`reviewIndex`, `reviewRating`, `reviewTitle`, `reviewContent`, `reviewImgUrl`, `reviewCreatedAt`, `reviewUpdatedAt`, `userId`, `prodIndex`) VALUES
	(1, 5, 'Review Title 1', 'Review Content 1', 'reviewimgurl1', '2024-01-01 00:00:00', '2024-01-02 00:00:00', 'userid1', 1),
	(2, 4, 'Review Title 2', 'Review Content 2', 'reviewimgurl2', '2024-01-03 00:00:00', '2024-01-04 00:00:00', 'userid2', 2),
	(3, 3, 'Review Title 3', 'Review Content 3', 'reviewimgurl3', '2024-01-05 00:00:00', '2024-01-06 00:00:00', 'userid3', 3),
	(4, 2, 'Review Title 4', 'Review Content 4', 'reviewimgurl4', '2024-01-07 00:00:00', '2024-01-08 00:00:00', 'userid4', 4),
	(5, 1, 'Review Title 5', 'Review Content 5', 'reviewimgurl5', '2024-01-09 00:00:00', '2024-01-10 00:00:00', 'userid5', 5),
	(6, 5, 'Review Title 6', 'Review Content 6', 'reviewimgurl6', '2024-01-11 00:00:00', '2024-01-12 00:00:00', 'userid6', 1),
	(7, 4, 'Review Title 7', 'Review Content 7', 'reviewimgurl7', '2024-01-13 00:00:00', '2024-01-14 00:00:00', 'userid7', 2),
	(8, 3, 'Review Title 8', 'Review Content 8', 'reviewimgurl8', '2024-01-15 00:00:00', '2024-01-16 00:00:00', 'userid8', 3),
	(9, 2, 'Review Title 9', 'Review Content 9', 'reviewimgurl9', '2024-01-17 00:00:00', '2024-01-18 00:00:00', 'userid9', 4),
	(10, 1, 'Review Title 10', 'Review Content 10', 'reviewimgurl10', '2024-01-19 00:00:00', '2024-01-20 00:00:00', 'userid10', 5),
	(11, 5, 'fff', 'ddd', NULL, '2024-01-16 15:34:03', '2024-01-16 15:34:04', 'qjqmfgus', 2);

-- 테이블 form.sales 구조 내보내기
CREATE TABLE IF NOT EXISTS `sales` (
  `saleIndex` int(11) NOT NULL AUTO_INCREMENT COMMENT 'PRIMARY KEY AUTO_INCREMENT',
  `saleId` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT '주문번호(saleId+saleIndex)',
  `orderIndex` int(11) NOT NULL COMMENT '외래키_orderIndex ',
  PRIMARY KEY (`saleIndex`),
  KEY `FK_orderIndex_orderTable` (`orderIndex`),
  CONSTRAINT `FK_orderIndex_orderTable` FOREIGN KEY (`orderIndex`) REFERENCES `orders` (`orderIndex`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- 테이블 데이터 form.sales:~16 rows (대략적) 내보내기
DELETE FROM `sales`;
INSERT INTO `sales` (`saleIndex`, `saleId`, `orderIndex`) VALUES
	(1, 'sale1', 1),
	(2, 'sale2', 3),
	(3, 'sale3', 5),
	(4, 'sale4', 7),
	(5, 'sale5', 9),
	(6, 'sale6', 1),
	(7, 'sale7', 3),
	(8, 'sale8', 5),
	(9, 'sale9', 7),
	(10, 'sale10', 9),
	(11, 'sale5', 5),
	(12, 'sale1', 1),
	(13, 'sale3', 3),
	(14, 'sale5', 5),
	(15, 'sale7', 7),
	(16, 'sale9', 9);

-- 테이블 form.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `userIndex` int(11) NOT NULL AUTO_INCREMENT COMMENT 'PRIMARY KEY AUTO_INCREMENT',
  `userId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '유니크키(중복x)',
  `userName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '유저 닉네임(Null)',
  `userPassword` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '유저 비밀번호',
  `userEmail` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'user@example.com' COMMENT '유저 이메일',
  `userStatus` tinyint(1) DEFAULT 1 COMMENT '활성화 상태(Boolean_기본값1, 탈퇴0)',
  `userCash` int(11) DEFAULT 2000 COMMENT '유저 잔고(기본값 2000 Int)',
  `userPhoneNum` varchar(50) DEFAULT NULL COMMENT '핸드폰, 하이푼없이(varchar_stingType)',
  PRIMARY KEY (`userIndex`),
  UNIQUE KEY `user_id` (`userId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- 테이블 데이터 form.user:~23 rows (대략적) 내보내기
DELETE FROM `user`;
INSERT INTO `user` (`userIndex`, `userId`, `userName`, `userPassword`, `userEmail`, `userStatus`, `userCash`, `userPhoneNum`) VALUES
	(1, 'userid1', 'User1', 'password1', 'user1@example.com', 1, 1000, '1234567890'),
	(2, 'userid2', 'User2', 'password2', 'user2@example.com', 0, 1500, '2345678901'),
	(3, 'userid3', 'User3', 'password3', 'user3@example.com', 1, 500, '3456789012'),
	(4, 'userid4', 'User4', 'password4', 'user4@example.com', 1, 1200, '4567890123'),
	(5, 'userid5', 'User5', 'password5', 'user5@example.com', 0, 2000, '5678901234'),
	(6, 'userid6', 'User6', 'password6', 'user6@example.com', 1, 300, '6789012345'),
	(7, 'userid7', 'User7', 'password7', 'user7@example.com', 1, 750, '7890123456'),
	(8, 'userid8', 'User8', 'password8', 'user8@example.com', 0, 650, '8901234567'),
	(9, 'userid9', 'User9', 'password9', 'user9@example.com', 1, 800, '9012345678'),
	(10, 'userid10', 'User10', 'password10', 'user10@example.com', 1, 950, '1234567891'),
	(11, 'qjqmfgus', 'qjqmfgus', '1234', 'qjqmfgus@asd.com', 1, 2000, '12341234123'),
	(12, 'asdf', NULL, 'asdf', '1234', 1, 2000, NULL),
	(13, 'asfasdf', NULL, '1234', 'asdff', 1, 2000, ''),
	(14, '1234', NULL, '1234', '1234', 1, 2000, ''),
	(15, 'asdff', NULL, '1234', '1asdf', 1, 2000, ''),
	(16, 'asdfff', NULL, '1234', 'qwe', 1, 2000, ''),
	(17, 'gag', NULL, '1234', '1234', 1, 2000, ''),
	(18, '12344', NULL, '1234', 'adff', 1, 2000, ''),
	(19, 'shoindjfls', NULL, '1234', 'forhn37@gmail.com', 1, 2000, ''),
	(20, 'qjqmfgus2', NULL, '1234', 'forhn37@gmail.com', 1, 2000, ''),
	(21, '12341234', NULL, '1234', 'forhn37@gmail.com', 1, 2000, ''),
	(22, 'asdfasdfff', NULL, '1234', 'forhn37@gmail.com', 1, 2000, ''),
	(23, 'signupTest', NULL, 'signupTest', 'signupTest@exam.com', 1, 2000, '');

-- 트리거 form.after_order_payment_update 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE -2023ehgen` TRIGGER `after_order_payment_update` AFTER UPDATE ON `orders` FOR EACH ROW BEGIN
    IF NEW.orderDeliveryDone = 1 THEN
        INSERT INTO sales (saleId, orderIndex) 
        VALUES (CONCAT('sale', NEW.orderIndex), NEW.orderIndex);
    END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 form.before_review_update 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE -2023ehgen` TRIGGER before_review_update
BEFORE UPDATE ON reviews
FOR EACH ROW
BEGIN
    SET NEW.reviewUpdatedAt = NOW();
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 form.update_order_payment 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE -2023ehgen` TRIGGER update_order_payment
BEFORE UPDATE ON orders
FOR EACH ROW
BEGIN
    -- orderPaymentCount가 업데이트 되는 경우에만 실행
    IF OLD.orderPaymentCount <> NEW.orderPaymentCount THEN
        -- orderPaymentStatus를 1로 업데이트
        SET NEW.orderPaymentStatus = 1;
        -- orderPaymentDatetime을 현재 시간으로 업데이트
        SET NEW.orderPaymentDatetime = NOW();
        -- products 테이블에서 prodPrice를 가져와서 orderPaymentPriceAtOrder를 업데이트
        SELECT prodPrice INTO @price FROM products WHERE prodIndex = NEW.prodIndex;
        SET NEW.orderPaymentPriceAtOrder = @price;
        -- orderPaymentTotalPrice를 계산하여 업데이트
        SET NEW.orderPaymentTotalPrice = NEW.orderPaymentCount * @price;
    END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
