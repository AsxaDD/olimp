import '../css/topbar.css'
import logo from '../pics/logo.png'
import React from 'react';

const Topbar = () => {
    let a1 = <span href="accounts/login">ㅤㅤㅤ</span>
    let a2 = <span href="accounts/register">ㅤㅤㅤ</span>


    return (
        <div className="top__menu__wrapper">
            <div className="top__menu">
                <a href="/" className="logo__wrapper">
                    <img alt="" src={logo} className="logo" />
                </a>

                <div className="nav__bar">
                    <a href={`${process.env.REACT_APP_ROOT_ADDR}`}>
                        <div className="center__menu__elem news">
                            Обучение
                        </div>
                    </a>

                    <a href={`${process.env.REACT_APP_ROOT_ADDR}calendar`}>
                        <div className="center__menu__elem schedule">
                            Календарь
                        </div>
                    </a>

                    <div className="center__menu__elem groups">
                        <a href={`${process.env.REACT_APP_ROOT_ADDR}news`}>Новости</a>
                    </div>
                </div>

                <div className="right__top__menu">
                    {a1}  {a2}
                </div>
            </div>
        </div>
    );
}



export default Topbar;
