import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CadastroEmpresas from './páginas/CadastroEmpresas/CadastroEmpresas';

const App = () => {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1>CRM de Vendas</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/cadastro-empresas">Cadastro de Empresas</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<h2>Bem-vindo ao CRM de Vendas!</h2>} />
                        <Route path="/cadastro-empresas" element={<CadastroEmpresas />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;