import React, { useState } from 'react';
import './CadastroEmpresas.css';

const CadastroEmpresas = () => {
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [setor, setSetor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nome, cnpj, setor });
        setNome('');
        setCnpj('');
        setSetor('');
    };

    return (
        <div className="cadastro-empresas">
            <h1>Cadastro de Empresas</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome da Empresa:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>CNPJ:</label>
                    <input 
                        type="cnpj" 
                        value={cnpj} 
                        onChange={(e) => setCnpj(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Setor:</label>
                    <input 
                        type="text" 
                        value={setor} 
                        onChange={(e) => setSetor(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroEmpresas;