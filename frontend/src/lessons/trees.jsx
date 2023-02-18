import Topbar from "../baza/Topbar";
import '../css/style.css'
import React from 'react';
import MyTabs from "../baza/MyTabs";
import Question from "../baza/question";
import SyntaxHightlighterPython from "../baza/CodeBlocksPython";

const code1 = `for (int i = 0; i < 5; i++){
    cout << i;
    print(1)
}`

const Trees = () => {
    return (
        <div>
            <Topbar></Topbar>

            <div style={{ maxWidth: 950, textAlign: 'left', margin: '0 auto'}}>
                <h1 style={{ maxWidth: 950, marginBottom: 0, marginTop: 40}}>Темы:</h1>
            </div>

            <div className="main__cont">
                
                <MyTabs themes={['gay', 'sex']}>

                    <div>
                        say
                        <SyntaxHightlighterPython code={code1} />
                    </div>

                    <div>
                        gex
                    </div>

                </MyTabs>
            </div>
        </div>
    )
}

export default Trees