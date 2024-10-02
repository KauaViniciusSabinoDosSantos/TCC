package br.itb.projeto.ironworksgym.model.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long ID;
	private String Nome;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private LocalDate Data_Nascimento;
	private String Telefone;

	@Column(name = "Email")
	private String email;
	private String Senha;
	private String CPF;
	private String Torre;
	private String Apartamento;
	private String StatusUsuario;

	public Usuario() {
	}

	public Usuario(long iD, String nome, LocalDate data_Nascimento, String telefone, String email, String senha,
			String cPF, String torre, String apartamento) {
		super();
		ID = iD;
		Nome = nome;
		Data_Nascimento = data_Nascimento;
		Telefone = telefone;
		this.email = email;
		Senha = senha;
		CPF = cPF;
		Torre = torre;
		Apartamento = apartamento;
	}

	public long getID() {
		return ID;
	}

	public void setID(long iD) {
		ID = iD;
	}

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public LocalDate getData_Nascimento() {
		return Data_Nascimento;
	}

	public void setData_Nascimento(LocalDate data_Nascimento) {
		Data_Nascimento = data_Nascimento;
	}

	public String getTelefone() {
		return Telefone;
	}

	public void setTelefone(String telefone) {
		Telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return Senha;
	}

	public void setSenha(String senha) {
		Senha = senha;
	}

	public String getCPF() {
		return CPF;
	}

	public void setCPF(String cPF) {
		CPF = cPF;
	}

	public String getTorre() {
		return Torre;
	}

	public void setTorre(String torre) {
		Torre = torre;
	}

	public String getApartamento() {
		return Apartamento;
	}

	public void setApartamento(String apartamento) {
		Apartamento = apartamento;
	}

	public String getStatusUsuario() {
		return StatusUsuario;
	}

	public void setStatusUsuario(String statusUsuario) {
		StatusUsuario = statusUsuario;
	}

}
