import '../css/style.css'
import SyntaxHightlighterCPP from "../baza/CodeBlocksCPP";
import React, {useEffect} from 'react';
import Question from "../baza/question";
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


const Article = (props) => {
    let data = props.data
    let headers = []
    let res = []
    let sidebar = []

    

    for (let i in data) {
        let content = data[i][0]
        let tag = data[i][1]
        
        if (tag === 'h1') {
            let id = randStr(5)
            headers.push([content, id])
            res.push(<h1 id={id}>{content}</h1>)
        } 
        else if (tag === 'q') {
            // [ ['question', ['ans1', ['ans2', 1], 'ans3'] ], 'q']
            let question = content[0]
            let answers = content[1]
            res.push(<Question question={question} answers={answers}/>)
        } 
        else if (tag === 'h3') {
            res.push(<h3>{content}</h3>)
        } 
        else if (tag === 'h4') {
            res.push(<h4>{content}</h4>)
        } 
        else if (tag === 'h5') {
            res.push(<h5>{content}</h5>)
        } 
        else if (tag === 'h2') {
            res.push(<h2>{content}</h2>)
        } 
        else if (tag === 'img') {
            res.push(<img alt='' src={content} className='picture'></img>)
        } 
        else if (tag === 'code') {
            res.push(<SyntaxHightlighterCPP code={content}/> )
        } 
        else if (tag === 'p') {
            res.push(<p>{content}</p>)
        }
        else if (tag === 'ul') {
            let lis = []

            for (let j in content) {
                lis.push(<li>{content[j]}</li>)
            }

            res.push(<ul>{lis}</ul>)
        } 
        else if (tag === 'ol') {
            let lis = []

            for (let j in content) {
                lis.push(<li>{content[j]}</li>)
            }

            res.push(<ol>{lis}</ol>)
        } 
    }

    for (let i in headers) {
        let id = '#' + headers[i][1]
        let header = headers[i][0]
        sidebar.push(<a href={id}><li>{header}</li></a>)
    }


    return (
        <div className="flex__cont__for__articles">
            <div className="article">
                <div className="text">
                    {res}
                </div>
            </div>

            <div className="sidebar">
                <ul>
                    {sidebar}
                </ul>
            </div>
        </div>
    );
}


export default Article;
