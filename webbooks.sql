-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 19, 2021 at 07:40 AM
-- Server version: 8.0.21
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webbooks`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
CREATE TABLE IF NOT EXISTS `author` (
  `authorID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `nationality` varchar(30) NOT NULL,
  `birthYear` int UNSIGNED NOT NULL,
  `deathYear` int UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`authorID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`authorID`, `name`, `surname`, `nationality`, `birthYear`, `deathYear`) VALUES
(1, 'Miguel', 'de Cervantes Saavedra', 'Spanish', 1547, 1616),
(2, 'Charles', 'Dickens', 'British', 1812, 1870),
(3, 'J.R.R.', 'Tolkien', 'British', 1892, 1973),
(4, 'Antoine', 'de Saint-Exupery', 'French', 1900, 1944),
(5, 'J.K.', 'Rowling', 'British', 1965, NULL),
(6, 'Agatha', 'Christie', 'British', 1890, 1976),
(7, 'Cao', 'Xueqin', 'Chinese', 1715, 1763),
(8, 'Henry', ' Rider Haggard', 'British', 1856, 1925),
(9, 'C.S.', 'Lewis', 'British', 1898, 1963),
(13, 'new', 'author', 'greek', 1600, 0);

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `bookID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `bookTitle` varchar(255) NOT NULL,
  `originalTitle` varchar(255) DEFAULT NULL,
  `yearofPublication` int NOT NULL DEFAULT '0',
  `genre` varchar(30) NOT NULL,
  `millionsSold` int UNSIGNED NOT NULL,
  `languageWritten` varchar(30) NOT NULL,
  `coverImagePath` varchar(255) NOT NULL,
  `authorID` int UNSIGNED NOT NULL,
  `bookPlotID` int UNSIGNED NOT NULL,
  PRIMARY KEY (`bookID`),
  KEY `fk_author` (`authorID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`bookID`, `bookTitle`, `originalTitle`, `yearofPublication`, `genre`, `millionsSold`, `languageWritten`, `coverImagePath`, `authorID`, `bookPlotID`) VALUES
(1, 'Don Quixote', 'El Ingenioso Hidalgo Don Quixote de la Mancha', 1605, 'Novel', 500, 'Spanish', 'img/cover2.jpg', 5, 9),
(2, 'A Tale of Two Cities', 'A Tale of Two Cities', 1859, 'Historical Fiction', 200, 'English', 'img/cover1.jpg', 2, 5),
(3, 'The Lord of the Rings', 'The Lord of the Rings', 1954, 'Fantasy&amp;amp;amp;#x2F;Adven', 150, 'English', 'img/cover2.jpg', 5, 4),
(4, 'The Litle Prince', 'Le Petit Prince', 1943, 'Fable', 142, 'French', 'img/cover1.jpg', 4, 4),
(5, 'Harry Potter and the Sorcerer&amp;amp;amp;#x27;s Stone', 'Harry Potter and the Sorcerer&amp;amp;amp;#x27;s Stone', 1997, 'Fantasy Fiction', 107, 'English', 'img/cover1.jpg', 5, 5),
(6, 'And Then There Were None', 'Ten Little Niggers', 1939, 'Mystery', 100, 'English', 'img/cover4.jpg', 6, 5),
(7, 'The Dream of the Red Chamber', 'The Story of the Stone', 1792, 'Novel', 100, 'Chinese', 'img/cover2.jpg', 7, 4),
(8, 'The Hobbit ', 'There and Back Again', 1937, 'High Fantasy', 100, 'English', 'img/cover1.jpg', 6, 5),
(9, 'She: A History of Adventure', 'She', 1886, 'Fiction', 100, 'English', 'img/cover1.jpg', 7, 9),
(10, 'The Lion, the Witch and the Wardrobe', 'The Lion, the Witch and the Wardrobe', 1950, 'Fantasy', 85, 'English ', 'img/cover1.jpg', 3, 4),
(15, 'test date changelog', '', 20, 'me', 200, 'english', 'img/cover1.jpg', 5, 4),
(18, 'new book', '', 2000, 'me', 2, 'english', 'img/cover1.jpg', 3, 5),
(19, 'new book 6', NULL, 2000, 'flic', 2, 'english', 'img/cover1.jpg', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `bookplot`
--

DROP TABLE IF EXISTS `bookplot`;
CREATE TABLE IF NOT EXISTS `bookplot` (
  `bookPlotID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `plot` longtext NOT NULL,
  `plotTitle` longtext CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `bookID` int UNSIGNED DEFAULT '1',
  PRIMARY KEY (`bookPlotID`),
  KEY `fk_bookID_P` (`bookID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookplot`
--

INSERT INTO `bookplot` (`bookPlotID`, `plot`, `plotTitle`, `bookID`) VALUES
(4, ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo elit dolor, finibus fermentum enim varius ac. Nulla vestibulum quis dui sit amet bibendum. Quisque sit amet dui pellentesque, ullamcorper velit et, convallis mauris. Pellentesque facilisis pretium libero sit amet blandit. Sed velit sapien, molestie quis pulvinar quis, hendrerit sed lacus. Sed congue feugiat eros a volutpat. Nulla ligula arcu, rutrum non posuere mattis, tempus in sapien. Vivamus ultricies velit sit amet rutrum porttitor. Mauris id congue nisi. Quisque orci nunc, convallis sed maximus in, condimentum vitae neque. Aliquam pharetra elit magna, in pulvinar nulla facilisis non.\n\nPhasellus mollis felis at nisl viverra, sit amet vehicula augue volutpat. Morbi mattis et erat et finibus. Sed et pellentesque ante. Integer non dui a ex rutrum aliquam. Nunc non libero sed tortor laoreet convallis. Vivamus gravida eget sem quis iaculis. Sed fringilla sapien ligula, sed bibendum nisl rutrum et.\n\nSed convallis lectus nec mi molestie consequat. In at congue dui. Aliquam mattis imperdiet quam a efficitur. Morbi bibendum gravida convallis. Duis ipsum massa, sodales non tortor id, dapibus condimentum mauris. Aenean ultricies ligula luctus aliquet sagittis. Suspendisse id malesuada lacus. Duis ullamcorper porta faucibus. Fusce aliquam, dolor eget consectetur feugiat, enim tellus viverra ante, sed sollicitudin massa elit at erat. Aenean justo dui, rhoncus sit amet nisi id, eleifend porttitor erat. In hac habitasse platea dictumst.\n\nDuis varius magna quis tellus facilisis, sit amet sagittis libero lobortis. Nunc luctus rhoncus tristique. Nulla nec felis vulputate, venenatis enim non, suscipit ligula. Praesent sagittis sem at tristique consequat. Ut vel sodales eros, non egestas quam. Sed dapibus a sapien et scelerisque. Pellentesque venenatis aliquet felis, pulvinar laoreet libero imperdiet id. Aliquam viverra libero id pulvinar tristique.\n\nInteger at dignissim metus. Aenean pretium leo eu velit auctor, a aliquet tortor fermentu', 'plot 3', 8),
(5, '\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna porta, placerat nisl sed, congue libero. Aenean vehicula dui tellus, mollis congue justo eleifend vitae. Nam sed condimentum lectus. Phasellus eu consectetur magna, vitae rutrum erat. Sed hendrerit porttitor nisi sit amet interdum. Curabitur hendrerit urna venenatis, molestie magna id, sagittis magna. Curabitur nec magna mauris. Nulla efficitur a justo et ultrices. Nunc maximus urna non leo auctor, sed viverra nisi lacinia. Donec nec ipsum ipsum. Vestibulum eu leo at ante iaculis accumsan. Duis ex magna, venenatis sed interdum et, pellentesque porttitor ante. Proin laoreet posuere nibh eget elementum. Vestibulum tincidunt, lorem vitae faucibus rhoncus, dui est feugiat nisl, et bibendum lectus neque eu nunc.\n\nSuspendisse luctus venenatis arcu, in efficitur metus sollicitudin in. Nunc consequat fringilla vulputate. Phasellus gravida tempus nisl, nec vehicula tellus tempor eu. Praesent molestie bibendum felis vitae volutpat. Suspendisse tincidunt accumsan odio, quis pellentesque massa condimentum in. Nam facilisis tortor lectus, a luctus sem gravida ac. Suspendisse luctus laoreet nibh vel mattis. Curabitur vitae convallis metus, molestie dapibus nisi. Sed et nisl auctor, bibendum mauris et, blandit neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam turpis ligula, molestie ut cursus non, feugiat at justo. Maecenas dapibus efficitur sem, sit amet bibendum leo posuere dignissim.\n\nEtiam hendrerit tortor odio. Donec dictum nunc massa, ut convallis eros maximus id. Nunc suscipit tortor libero, vel lobortis diam eleifend in. Suspendisse potenti. Aliquam eleifend mi justo, vitae tincidunt eros condimentum congue. Curabitur nec dignissim arcu, ac tempus elit. Integer sit amet ipsum pharetra, laoreet neque at, placerat dolor.\n\nProin vitae fermentum velit. Mauris ut pulvinar nunc, et bibendum risus. Cras dignissim, velit non imperdiet auctor, metus est molestie mi, eget convallis risus urna quis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent dictum enim ac elit fringilla sagittis. Pellentesque ornare tristique ante. Suspendisse condimentum ac justo id interdum. Vestibulum et varius nunc, ac tempus nibh. Donec ornare consectetur egestas. Maecenas lorem nunc, faucibus non ullamcorper et, consectetur in ante.\n\nAliquam venenatis molestie risus, commodo gravida nunc euismod id. Maecenas dapibus, neque vitae commodo cursus, turpis turpis feugiat lectus, ut ornare lacus libero eu magna. Curabitur tempor, nunc quis rhoncus ullamcorper, sem arcu egestas elit, a dignissim dui ante consectetur diam. Nullam augue orci, egestas eget diam ut, aliquet ultrices nulla. Aliquam vel odio ac ante mattis aliquet. Duis luctus suscipit felis, facilisis volutpat libero auctor quis. Mauris vel dignissim libero, ut ultrices lacus. ', 'new plot 4', 15),
(9, '\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna porta, placerat nisl sed, congue libero. Aenean vehicula dui tellus, mollis congue justo eleifend vitae. Nam sed condimentum lectus. Phasellus eu consectetur magna, vitae rutrum erat. Sed hendrerit porttitor nisi sit amet interdum. Curabitur hendrerit urna venenatis, molestie magna id, sagittis magna. Curabitur nec magna mauris. Nulla efficitur a justo et ultrices. Nunc maximus urna non leo auctor, sed viverra nisi lacinia. Donec nec ipsum ipsum. Vestibulum eu leo at ante iaculis accumsan. Duis ex magna, venenatis sed interdum et, pellentesque porttitor ante. Proin laoreet posuere nibh eget elementum. Vestibulum tincidunt, lorem vitae faucibus rhoncus, dui est feugiat nisl, et bibendum lectus neque eu nunc.\n\nSuspendisse luctus venenatis arcu, in efficitur metus sollicitudin in. Nunc consequat fringilla vulputate. Phasellus gravida tempus nisl, nec vehicula tellus tempor eu. Praesent molestie bibendum felis vitae volutpat. Suspendisse tincidunt accumsan odio, quis pellentesque massa condimentum in. Nam facilisis tortor lectus, a luctus sem gravida ac. Suspendisse luctus laoreet nibh vel mattis. Curabitur vitae convallis metus, molestie dapibus nisi. Sed et nisl auctor, bibendum mauris et, blandit neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam turpis ligula, molestie ut cursus non, feugiat at justo. Maecenas dapibus efficitur sem, sit amet bibendum leo posuere dignissim.\n\nEtiam hendrerit tortor odio. Donec dictum nunc massa, ut convallis eros maximus id. Nunc suscipit tortor libero, vel lobortis diam eleifend in. Suspendisse potenti. Aliquam eleifend mi justo, vitae tincidunt eros condimentum congue. Curabitur nec dignissim arcu, ac tempus elit. Integer sit amet ipsum pharetra, laoreet neque at, placerat dolor.\n\nProin vitae fermentum velit. Mauris ut pulvinar nunc, et bibendum risus. Cras dignissim, velit non imperdiet auctor, metus est molestie mi, eget convallis risus urna quis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent dictum enim ac elit fringilla sagittis. Pellentesque ornare tristique ante. Suspendisse condimentum ac justo id interdum. Vestibulum et varius nunc, ac tempus nibh. Donec ornare consectetur egestas. Maecenas lorem nunc, faucibus non ullamcorper et, consectetur in ante.\n\nAliquam venenatis molestie risus, commodo gravida nunc euismod id. Maecenas dapibus, neque vitae commodo cursus, turpis turpis feugiat lectus, ut ornare lacus libero eu magna. Curabitur tempor, nunc quis rhoncus ullamcorper, sem arcu egestas elit, a dignissim dui ante consectetur diam. Nullam augue orci, egestas eget diam ut, aliquet ultrices nulla. Aliquam vel odio ac ante mattis aliquet. Duis luctus suscipit felis, facilisis volutpat libero auctor quis. Mauris vel dignissim libero, ut ultrices lacus. ', 'plot 5', 6);

-- --------------------------------------------------------

--
-- Table structure for table `changelog`
--

DROP TABLE IF EXISTS `changelog`;
CREATE TABLE IF NOT EXISTS `changelog` (
  `changeLogID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `dateCreated` datetime DEFAULT NULL,
  `dateChanged` datetime DEFAULT NULL,
  `bookID` int UNSIGNED NOT NULL,
  `userID` int UNSIGNED NOT NULL,
  PRIMARY KEY (`changeLogID`),
  KEY `fk_bookID_C` (`bookID`),
  KEY `fk_userID_C` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `changelog`
--

INSERT INTO `changelog` (`changeLogID`, `dateCreated`, `dateChanged`, `bookID`, `userID`) VALUES
(1, '2021-11-16 12:13:25', '2021-11-18 09:10:09', 15, 1),
(4, '2021-11-18 07:51:24', '2021-11-19 07:13:14', 18, 3),
(5, '2021-11-18 09:19:41', NULL, 19, 1),
(7, '2021-11-19 07:24:34', NULL, 1, 1),
(8, '2021-11-19 07:25:06', NULL, 4, 1),
(9, '2021-11-19 07:30:41', NULL, 5, 1),
(10, '2021-11-19 07:32:29', NULL, 2, 1),
(11, NULL, '2021-11-19 07:34:21', 2, 1),
(12, NULL, '2021-11-19 07:35:52', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `userID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  `accessRights` varchar(200) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `firstName`, `lastName`, `email`, `username`, `password`, `accessRights`) VALUES
(1, 'dallas', 'little', 'mdt@hot.com', 'dallaslittle', '$2b$06$S9ZZq26vAGLi6ebqiAiZuuAz.wW6i48/SBrRzV3Qu3JrZMaw7o7pG', 'admin'),
(2, 'Pam', 'Rosel', 'pam@mail.com', 'pamrosel2', '$2b$06$Zvqn8UZkBlRYtwNutZuQLuwHoRt7nh8QqlFEoCJHODVTQ4QnMqJ0u', 'Admin'),
(3, 'new', 'user', 'new@mail.com', 'newUser', '$2b$06$caKXrSrUTeZ9xZvw9SMTruBYUDi.8SZfNIYJtk2YKX01nOyr1hYDO', 'user'),
(4, 'user', 'delete', 'mail@mail.com', 'userdelete', '$2b$06$dzc0HHVN4dav8USaSAS7E.O4VmRkm/wNr1Rgzlks4uZPC/dFJIabG', 'user'),
(5, 'new', 'user33', 'mail@mail.com', 'user3', '$2b$06$i.V0rYyI0fB7h0vBoxohhuJZI8i5NjMhoUSX/M2mIPs/w1R8gMdLC', 'user'),
(9, 'new', 'user3', 'mail@mail.com', 'user4', '$2b$06$V8FwlmXHh3sSP1CY/Bh0/ertB.LeddeiuP8RugWMurPt4X0DA7WPO', 'user');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `fk_author` FOREIGN KEY (`authorID`) REFERENCES `author` (`authorID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bookplot`
--
ALTER TABLE `bookplot`
  ADD CONSTRAINT `fk_bookID_P` FOREIGN KEY (`bookID`) REFERENCES `book` (`bookID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `changelog`
--
ALTER TABLE `changelog`
  ADD CONSTRAINT `fk_bookID_C` FOREIGN KEY (`bookID`) REFERENCES `book` (`bookID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_userID_C` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
