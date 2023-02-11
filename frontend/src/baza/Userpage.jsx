import React, { useState, useEffect } from 'react';
import Topbar from "./Topbar";
import '../css/style.css'
const axios = require('axios');

const Userpage = () => {
    const [username, setUsername] = useState("")

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ROOT_ADDR}api/check-user`)
            .then(res => {
                console.log("//////////////", res.data.username)
                if (res.data['username']) { setUsername(res.data['username']) }
            })
    }, [])

    return (
        <div>
            <Topbar />
            <h1>{username}</h1>
        </div>
    )
}

export default Userpage
