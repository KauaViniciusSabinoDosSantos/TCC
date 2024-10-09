USE MASTER IF EXISTS
	  (SELECT * FROM SYS.databases WHERE NAME = 'IronWorksGym')

DROP DATABASE IronWorksGym
GO

CREATE DATABASE IronWorksGym
GO

USE IronWorksGym
GO

SP_HELPDB IronWorksGym



--TABELAS



--DD Usuario


--DROP TABLE Usuario
CREATE TABLE Usuario 
(
	ID INT IDENTITY,
	Nome VARCHAR(50),
	Data_Nascimento SMALLDATETIME,
	Telefone VARCHAR(15),
	Email VARCHAR(50),
	Senha VARCHAR(50),
	CPF VARCHAR(11),
	Torre VARCHAR(1),
	Apartamento VARCHAR(3),
	StatusUsuario VARCHAR(20),

	PRIMARY KEY (ID)
)


--DD Equipamento


--DROP TABLE Equipamento
CREATE TABLE Equipamento 
(
	ID INT IDENTITY,
	Nome VARCHAR(30),
	Quantidade INT,
	StatusEquipamento VARCHAR(20),

	PRIMARY KEY (ID)
)


--DD Agendamento
 

--DROP TABLE Agendamento
CREATE TABLE Agendamento 
(
	ID INT IDENTITY,
	Data_Disponivel SMALLDATETIME,
	Horario_Disponivel CHAR(5) NOT NULL,
	Usuario_ID INT,
	Equipamento_ID INT,
	StatusAgendamento VARCHAR(20),

	FOREIGN KEY(Usuario_ID) REFERENCES Usuario(ID), 
	FOREIGN KEY(Equipamento_ID) REFERENCES Equipamento(ID)
)


--DD Mensagem


--DROP TABLE Mensagem
CREATE TABLE Mensagem
(
	ID INT IDENTITY,
	Data_Mensagem SMALLDATETIME NOT NULL,
	Emissor VARCHAR(100),
	Email VARCHAR(100),
	Telefone VARCHAR(15),
	Texto VARCHAR(400),
	StatusMensagem VARCHAR(20) 

	PRIMARY KEY (ID)
)



--INSERTS



--Usuario


GO
INSERT INTO Usuario (Nome, Data_Nascimento, Telefone, Email, Senha, CPF, Torre, Apartamento, StatusUsuario) 
VALUES ('Daniel Vítor Praes', '20/01/2007', '11913409219', 'danielpraess@gmail.com', 'danielllpraesss', '12345678901', 'D', '123', 'ATIVO')
INSERT INTO Usuario (Nome, Data_Nascimento, Telefone, Email, Senha, CPF, Torre, Apartamento, StatusUsuario)
VALUES ('Victor da Silva Lima', '17/05/2005', '21949728261', 'limaas@gmail.com', 'lowkeypoggers1705', '10987654321', 'C', '98', 'ATIVO')
INSERT INTO Usuario (Nome, Data_Nascimento, Telefone, Email, Senha, CPF, Torre, Apartamento, StatusUsuario) 
VALUES ('João Vitor Pereira', '03/11/2005', '11988564210', 'joaogamer123@gmail.com', 'minecraft135!', '11029384756', 'C', '23', 'ATIVO')
GO

SELECT * FROM Usuario


--Equipamento


GO
INSERT INTO Equipamento (Nome, Quantidade, StatusEquipamento) 
VALUES ('Esteira', '3', 'ATIVO')
INSERT INTO Equipamento (Nome, Quantidade, StatusEquipamento)
VALUES ('Alteres', '4', 'ATIVO')
INSERT INTO Equipamento (Nome, Quantidade, StatusEquipamento) 
VALUES ('Cadeira Extensora', '5', 'ATIVO')
GO

SELECT * FROM Equipamento


--Agendamento


GO
INSERT INTO Agendamento (Data_Disponivel, Horario_Disponivel, Usuario_ID, Equipamento_ID, StatusAgendamento) 
VALUES ('28/06/2024', '09:00', '1', '2', 'ATIVO')
INSERT INTO Agendamento (Data_Disponivel, Horario_Disponivel, Usuario_ID, Equipamento_ID, StatusAgendamento) 
VALUES ('01/07/2024', '12:00', '2', '3', 'ATIVO')
INSERT INTO Agendamento (Data_Disponivel, Horario_Disponivel, Usuario_ID, Equipamento_ID, StatusAgendamento) 
VALUES ('13/07/2024', '16:00', '3', '1', 'ATIVO')
GO

SELECT * FROM Agendamento


-- MENSAGEM


GO
INSERT INTO Mensagem (Data_Mensagem, Emissor, Email, Telefone, Texto,StatusMensagem) 
VALUES ('12/03/2024', 'Daniel', 'danielpraess@gmail.com', '11913409219', 'Teste', 'ATIVO')
INSERT INTO Mensagem (Data_Mensagem, Emissor, Email, Telefone, Texto,StatusMensagem) 
VALUES ('23/04/2024', 'Lucas', 'lucaswolf@gmail.com', '11989224891', 'teste aaaa', 'ATIVO')
INSERT INTO Mensagem (Data_Mensagem, Emissor, Email, Telefone, Texto,StatusMensagem) 
VALUES ('22/06/2024', 'Alessandra', 'aleofc@gmail.com', '11946727789', 'Olá. Teste teste', 'ATIVO')
INSERT INTO Mensagem (Data_Mensagem, Emissor, Email, Telefone, Texto,StatusMensagem) 
VALUES ('22/07/2024', 'Kaua', 'kauabut@gmail.com', '11957838890', 'Olá. Teste', 'ATIVO')
GO

SELECT * FROM Mensagem


	
--UPDATES



--Usuario


UPDATE Usuario SET Apartamento = Apartamento + 3;

SELECT * FROM Usuario;


--Equipamento


UPDATE Equipamento SET Quantidade = Quantidade + 4;

SELECT * FROM Equipamento;


--Agendamento


UPDATE Agendamento SET Data_Disponivel = DATEADD(day, 5, Data_Disponivel);

SELECT * FROM Agendamento;


--Mensagem


UPDATE Mensagem SET Data_Mensagem = DATEADD(day, 10, Data_Mensagem);

SELECT * FROM Mensagem;



--Deletes



--Usuario


DELETE FROM Usuario WHERE Data_Nascimento <= DATEADD(YEAR, -18, GETDATE());


--Equipamento


DELETE FROM Equipamento WHERE Quantidade >= 5;


--Agendamento


DELETE FROM Agendamento WHERE Data_Disponivel = DATEADD(day, -1, Data_Disponivel);


--Mensagem


DELETE FROM Mensagem WHERE StatusMensagem = 'ATIVO'