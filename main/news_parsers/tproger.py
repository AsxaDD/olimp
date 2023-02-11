from bs4 import BeautifulSoup
import requests
from main.models import RuNews
from main.news_parsers.summorising_text_func import summarisingText

def tpropger_parser():
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    for i in range(1, 9):
        req1 = requests.get(f"https://tproger.ru/news/page/{i}/", headers=headers)
        soup1 = BeautifulSoup(req1.text, "lxml")
        links = []

        for link in soup1.find_all('a'):

            if link.has_attr('class'):
                if link["class"][0] == "article__link":
                    links.append("https://tproger.ru/news/" + link.get("href"))


        for link in links:
            req = requests.get(link, headers=headers)
            soup = BeautifulSoup(req.text, 'lxml')
            h1 = soup.find_all("h1", {"class": "single__title"})[0]

            text = ''
            for t in soup.find_all('p'):
                if not(t.has_attr('class')):
                    text += (' ' + t.getText())

            summary = summarisingText(text)

            date = soup.find_all("time", {"class": ["localtime", "meta__date"]})
            date = date[0].get("content")
            article_date = {
                'year': date[:4],
                'month': date[5:7],
                'day': date[8:10],
            }

            img = ""
            try:
                img = soup.find_all("img", {"class": "wp-post-image"})
                img = img[0].get('src')
            except:
                continue



            if len(summary) >= 5:
                article = RuNews(
                    title=h1.getText(),
                    content=summary,
                    date=article_date,
                    link=link,
                    pic=img,
                    tag='it',
                )

                article.save()
