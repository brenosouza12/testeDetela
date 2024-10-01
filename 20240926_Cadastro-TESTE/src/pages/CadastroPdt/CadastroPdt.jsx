import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import './CadastroPdt.css';

function App() {
    const [produto, setProduto] = useState({
        nome: '',
        categoria: '',
        tamanho: '',
        permanencia: ''
    });

    const [produtos, setProdutos] = useState([]);

    const handleChange = (e) => {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProdutos([...produtos, produto]);
        setProduto({ nome: '', categoria: '', tamanho: '', permanencia: '' }); // Limpar formulário
    };

    return (
        <div>
            <Navbar /> {/* Adiciona a navbar ao topo */}

            <div className="container">
                <div className="admin-section">
                    <img src='./images/adm.png' alt="Logo Admin" className="admin-logo" />
                    <h2>Olá Administrador</h2>
                </div>

                <div className="content-section">
                    <div className="image-section">
                        <h2>Cadastrar Produto</h2>                   
                    </div>

                    <div className="form-section">
                        <h2>Cadastro de Produto</h2>
                        <form onSubmit={handleSubmit} className="form-container">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={produto.nome}
                                    onChange={handleChange}
                                    placeholder="Digite aqui o nome do produto"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="categoria">Categoria</label>
                                <input
                                    type="text"
                                    name="categoria"
                                    value={produto.categoria}
                                    onChange={handleChange}
                                    placeholder="Digite aqui a categoria do produto"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="tamanho">Tamanho</label>
                                <input
                                    type="text"
                                    name="tamanho"
                                    value={produto.tamanho}
                                    onChange={handleChange}
                                    placeholder="Digite aqui o tamanho do produto em metros"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="permanencia">Tempo de Permanência</label>
                                <input
                                    type="text"
                                    name="permanencia"
                                    value={produto.permanencia}
                                    onChange={handleChange}
                                    placeholder="Digite aqui o tempo de permanência"
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-button">Adicionar Planta</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
