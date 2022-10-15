-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 15, 2022 at 09:03 AM
-- Server version: 8.0.30-0ubuntu0.22.04.1
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobile_partol`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'Test@123');

-- --------------------------------------------------------

--
-- Table structure for table `Campany`
--

CREATE TABLE `Campany` (
  `id` int NOT NULL,
  `campany_name` varchar(100) NOT NULL,
  `Tin_number` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Campany`
--

INSERT INTO `Campany` (`id`, `campany_name`, `Tin_number`, `category`, `email`, `password`) VALUES
(1, 'hjh', 'hhhh', 'fghh', 'cghh', 'fhjh'),
(2, 'ritco', '1120023', 'transport', 'iraguhayves0788@gmail.com', 'qwerty'),
(3, 'Yahoo car', '10223453', 'Transport', 'yahoocar@gmail.com', 'qwerty'),
(4, 'ritco', '12334433', 'hhhgff', 'irayvesmuli01@gmail.com', 'qwerty'),
(5, 'hhjf', '231244', 'ghfd', 'irayvesmuli01@gmail.com', 'qeert'),
(6, 'jiiiu', 'hhhggg', 'hhjj', 'irayvesmuli01@gmail.com', 'ghhjhgg');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id` int NOT NULL,
  `position` varchar(100) NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `deadline` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`id`, `position`, `description`, `deadline`) VALUES
(1, 'Manager', 'vghhh', '12-sept-2022'),
(5, 'Head Master', 'This position u must have at least A0 or A1 in eduction', '12-Aug-2022'),
(6, 'Manager', 'This position muhsbsdaafajhb sdd sdfb sa', '14-sept-2022'),
(7, 'Teacher', 'this fsmz mdsjdakxjbvjksbkvbskjb', '23-sept-2022');

-- --------------------------------------------------------

--
-- Table structure for table `Job_Applied`
--

CREATE TABLE `Job_Applied` (
  `id` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `position` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `letter` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `dinie` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Job_Applied`
--

INSERT INTO `Job_Applied` (`id`, `email`, `position`, `status`, `letter`, `phone`, `name`, `description`, `dinie`) VALUES
(4, 'irayvesmuli01@gmail.com', 'Manager', 'Approved', 'dfhgh', '098766855', 'muhawenimana', '', 'No'),
(5, 'mickrubanza@gmail.com', 'Teacher', 'Approved', 'thifghhgghjfjjgfb', '0789113840', 'rubanza michael', '', 'No'),
(6, 'irayvesmuli01@gmail.com', 'Teacher', 'unproved', 'ghjkkjggfgjjggjk', '0788512323', 'muhawenimana', 'this fsmz mdsjdakxjbvjksbkvbskjb', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`) VALUES
(1, 'admin', 'qwerty');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `reg` varchar(100) NOT NULL,
  `faculity` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `reg`, `faculity`, `email`, `password`) VALUES
(1, 'muhawenimana', '220000412', 'computer science ', 'irayvesmuli01@gmail.com', 'qwerty'),
(2, 'rubanza michael', 'd/bcs/19/09/11630', 'computer science', 'mickrubanza@gmail.com', '123'),
(3, 'nshimiyinana', '2200002567', 'computer science ', 'mubi@gmail.com', 'qwerty');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Campany`
--
ALTER TABLE `Campany`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Job_Applied`
--
ALTER TABLE `Job_Applied`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Campany`
--
ALTER TABLE `Campany`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Job_Applied`
--
ALTER TABLE `Job_Applied`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
