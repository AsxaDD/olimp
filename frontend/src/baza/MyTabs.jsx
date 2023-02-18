import '../css/style.css'
import React, {useEffect, useState} from 'react';
import {uid} from 'react-uid';
import gradientFunc from 'random-gradient'


// USAGE //
//
//
// <MyTabs themes={['Tab1', 'Tab2', ...]}>
//
//     <div>
//         content associated with Tab1
//     </div>
//
//     <div>
//         content associated with Tab2
//     </div>
//
//     ...
//
// </MyTabs>


const randStr = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const TabNavItem = (props) => {
    const handleClick = () => {
        let d = randStr(15)
        props.setActiveTab(props.id)
        props.setGrad(gradientFunc(d))
    };

    return (
        <li
            onClick={handleClick}
            className={props.activeTab === props.id ? "theme__selected" : "theme"}
            style={props.activeTab === props.id ? {background: `${props.gradient}`} : {background: `rgb(166, 166, 166)`}}
        >
            { props.title }
        </li>
    );
};
const TabContent = ({id, activeTab, children}) => {
    return (
        activeTab === id ? <div>{ children }</div> : null
    );
};

const MyTabs = (props) => {
    const [activeTab, setActiveTab] = useState('0');
    const [gradient, setGradient] = useState(`${gradientFunc(randStr(15))}`)
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    useEffect(() => {
        let tmp = []

        for (let i in props.themes){
            tmp.push(<TabNavItem
                title={props.themes[i]} id={`${i}`} activeTab={activeTab}
                setActiveTab={setActiveTab} gradient={gradient}
                setGrad={setGradient} key={uid(i)}
            ></TabNavItem>)
        }

        setData(tmp)
    }, [activeTab, gradient])

    useEffect(() => {
        let tmp = []

        if (props.children.length){
            for (let i in props.children){
                tmp.push(<TabContent id={`${i}`} key={uid(i)}
                                     activeTab={activeTab}>{props.children[i]}</TabContent>)
            }
        } else tmp.push(<TabContent id={`0`} key={uid(0)} activeTab={activeTab}>{props.children}</TabContent>)

        setData2(tmp)
    }, [activeTab])

    return (
        
        <div className="Tabs">
            <ul className="themes">
                {data}
            </ul>

            <div className="main__cont">
                {data2}
            </div>
        </div>
    );
};

export default MyTabs;














