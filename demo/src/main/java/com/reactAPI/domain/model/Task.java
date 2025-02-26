package com.reactAPI.domain.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tasks") // Nome da tabela no banco
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100) // Define que title é obrigatório e tem limite de 100 caracteres
    private String title;

    @Column(length = 500) // Permite até 500 caracteres na descrição
    private String description;

    @Column(nullable = false) // Não permite valores nulos
    private boolean completed;
}
