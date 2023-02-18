import Topbar from "../baza/Topbar";
import '../css/style.css'
import React from 'react';
import MyTabs from "../baza/MyTabs";
import Question from "../baza/question";
import MySyntaxHightlighter from "../baza/CodeBlocksPython";


const Number_theory = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div className="main__cont">
                <h1 style={{ maxWidth: 890}}>Темы:</h1>
                <MyTabs themes={['say', 'gex']}>

                    <div>
                        say
                    </div>

                    <div>
                        gex
                    </div>

                </MyTabs>
            </div>
        </div>
    )
}

export default Number_theory