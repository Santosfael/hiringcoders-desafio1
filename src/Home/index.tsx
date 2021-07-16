import { useState } from 'react';

import Header from '../components/Header';
import '../styles/global.css';
import "./styles.css";
import ImgBlackFriday from '../assets/black-friday.svg';
import ImgProduct1 from '../assets/notebook.png';

function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    function handleSubmit() {
        const nameEmail = {
            name,
            email
        };
        localStorage.setItem('@data-user', JSON.stringify(nameEmail));
        setEmail("");
        setName("");
        alert("Dados salvo com sucesso!");
    }


    return (
        <div id="container">
            <Header />
            <div className="content">
                <div>
                    <h3 className="title">Cadastre-se!<br/>Para ficar por dentro das promoções</h3>
                    <div className="content-banner-black-friday"> 
                    <img src={ImgBlackFriday} alt="Black Friday" className="img-black-friday"/>
                        <div className="content-register">
                            <p className="title-input">Nome</p>
                            <input
                                placeholder="digite seu nome"
                                className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <p className="title-input">E-mail</p>
                            <input
                                type="email"
                                placeholder="digite seu e-mail"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <button className="button-submit" onClick={handleSubmit}>
                                Cadastrar
                            </button>
                        </div>
                        
                    </div>
                </div>

                <h2 className="title-bunner">Produtos em promoções</h2>
                <div className="content-card-product">
                    <div className="card-product">
                        <img src={ImgProduct1} alt="Black Friday" className="img-item"/>
                        <span className="span-title">Notebook</span>
                        <button className="button-product">
                             Cadastrar
                        </button>
                    </div>
                    <div className="card-product">
                        <img src={ImgProduct1} alt="Black Friday" className="img-item"/>
                        <span className="span-title">Smartphone</span>
                        <button className="button-product">
                             Cadastrar
                        </button>
                    </div>
                    <div className="card-product">
                        <img src={ImgProduct1} alt="Black Friday" className="img-item"/>
                        <span className="span-title">Placa de vídeo</span>
                        <button className="button-product">
                             Cadastrar
                        </button>
                    </div>
                </div>
                <footer>
                    Rafael Rocha dos Santos
                </footer>
            </div>
        </div>
    )
}

export default Home;