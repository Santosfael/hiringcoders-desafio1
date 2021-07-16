import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
    return (
        <div className="content-header">
            <h1 className="title">E-commerce</h1>
            <header className="header">
                <ul className="header-list"><Link to="" className="link-list">Home</Link></ul>
                <ul className="header-list"><Link to="" className="link-list">Produtos</Link></ul>
                <ul className="header-list"><Link to="" className="link-list">Sobre</Link></ul>
                <ul className="header-list"><Link to="" className="link-list">Cadastro</Link></ul>
            </header>
        </div>
    )
}

export default Header;