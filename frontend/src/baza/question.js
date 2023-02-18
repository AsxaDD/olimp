import React, {useEffect, useState} from 'react';
import gradient from 'random-gradient'
import '../css/style.css'
import '../css/question.css'

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

const QuestionAnswer = (props) => {
    const [st, ch_st] = useState('')
    
    useEffect(() => {
        if (props.solved === 1) ch_st('wrong__answer')
    }, [props.solved])

    const func = () => {
        if (props.is_right) {
            ch_st('right__answer')
            props.setSolved(1)
        }
        else ch_st('wrong__answer')
    }

    return <li onClick={func} className={st}>{props.text}</li>

}

const Question = (props) => {
    const [solved, setSolved] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        let tmp = []

        for (let i = 0; i < props.answers.length; i++){
            if (props.answers[i].length === 2 && typeof(props.answers[i]) !== 'string') {
                tmp.push(<QuestionAnswer
                    text={props.answers[i][0]}
                    is_right={1}
                    setSolved={setSolved}
                    key={i}
                />);
            }
            else tmp.push(<QuestionAnswer
                text={props.answers[i]}
                solved={solved}
                key={i}
            />)
        }

        setData(tmp)
    }, [solved])

    return (
        <div className={'question__main'}>
            <h1>{props.question}</h1>
            <ul>{data}</ul>
        </div>
    )
}

export default Question









