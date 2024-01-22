-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Jan-2024 às 05:30
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `doxo-mirandinha`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorys`
--

CREATE TABLE `categorys` (
  `id` int(11) NOT NULL,
  `uuid` varchar(36) NOT NULL,
  `code` varchar(100) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createduser_id` int(11) DEFAULT NULL,
  `updateuser_id` int(11) DEFAULT NULL,
  `deleteduser_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `categorys`
--

INSERT INTO `categorys` (`id`, `uuid`, `code`, `name`, `status`, `createdAt`, `updatedAt`, `deletedAt`, `createduser_id`, `updateuser_id`, `deleteduser_id`) VALUES
(1, '123456', '123456', 'categoria 1', 1, '2024-01-12 05:17:28', NULL, NULL, NULL, NULL, NULL),
(3, '', '1234567', 'categoria 5', 1, '2024-01-12 04:29:31', '2024-01-12 04:29:31', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `discounts`
--

CREATE TABLE `discounts` (
  `id` int(11) NOT NULL,
  `uuid` varchar(36) NOT NULL,
  `code` varchar(100) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `discount` decimal(19,2) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createduser_id` int(11) DEFAULT NULL,
  `updateduser_id` int(11) DEFAULT NULL,
  `deleteduser_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `discounts`
--

INSERT INTO `discounts` (`id`, `uuid`, `code`, `name`, `discount`, `category_id`, `status`, `createduser_id`, `updateduser_id`, `deleteduser_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '234523452345', '2345', 'teste', '10.00', 1, 1, 1, NULL, NULL, '2024-01-12 04:44:22', NULL, NULL),
(2, '234523452345', 'tesntando', 'michael', '10.00', 1, 1, 1, NULL, NULL, '2024-01-12 04:44:22', '2024-01-12 04:13:00', NULL),
(3, '', 'desconto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-12 04:08:49', '2024-01-12 04:08:49', NULL),
(4, '', NULL, 'desconto', '10.00', NULL, NULL, NULL, NULL, NULL, '2024-01-12 04:09:41', '2024-01-12 04:09:41', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `grupos`
--

CREATE TABLE `grupos` (
  `id` int(11) NOT NULL,
  `uuid` varchar(36) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `grupos`
--

INSERT INTO `grupos` (`id`, `uuid`, `name`, `description`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2, 'qwer', 'title 2', 'description', 0, '2020-09-17 00:00:00', '2024-01-12 03:04:35', NULL),
(3, 'qwer', 'title 3', 'description 4', 0, '2020-09-17 00:00:00', '2020-09-17 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tutorials`
--

CREATE TABLE `tutorials` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `tutorials`
--

INSERT INTO `tutorials` (`id`, `title`, `description`, `published`, `createdAt`, `updatedAt`) VALUES
(1, 'title 1', 'description 1', 0, '2020-09-17 00:00:00', '2020-09-17 00:00:00'),
(2, 'title 2', 'description 2', 0, '2020-09-17 00:00:00', '2020-09-17 00:00:00'),
(3, 'title 3', 'description 4', 0, '2020-09-17 00:00:00', '2020-09-17 00:00:00'),
(4, 'title 4', 'description 4', 0, '2020-09-17 00:00:00', '2020-09-17 00:00:00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tutorials`
--
ALTER TABLE `tutorials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `grupos`
--
ALTER TABLE `grupos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tutorials`
--
ALTER TABLE `tutorials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
