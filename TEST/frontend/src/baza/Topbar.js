import '../css/topbar.css'
import logo from '../pics/logo.png'
import React, { useState, useEffect } from 'react';
const axios = require('axios');

const Topbar = () => {

    const [name, setName] = useState('');
    const [is_auth, setAuth] = useState(0);
    const [a1, setA1] = useState(<a href="accounts/login">Login</a>);
    const [a2, setA2] = useState(<a href="accounts/register">Register</a>);

    useEffect(() => {
        axios.get('api/check')
        .then(res => {
            console.log(res)
            if (res.data['isAuth'] === "1"){
                setName(res.data['name'])
                setAuth(1)
            } else {setAuth(0)}
        })
    })

    if (is_auth === 1) {
        setA1(<a href="api/">{name}</a>)
        setA2(<a href="accounts/logout">Logout</a>)
    }

    return (
        <div className="top__menu__wrapper">
            <div className="top__menu">
                <a href="/" className="logo__wrapper">
                    <img alt="" src={logo} className="logo" />
                </a>

                <div className="nav__bar">
                    <a href="/api">
                        <div className="center__menu__elem news">
                            <div className="moving__part"></div>
                            <div className="red">Н</div>
                            <div className="orange">о</div>
                            <div className="yellow">в</div>
                            <div className="green">о</div>
                            <div className="lblue">с</div>
                            <div className="blue">т</div>
                            <div className="purple">и</div>
                        </div>
                    </a>

                    <div className="center__menu__elem schedule">
                        Расписание
                    </div>

                    <div className="center__menu__elem groups">
                        <a href="api/">Группы</a>
                    </div>
                </div>

                <div className="right__top__menu">
                    {a1} | {a2}
                </div>
            </div>
        </div>
    );
}

export default Topbar;
