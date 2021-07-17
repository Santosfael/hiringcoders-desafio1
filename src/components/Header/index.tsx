import { useState } from 'react';
import { Link } from 'react-router-dom';

import ImgFechar from '../../assets/fechar.svg'
import ImgMenu from '../../assets/menu.svg';
import './styles.css';

function Header() {
    const [isClick, setIsClick] = useState(false);

    function handleMenu() {
        setIsClick(true);
        if(isClick) {
            setIsClick(false);
        }
    }

    return (
        <div className="content-header">
            <h1 className="title">E-commerce</h1>
            <header className="header">
                
                <nav className="navbar">
                    <ul className="header-list"><Link to="" className="link-list">Home</Link></ul>
                    <ul className="header-list"><Link to="" className="link-list">Produtos</Link></ul>
                    <ul className="header-list"><Link to="" className="link-list">Sobre</Link></ul>
                    <ul className="header-list"><Link to="" className="link-list">Cadastro</Link></ul>
                </nav>
                <div className="content-navbar2">
                    {
                        isClick ?
                        <>
                            <div>
                                <ul className="header-list"><Link to="" className="link-list">Home</Link></ul>
                                <ul className="header-list"><Link to="" className="link-list">Produtos</Link></ul>
                                <ul className="header-list"><Link to="" className="link-list">Sobre</Link></ul>
                                <ul className="header-list"><Link to="" className="link-list">Cadastro</Link></ul>
                            </div>
                        </>: <></>
                    }
                    <button className="icon-button" onClick={handleMenu}>
                        {
                            isClick
                            ?<img src={ImgFechar} alt="Menu" className="icon-menu" />
                            :<img src={ImgMenu} alt="Menu" className="icon-menu" />
                        }
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header;