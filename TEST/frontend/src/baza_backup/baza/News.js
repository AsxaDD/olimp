import '../css/style.css'
import Topbar from "./Topbar";
import '../css/news.css'
import React from 'react';
import axios from "axios";

const PreNews = (props) => {
    return(
        <div>
            <div style={{display: 'flex'}}>

                <div className={'news__pic__wrapper'}>
                    <img alt='' src={props.pic} className={'news__pic'}/>
                </div>

                <div>
                    <h3>{props.title}</h3>
                    <div className={'news__date'}>
                        <div>{props.date.day}</div>
                        <div>{props.date.month}</div>
                        <div>{props.date.year}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



class MyNews extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            latest_id: -1,
            news: [],
            news_lang: 'ru',
            news_tag: 'it',
        };
    }

    doRequest(lang, tag){
        axios.post(`${process.env.REACT_APP_ROOT_ADDR}api/${lang}_${tag}_news/`, {
            'latest_id': `${this.state.latest_id}`,
        }).then(res => {
            try{
                let tmp_arr = this.returnPreNewsArray(res.data)
                this.setState({
                    news: this.state.news.concat(tmp_arr),
                    latest_id: tmp_arr[tmp_arr.length - 1].key,
                })
            } catch (e) {
                console.log("Больше нет новостей")
            }
        })
    }

    getNews(is_new){
        console.log(1232)
        if (is_new === 1) {
            this.setState({
                news: [],
            })
        }

        this.doRequest(this.state.news_lang, this.state.news_tag)
    }

    returnPreNewsArray(data){
        let tmp_arr = []
        for (let el in data) {
            let v = <PreNews key={data[el].id} title={data[el].title} date={data[el].date}
                             link={data[el]['link']} pic={data[el].pic}/>
            tmp_arr.push(v)
        }
        return tmp_arr
    }

    componentDidMount() {


        this.doRequest('ru', 'math')


        console.log('%%%%%%%%%%%%%%%%%', this.state.news)


    }

    componentWillUnmount() {
        this.setState({ news: [] })
    }

    handleChangeForLang=(e)=>{
        this.setState({
            news_lang: e.target.value,
            latest_id: -1,
        })
        console.log(this.state.news_lang, this.state.latest_id)
        this.getNews(1)
    }
    handleChangeForTag=(e)=>{
        this.setState({
            news_tag: e.target.value
        })
        console.log(this.state.news_tag)
    }


    render() {
        return(
            <div>
                <Topbar />
                <div className={'main__cont'} style={ {flexWrap: 'nowrap'} }>
                    <div className={'news__cont'}>
                        {this.state.news}
                    </div>
                    <div className={'news__selector'}>
                        <form>

                            <input onChange={this.handleChangeForLang} type="radio" name="ru_lang"
                                   value="ru" id="ru_lang" checked={this.state.news_lang === 'ru'}/>
                            <label htmlFor="ru_lang">Русский</label>

                            <input onChange={this.handleChangeForLang} type="radio" name="eng_lang"
                                   value="eng" id="eng_lang" checked={this.state.news_lang === 'eng'}/>
                            <label htmlFor="eng_lang">Английский</label>

                        </form>
                        <br />
                        <form>
                            <input onChange={this.handleChangeForTag} type="radio" name="it_tag" value="it" checked/>IT<br />
                            <input onChange={this.handleChangeForTag} type="radio" name="math_tag" value="math" checked/>Математика
                        </form>
                    </div>
                </div>
                <div onClick={() => this.getNews(0)}>Загрузить ещё</div>
            </div>
        )
    }
}

export default MyNews