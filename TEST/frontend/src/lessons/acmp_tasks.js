import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";

const Task = (props) => {
    let solved = props.solved
    let text = props.text
    let st = {color: "black"}

    if (solved) st.color = "green"

    return(
        <li style={st}>{text}</li>
    )
}
// [["link", "1"], ["link", "2"]]
const AcmpTasks = (props) => {
    const [is_active, setActive] = useState(0)
    const links = props.links
    const [list, setList] = useState([])
    let b = false


    const check = () => {
        axios.get(`${process.env.REACT_APP_ROOT_ADDR}api/check_acmp_tasks`)
            .then(res => {
                let data = []
                for (let i = 0; i < links.length; i++){

                    if (res.data.tasks.includes('' + links[i][1])) {
                        console.log("victory");
                        data.push(<Task solved={1} text={links[i][0]}></Task>);
                    }
                    else data.push(<Task solved={0} text={links[i][0]}></Task>)
                }

                setList(data)
            })
    }

    useEffect(() => {
        check()
    }, [])

    console.log(list)


    axios.get(`${process.env.REACT_APP_ROOT_ADDR}api/check-user`)
        .then(res => {
            console.log("привет")
            if (res.data.myuser.acmp_id !== null) setActive(1)
        })
    b = !(is_active === 1);

    return (
        <div>
            <ul>
                {list}
            </ul>
            <button disabled={b} onClick={() => check()}>Проверить</button>
        </div>
    )
}

export default AcmpTasks