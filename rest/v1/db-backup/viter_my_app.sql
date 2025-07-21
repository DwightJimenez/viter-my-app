-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2025 at 09:59 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `viter_my_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `my_app_test`
--

CREATE TABLE `my_app_test` (
  `test_aid` int(11) NOT NULL,
  `test_is_active` tinyint(1) NOT NULL,
  `test_name` varchar(128) NOT NULL,
  `test_created` datetime NOT NULL,
  `test_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_app_test`
--

INSERT INTO `my_app_test` (`test_aid`, `test_is_active`, `test_name`, `test_created`, `test_updated`) VALUES
(1, 1, 'My Name', '2025-07-21 03:34:08', '2025-07-21 03:34:08'),
(2, 1, 'Jude Dwight', '2025-07-21 04:26:17', '2025-07-21 04:26:17');

-- --------------------------------------------------------

--
-- Table structure for table `my_app_web_services`
--

CREATE TABLE `my_app_web_services` (
  `web_services_aid` int(11) NOT NULL,
  `web_services_is_active` tinyint(1) NOT NULL,
  `web_services_name` varchar(128) NOT NULL,
  `web_services_description` text NOT NULL,
  `web_services_image` text NOT NULL,
  `web_services_link` text NOT NULL,
  `web_services_text_url` text NOT NULL,
  `web_services_created` datetime NOT NULL,
  `web_services_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_app_web_services`
--

INSERT INTO `my_app_web_services` (`web_services_aid`, `web_services_is_active`, `web_services_name`, `web_services_description`, `web_services_image`, `web_services_link`, `web_services_text_url`, `web_services_created`, `web_services_updated`) VALUES
(2, 1, 'Web Development Image', 'Custom website built with modern frameworks like Next.js and React for optimal performance.', '../images/card-icon-web-development.webp', 'View Packages', '#', '2025-07-21 09:38:21', '2025-07-21 09:38:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `my_app_test`
--
ALTER TABLE `my_app_test`
  ADD PRIMARY KEY (`test_aid`);

--
-- Indexes for table `my_app_web_services`
--
ALTER TABLE `my_app_web_services`
  ADD PRIMARY KEY (`web_services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `my_app_test`
--
ALTER TABLE `my_app_test`
  MODIFY `test_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `my_app_web_services`
--
ALTER TABLE `my_app_web_services`
  MODIFY `web_services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
