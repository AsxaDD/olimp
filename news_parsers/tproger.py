import json
from bs4 import BeautifulSoup
import requests
from news_parsers.summorising_text_func import summarisingText

def tpropger_parser():
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    try:
        req1 = requests.get(f"https://tproger.ru/?sort=new", headers=headers)
        soup1 = BeautifulSoup(req1.text, "lxml")
        links = []
        for link in soup1.find_all('a'):
            if link.has_attr('class'):
                if link["class"][0] == "article__link":
                    links.append("https://tproger.ru/news/" + link.get("href"))
        link = links[0]

        req = requests.get(link, headers=headers)
        soup = BeautifulSoup(req.text, 'lxml')
        h1 = soup.find_all("h1", {"class": "single__title"})[0]

        text = ''
        for t in soup.find_all('p'):
            if not (t.has_attr('class')):
                text += (' ' + t.getText())

        summary = summarisingText(text)
        header = h1.getText()
        date = soup.find_all("time", {"class": ["localtime", "meta__date"]})
        date = date[0].get("content")
        article_date = {
            'year': date[:4],
            'month': date[5:7],
            'day': date[8:10],
        }

        try:
            img = soup.find_all("img", {"class": "wp-post-image"})
            img = img[0].get('src')
        except:
            img = ''

        res = {
            'status': 'true',
            'title': header,
            'content': summary,
            'date': json.dumps(article_date),
            'link': link,
            'pic': img,
            'tag': 'it',
            'lang': 'ru',
        }
    except:
        res = {
            'status': 'false',
        }
    requests.post('http://127.0.0.1:8000/api/create_article', data=res)

tpropger_parser()






