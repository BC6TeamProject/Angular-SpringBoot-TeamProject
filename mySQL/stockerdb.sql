-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: localhost    Database: stockerdb
-- ------------------------------------------------------
-- Server version	5.7.24-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `sender` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  `body` text COLLATE utf8_bin NOT NULL,
  `time_sent` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`message_id`),
  KEY `users_user_id_receiver_fk_idx` (`receiver`),
  KEY `users_user_id_sender_fk_idx` (`sender`),
  CONSTRAINT `users_user_id_receiver_fk` FOREIGN KEY (`receiver`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `users_user_id_sender_fk` FOREIGN KEY (`sender`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (17,25,27,'Sup LBJ! Big fan!','2018-12-19 23:40:01'),(20,16,15,'The Google stock dropped 5% this morning! Word on the market is that it\'s gonna go down by 30%!','2018-12-19 23:40:01'),(21,15,16,'What?! Seriously?! I\'m gonna sell the entire portfolio right now.','2018-12-19 23:40:14'),(22,16,15,'Done! Phew! That was close one.','2018-12-19 23:40:38'),(23,15,16,'haha April fool\'s!! jk','2018-12-19 23:41:11'),(24,25,20,'Hey. Isn\'t this app awesome?','2018-12-19 23:42:20'),(25,20,25,'Yes. Stocker is the best app on the market right now.','2018-12-19 23:42:38'),(26,25,20,'The people that made it must be awesome developers.','2018-12-19 23:42:57'),(27,20,25,'If I had a company I\'d totally hire them. And pay them handsomely.','2018-12-19 23:43:17'),(28,27,28,'I used to buy Microsoft stocks like you, but then I took an arrow to the knee.','2018-12-19 23:43:54'),(29,28,27,'I don\'t get it. Is that another dumb video game reference?','2018-12-19 23:44:28'),(30,27,28,'Maaaaaybe','2018-12-19 23:44:39'),(33,16,17,'Admin... ANTE GEIA!','2018-12-19 23:47:41');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) COLLATE utf8_bin NOT NULL,
  `password` varchar(45) COLLATE utf8_bin NOT NULL,
  `role` int(11) NOT NULL,
  `first_name` varchar(45) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(45) COLLATE utf8_bin NOT NULL,
  `email` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (15,'dim13','dpg7000',2,'Dimitris','Giannakopoulos','dim13@hotmail.com'),(16,'takis7','osfp7',2,'Panagiotis','Tsoukalas','takis7@hotmail.com'),(17,'god','god',1,'admin','admin','admin@admin.admin'),(20,'BillGates','windows',2,'Bill','Gates','bGates@windows.com'),(25,'EllonMusk','1234',2,'Ellon','Musk','eMusk@spacex.com'),(27,'LebronJames','theKing',2,'Lebron','James','lJames@nba.com'),(28,'LaurenSimmons','NYSE',2,'Lauren','Simmons','lSimmons@nyse.com'),(32,'test','test',2,'test','test','test');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-21  9:52:28
