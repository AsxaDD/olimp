from bs4 import BeautifulSoup
import requests
from main.news_parsers.summorising_text_func import summarisingText
import json

def physorg_parser():
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    try:
        req1 = requests.get("https://phys.org/science-news/mathematics/", headers=headers)
        soup1 = BeautifulSoup(req1.text, "lxml")
        links = []

        for link in soup1.find_all('a'):
            if link.has_attr('class'):
                if link["class"][0] == "news-link":
                    links.append(link.get("href"))

        link = links[0]

        req = requests.get(link, headers=headers)
        soup = BeautifulSoup(req.text, 'lxml')
        header = soup.find_all("h1", {"class": "text-extra-large"})[0].getText()

        text = ''
        for t in soup.find_all('p'):
            if not (t.has_attr('class')):
                text += (' ' + t.getText())

        summary = summarisingText(text)
        date = soup.find("div", {"class": "article__info-item"}).findChildren('p')[0].getText()
        date = date.replace(',', ' ').split()
        months = {'Jan': "1", 'Feb': "2", 'Mar': "3", 'Apr': "4", 'May': "5", 'Jun': "6", 'Jul': "7", 'Aug': "8",
                  'Sep': "9", 'Oct': "10", 'Nov': "11", 'Dec': "12"}
        article_date = {
            'year': date[2],
            'month': months[date[0][:3]],
            'day': date[1],
        }

        a = soup.find_all("figure", {"class": "article-img"})
        img = a[0].findChildren('img')[0].get('src')

        print(header)

        res = {
            'status': 'true',
            'title': header,
            'content': summary,
            'date': json.dumps(article_date),
            'link': link,
            'pic': img,
            'tag': 'math',
            'lang': 'eng',
        }
    except:
        res = {
            'status': 'false',
        }
    requests.post('http://127.0.0.1:8000/api/create_article', data=res)

physorg_parser()


