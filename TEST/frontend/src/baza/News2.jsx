import '../css/style.css'
import Topbar from "./Topbar";
import React, { useState, useEffect } from 'react';
import '../css/news.css'
import axios from "axios";
import ReactRadioGroup from 'react-simple-radio-button'

const PreNews = (props) => {
    const [cl, setCl] = useState('news__summary__text__closed')
    const [flag, setFlag] = useState(1)

    const func = () => {
        if (flag === 1) {
            setFlag(0)
            setCl('news__summary__text__opened')
        } else {
            setFlag(1)
            setCl('news__summary__text__closed')
        }
    }

    return(
        <div>
            <div className={'prenews__wrapper'}>

                <div className={'news__pic__wrapper'}>
                    <img alt='' src={props.pic} className={'news__pic'}/>
                </div>

                <div className={'news__title__date__link__wrapper'}>
                    <h3>{props.title}</h3>
                    <div className={'news__date'}>
                        <div>{props.date.day === '' ? '' : `${props.date.day}.`}</div>
                        <div>{props.date.month === '' ? '' : `${props.date.month}.`}</div>
                        <div>{props.date.year}</div>
                    </div>

                    <a className={'news__link'} href={props.link} target="_blank" rel="noreferrer">Источник</a>
                    <button
                        className={'news__summary__button'}
                        onClick={() => {func()}}
                    >Краткое содержание</button>
                </div>
            </div>

            <div className={cl}>
                {props.content}
            </div>
        </div>
    )
}



const MyNews2 = () => {
    const [latest_id, setLatest_id] = useState(-1)
    const [news, setNews] = useState([])
    const [formData, setFormData] = useState({
        lang: 'ru',
        tag: 'it',
    })


    const returnPreNewsArray = (data) => {
        let tmp_arr = []
        for (let el in data) {
            let v = <PreNews key={data[el].id} title={data[el].title} date={data[el].date}
                             link={data[el]['link']} pic={data[el].pic} content={data[el].content}/>
            tmp_arr.push(v)
        }
        return tmp_arr
    }

    const doRequest = (lang, tag, is_new) => {
        axios.post(`${process.env.REACT_APP_ROOT_ADDR}api/${lang}_${tag}_news/`, {
            'latest_id': `${latest_id}`,
        }).then(res => {
            try{
                console.log(res.data)
                let tmp_arr = returnPreNewsArray(res.data)
                if (is_new === 1) setNews(tmp_arr)
                else {
                    tmp_arr = news.concat(tmp_arr)
                    setNews(tmp_arr)
                }
                setLatest_id(tmp_arr[tmp_arr.length - 1].key)
            } catch (e) {
                console.log("Больше нет новостей")
            }
        })
    }

    useEffect(() => {
        doRequest(formData.lang, formData.tag, 1)
    }, [])

    useEffect(() => {
        doRequest(formData.lang, formData.tag, 1)
    }, [formData])

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value,
        })
        setLatest_id(-1)
    }


    return(
        <div>
            <Topbar />
            <div className={'main__cont'} style={ {flexWrap: 'nowrap'} }>
                <div className={'news__cont'}>
                    {news}
                    <div className={'news__button__wrapper'}>
                        <div
                            onClick={() => doRequest(formData.lang, formData.tag, 0)}
                            className={'news__download__more__butt'}
                        >Загрузить ещё</div>
                    </div>
                </div>
                <div className={'sidebar news__sidebar'}>
                    <spav style={{color: 'grey'}}>Язык</spav>
                    <hr className={'news__sidebar__hr'} />
                    <form>
                        <div className={'news__sidebar__radio'}>
                            <input onChange={handleChange}
                                   type="radio"
                                   name="lang"
                                   value="ru"
                                   id="ru_lang"
                                   checked={formData.lang === 'ru'}/>Русский<br />
                        </div>
                        <div className={'news__sidebar__radio'}>
                            <input onChange={handleChange}
                                   type="radio"
                                   name="lang"
                                   value="eng"
                                   id="eng_lang"

                                   checked={formData.lang === 'eng'}/>Английский
                        </div>

                        <br />

                        <spav style={{color: 'grey'}}>Тематика</spav>
                        <hr className={'news__sidebar__hr'} />
                        <div className={'news__sidebar__radio'}>
                            <input onChange={handleChange}
                                   type="radio"
                                   name="tag"
                                   value="it"
                                   id="it_tag"
                                   checked={formData.tag === 'it'}/>IT<br />
                        </div>

                        <div className={'news__sidebar__radio'}>
                            <input onChange={handleChange}
                                   type="radio"
                                   name="tag"
                                   value="math"
                                   id="math_tag"
                                   checked={formData.tag === 'math'}/>Математика
                        </div>

                    </form>
                    <br />
                </div>
            </div>

        </div>
    )
}

export default MyNews2