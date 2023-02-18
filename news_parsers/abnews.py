import json
from bs4 import BeautifulSoup
import requests
from news_parsers.summorising_text_func import summarisingText

def abnews_parser():
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    try:
        req1 = requests.get(f"https://ab-news.ru/cat/matematika/page/1/", headers=headers)
        soup1 = BeautifulSoup(req1.text, "lxml")
        links = []

        for link in soup1.find_all('a'):
            if link.has_attr('class'):
                if link["class"][0] == "post-title":
                    links.append(link.get("href"))
        link = links[0]

        req = requests.get(link, headers=headers)
        soup = BeautifulSoup(req.text, 'lxml')
        header = soup.find_all("span", {"class": "post-title"})[0].getText()


        text = ''
        for t in soup.find_all('p'):
            if not(t.has_attr('class')):
                text += (' ' + t.getText())

        summary = summarisingText(text)
        date = soup.find_all("time", {"class": ["post-published", "updated"]})
        date = date[0].get("datetime")
        article_date = {
            'year': date[:4],
            'month': date[5:7],
            'day': date[8:10],
        }
        a = soup.find_all("a", {"class": "post-thumbnail"})
        img1 = a[0].findChildren('img')
        img = img1[0].get('src')

        res = {
               'status': 'true',
               'title': header,
               'content': summary,
               'date': json.dumps(article_date),
               'link': link,
               'pic': img,
               'tag': 'math',
               'lang': 'ru',
        }
    except:
        res = {
            'status': 'false',
        }
    requests.post('http://127.0.0.1:8000/api/create_article', data=res)

abnews_parser()

