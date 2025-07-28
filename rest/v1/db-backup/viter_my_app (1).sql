-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2025 at 10:00 AM
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
-- Table structure for table `my_app_header`
--

CREATE TABLE `my_app_header` (
  `header_aid` int(11) NOT NULL,
  `header_is_active` tinyint(1) NOT NULL,
  `header_name` varchar(50) NOT NULL,
  `header_link` text NOT NULL,
  `header_created` datetime NOT NULL,
  `header_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_app_header`
--

INSERT INTO `my_app_header` (`header_aid`, `header_is_active`, `header_name`, `header_link`, `header_created`, `header_updated`) VALUES
(8, 1, 'Home', '#home', '2025-07-25 11:53:54', '2025-07-25 12:48:34'),
(9, 1, 'About', '#about', '2025-07-25 11:54:07', '2025-07-25 11:54:07'),
(10, 1, 'Services', '#services', '2025-07-25 11:54:23', '2025-07-25 11:54:23'),
(11, 1, 'Contact', '#contact', '2025-07-25 11:54:40', '2025-07-25 11:54:40'),
(12, 1, 'Footer', '#footer', '2025-07-28 07:06:38', '2025-07-28 14:25:37');

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
-- Table structure for table `my_app_testimonials`
--

CREATE TABLE `my_app_testimonials` (
  `testimonial_aid` int(11) NOT NULL,
  `testimonial_is_active` tinyint(1) NOT NULL,
  `testimonial_name` varchar(50) NOT NULL,
  `testimonial_position` text NOT NULL,
  `testimonial_description` text NOT NULL,
  `testimonial_image` text NOT NULL,
  `testimonial_created` datetime NOT NULL,
  `testimonial_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_app_testimonials`
--

INSERT INTO `my_app_testimonials` (`testimonial_aid`, `testimonial_is_active`, `testimonial_name`, `testimonial_position`, `testimonial_description`, `testimonial_image`, `testimonial_created`, `testimonial_updated`) VALUES
(2, 1, 'Sarah Johnson', 'Marketing Director, TechCorp', '\"The team delivered our project ahead of schedule with\n                      exceptional quality. Our online sales increased by 120%\n                      within three months!\"', '/images/testimonials-1.webp', '2025-07-24 14:15:23', '2025-07-28 14:25:26'),
(3, 1, 'Michael Chen', 'CEO, StartupHu', '\"From design to deployment, their attention to detail was impressive. They became true partners in our digital transformation journey.\"', '/images/testimonials-2.webp', '2025-07-24 14:26:29', '2025-07-28 13:39:50'),
(4, 1, 'Emma Rodriguez', 'CMO, GrowthSolutions', '\"Their SEO strategy tripled our organic traffic in 6 months. We\'ve seen a dramatic improvement in lead quality and conversion rates.\"', '/images/testimonials-3.webp', '2025-07-24 14:27:24', '2025-07-24 14:27:24');

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
(2, 1, 'Web Development', 'Custom website built with modern frameworks like Next.js and React for optimal performance.', '../images/card-icon-web-development.webp', '#', 'View Packages', '2025-07-21 09:38:21', '2025-07-21 09:38:21'),
(3, 1, 'UI/UX Design', 'Beautiful interfaces designed to convert visitors with strategic user experience flows.', '../images/card-icon-ui-ux-design.webp', '#', 'See Portfolio', '2025-07-23 01:07:11', '2025-07-28 13:40:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `my_app_header`
--
ALTER TABLE `my_app_header`
  ADD PRIMARY KEY (`header_aid`);

--
-- Indexes for table `my_app_test`
--
ALTER TABLE `my_app_test`
  ADD PRIMARY KEY (`test_aid`);

--
-- Indexes for table `my_app_testimonials`
--
ALTER TABLE `my_app_testimonials`
  ADD PRIMARY KEY (`testimonial_aid`);

--
-- Indexes for table `my_app_web_services`
--
ALTER TABLE `my_app_web_services`
  ADD PRIMARY KEY (`web_services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `my_app_header`
--
ALTER TABLE `my_app_header`
  MODIFY `header_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `my_app_test`
--
ALTER TABLE `my_app_test`
  MODIFY `test_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `my_app_testimonials`
--
ALTER TABLE `my_app_testimonials`
  MODIFY `testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `my_app_web_services`
--
ALTER TABLE `my_app_web_services`
  MODIFY `web_services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
