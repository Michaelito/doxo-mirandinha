-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Jan-2024 às 23:43
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 7.4.33

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
  `uuid` varchar(255) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `collections`
--

CREATE TABLE `collections` (
  `id` int(64) NOT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `code` int(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `collections`
--

INSERT INTO `collections` (`id`, `uuid`, `code`, `description`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, NULL, 1245, 'teste crud', 1, '2024-01-12 23:34:59', '2024-01-12 23:34:59', '2024-01-12 23:34:59');

-- --------------------------------------------------------

--
-- Estrutura da tabela `discounts`
--

CREATE TABLE `discounts` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createduser_id` int(11) DEFAULT NULL,
  `updateduser_id` int(11) DEFAULT NULL,
  `deleteduser_id` int(11) DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `discounts`
--

INSERT INTO `discounts` (`id`, `uuid`, `code`, `name`, `discount`, `status`, `createduser_id`, `updateduser_id`, `deleteduser_id`, `updatedAt`, `deletedAt`, `createdAt`) VALUES
(2, 'c41fecea-648e-4df1-be2f-1811a6c2d793', NULL, 'teste', NULL, NULL, NULL, NULL, NULL, '2024-01-12 21:57:19', NULL, '2024-01-12 21:57:19'),
(3, 'da824362-6280-4eef-bd4e-3baa8fca4d1d', 10101, 'test01', NULL, NULL, NULL, NULL, NULL, '2024-01-12 21:58:39', NULL, '2024-01-12 21:58:39'),
(4, 'a8dc2a2b-49d7-412b-b989-e2d5537b7ac9', NULL, 'test01', NULL, NULL, NULL, NULL, NULL, '2024-01-12 22:33:11', NULL, '2024-01-12 22:33:11');

-- --------------------------------------------------------

--
-- Estrutura da tabela `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `groups`
--

INSERT INTO `groups` (`id`, `uuid`, `name`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '877da015-0e4d-446d-92d0-87acc6b5b0ec', 'Teste final', 'Teste do crud', NULL, '2024-01-12 19:21:31', '2024-01-12 19:21:31'),
(3, '2d8566a6-bc6a-409e-a68f-6597b2a79bcf', 'Teste 3', 'Teste do crud', NULL, '2024-01-12 19:21:43', '2024-01-12 19:21:43'),
(4, '08c7e8b2-7bab-41d9-9b37-a1ed2c9b8e41', 'Teste 4', 'Teste do crud', NULL, '2024-01-12 19:21:48', '2024-01-12 19:21:48'),
(5, '78f02b31-dd42-4675-9029-0bafa872d282', 'grupo atualizado 12/01', 'grupo atualizado', NULL, '2024-01-12 19:21:52', '2024-01-12 19:42:07'),
(6, '2c88c676-1f65-4295-968d-8a66f0824f5d', 'Teste 6', 'Teste do crud', NULL, '2024-01-12 22:31:25', '2024-01-12 22:31:25');

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
(4, 'title 4', 'description 4', 0, '2020-09-17 00:00:00', '2020-09-17 00:00:00'),
(6, 'atualizado2', 'atualizado2', 0, '2024-01-11 23:56:03', '2024-01-12 01:33:51'),
(7, 'Jozefl', 'description', 0, '2024-01-12 00:26:00', '2024-01-12 00:26:00'),
(8, 'Jozefl', 'description', 0, '2024-01-12 01:01:21', '2024-01-12 01:01:21');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `groups`
--
ALTER TABLE `groups`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `collections`
--
ALTER TABLE `collections`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tutorials`
--
ALTER TABLE `tutorials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
