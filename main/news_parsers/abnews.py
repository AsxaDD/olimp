from bs4 import BeautifulSoup
import requests
from main.models import RuNews
from main.news_parsers.summorising_text_func import summarisingText

def abnews_parser():
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    for i in range(1, 9):
        req1 = requests.get(f"https://ab-news.ru/cat/matematika/page/{i}/", headers=headers)
        soup1 = BeautifulSoup(req1.text, "lxml")
        links = []

        for link in soup1.find_all('a'):

            if link.has_attr('class'):
                if link["class"][0] == "post-title":
                    links.append(link.get("href"))


        for link in links:
            req = requests.get(link, headers=headers)
            soup = BeautifulSoup(req.text, 'lxml')
            h1 = soup.find_all("span", {"class": "post-title"})[0].getText()

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

            img = ""
            try:
                a = soup.find_all("a", {"class": "post-thumbnail"})
                img1 = a[0].findChildren('img')
                img = img1[0].get('src')
            except:
                continue



            if len(summary) >= 5:
                article = RuNews(
                    title=h1,
                    content=summary,
                    date=article_date,
                    link=link,
                    pic=img,
                    tag='math',
                )

                article.save()
