import React, { useState } from "react";
import "./Cadastro.css";

const Cadastro = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("As senhas não correspondem!");
            return;
        }

        console.log(formData);
    };

    return (
        <div className="cadastro-container">
            <h2>Assine e acompanhe sua assinatura em um só lugar!</h2>
            <form onSubmit={handleSubmit} className="cadastro-form">
                <div className="cadastro-group">
                    <label>Nome Completo</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Digite aqui seu nome completo"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="cadastro-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite aqui o seu e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="cadastro-group">
                    <label>Senha</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Digite aqui sua senha"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="cadastro-group">
                    <label>Confirmar Senha</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirme sua senha"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="cadastro-button">
                    Cadastrar-se
                </button>
                <p>
                    Já possui uma conta? <a href="/login">Iniciar sessão</a>
                </p>
            </form>
        </div>
    );
};

export default Cadastro;
